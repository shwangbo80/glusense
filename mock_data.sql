-- =============================================
-- DIABETES DASHBOARD - MOCK DATA
-- =============================================

-- Insert mock user profile
INSERT INTO profiles (
  id, 
  email, 
  full_name, 
  avatar_url, 
  date_of_birth, 
  gender, 
  diabetes_type, 
  diagnosis_date, 
  height_cm, 
  weight_kg, 
  target_glucose_min, 
  target_glucose_max, 
  timezone, 
  units_glucose, 
  units_weight, 
  is_caregiver
) VALUES (
  '70911de0-1a1b-4552-babe-9e35e699bad1',
  'john.doe@example.com',
  'John Doe',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=john',
  '1985-03-15',
  'male',
  'type2',
  '2020-01-15',
  175,
  80.5,
  80,
  180,
  'America/New_York',
  'mg/dL',
  'kg',
  false
);

-- =============================================
-- GLUCOSE READINGS - 500 rows over 6 months
-- =============================================
INSERT INTO glucose_readings (user_id, glucose_value, units, reading_type, meal_context, notes, measured_at) 
SELECT 
  '70911de0-1a1b-4552-babe-9e35e699bad1',
  CASE 
    WHEN reading_types.reading_type = 'fasting' THEN 90 + (random() * 40)::INTEGER
    WHEN reading_types.reading_type = 'before_meal' THEN 95 + (random() * 45)::INTEGER
    WHEN reading_types.reading_type = 'after_meal' THEN 120 + (random() * 80)::INTEGER
    WHEN reading_types.reading_type = 'bedtime' THEN 100 + (random() * 50)::INTEGER
    ELSE 100 + (random() * 60)::INTEGER
  END,
  'mg/dL',
  reading_types.reading_type,
  meal_contexts.meal_context,
  CASE 
    WHEN random() < 0.3 THEN 'Feeling good'
    WHEN random() < 0.6 THEN 'Slightly tired'
    WHEN random() < 0.8 THEN 'Post exercise'
    ELSE NULL
  END,
  NOW() - (generate_series * INTERVAL '3 hours') - (random() * INTERVAL '1 hour')
FROM 
  generate_series(0, 499) AS generate_series,
  (VALUES 
    ('fasting'), ('before_meal'), ('after_meal'), ('bedtime'), ('random')
  ) AS reading_types(reading_type),
  (VALUES 
    ('breakfast'), ('lunch'), ('dinner'), ('snack'), ('none')
  ) AS meal_contexts(meal_context)
WHERE 
  generate_series % 25 = (
    CASE reading_types.reading_type
      WHEN 'fasting' THEN 0
      WHEN 'before_meal' THEN 1
      WHEN 'after_meal' THEN 2
      WHEN 'bedtime' THEN 3
      ELSE 4
    END
  )
  AND generate_series % 5 = (
    CASE meal_contexts.meal_context
      WHEN 'breakfast' THEN 0
      WHEN 'lunch' THEN 1
      WHEN 'dinner' THEN 2
      WHEN 'snack' THEN 3
      ELSE 4
    END
  );

-- =============================================
-- MEDICATIONS - 5 active medications
-- =============================================
INSERT INTO medications (user_id, name, medication_type, dosage, unit, frequency, instructions, prescriber_name, start_date, is_active) VALUES
('70911de0-1a1b-4552-babe-9e35e699bad1', 'Metformin', 'metformin', '500', 'mg', 'twice daily', 'Take with meals', 'Dr. Smith', '2020-01-15', true),
('70911de0-1a1b-4552-babe-9e35e699bad1', 'Lantus (Insulin Glargine)', 'insulin', '20', 'units', 'once daily', 'Inject at bedtime', 'Dr. Smith', '2020-02-01', true),
('70911de0-1a1b-4552-babe-9e35e699bad1', 'Humalog (Insulin Lispro)', 'insulin', '10', 'units', 'before meals', 'Inject 15 minutes before eating', 'Dr. Smith', '2020-02-01', true),
('70911de0-1a1b-4552-babe-9e35e699bad1', 'Glipizide', 'sulfonylurea', '5', 'mg', 'once daily', 'Take 30 minutes before breakfast', 'Dr. Smith', '2020-03-01', true),
('70911de0-1a1b-4552-babe-9e35e699bad1', 'Lisinopril', 'other', '10', 'mg', 'once daily', 'For blood pressure', 'Dr. Johnson', '2020-04-01', true);

-- =============================================
-- MEDICATION DOSES - 500 doses over 6 months
-- =============================================
WITH medication_ids AS (
  SELECT id, name, frequency FROM medications WHERE user_id = '70911de0-1a1b-4552-babe-9e35e699bad1'
)
INSERT INTO medication_doses (user_id, medication_id, dose_amount, dose_unit, taken_at, scheduled_at, status, notes)
SELECT 
  '70911de0-1a1b-4552-babe-9e35e699bad1',
  m.id,
  CASE 
    WHEN m.name = 'Metformin' THEN 500
    WHEN m.name = 'Lantus (Insulin Glargine)' THEN 20
    WHEN m.name = 'Humalog (Insulin Lispro)' THEN 8 + (random() * 4)::INTEGER
    WHEN m.name = 'Glipizide' THEN 5
    ELSE 10
  END,
  CASE 
    WHEN m.name LIKE '%Insulin%' THEN 'units'
    ELSE 'mg'
  END,
  times.scheduled_time + (random() * INTERVAL '30 minutes') - INTERVAL '15 minutes',
  times.scheduled_time,
  CASE 
    WHEN random() < 0.95 THEN 'taken'
    WHEN random() < 0.98 THEN 'delayed'
    ELSE 'missed'
  END,
  CASE 
    WHEN random() < 0.2 THEN 'On time'
    WHEN random() < 0.4 THEN 'Slightly late'
    ELSE NULL
  END
FROM medication_ids m
CROSS JOIN (
  SELECT 
    NOW() - (generate_series * INTERVAL '12 hours') - (random() * INTERVAL '2 hours') AS scheduled_time,
    generate_series AS series_num
  FROM generate_series(0, 100)
) AS times
WHERE 
  (m.frequency = 'twice daily' AND times.series_num % 2 = 0) OR
  (m.frequency = 'once daily' AND times.series_num % 2 = 1) OR
  (m.frequency = 'before meals' AND times.series_num % 3 = 0)
LIMIT 500;

-- =============================================
-- FOOD ENTRIES - 500 food entries over 6 months
-- =============================================
INSERT INTO food_entries (user_id, meal_type, food_name, brand, serving_size, carbs_grams, calories, protein_grams, fat_grams, fiber_grams, sugar_grams, notes, eaten_at)
SELECT 
  '70911de0-1a1b-4552-babe-9e35e699bad1',
  meal_types.meal_type,
  foods.food_name,
  foods.brand,
  foods.serving_size,
  foods.carbs_grams + (random() * 10 - 5)::DECIMAL(8,2),
  foods.calories + (random() * 50 - 25)::INTEGER,
  foods.protein_grams + (random() * 5 - 2.5)::DECIMAL(8,2),
  foods.fat_grams + (random() * 3 - 1.5)::DECIMAL(8,2),
  foods.fiber_grams + (random() * 2 - 1)::DECIMAL(8,2),
  foods.sugar_grams + (random() * 5 - 2.5)::DECIMAL(8,2),
  CASE 
    WHEN random() < 0.3 THEN 'Delicious!'
    WHEN random() < 0.6 THEN 'Good portion size'
    WHEN random() < 0.8 THEN 'Homemade'
    ELSE NULL
  END,
  NOW() - (generate_series * INTERVAL '4 hours') - (random() * INTERVAL '2 hours')
FROM 
  generate_series(0, 499) AS generate_series,
  (VALUES 
    ('breakfast'), ('lunch'), ('dinner'), ('snack')
  ) AS meal_types(meal_type),
  (VALUES 
    ('Oatmeal with berries', 'Quaker', '1 cup', 45, 250, 8, 4, 6, 12),
    ('Grilled chicken breast', 'Fresh', '6 oz', 0, 280, 52, 6, 0, 0),
    ('Brown rice', 'Uncle Ben''s', '1/2 cup', 35, 170, 4, 1, 2, 0),
    ('Greek yogurt', 'Chobani', '1 container', 15, 120, 18, 0, 0, 12),
    ('Apple', 'Fresh', '1 medium', 25, 95, 0, 0, 4, 19),
    ('Whole wheat bread', 'Nature''s Own', '2 slices', 30, 140, 6, 2, 4, 4),
    ('Salmon fillet', 'Fresh', '5 oz', 0, 350, 45, 20, 0, 0),
    ('Broccoli', 'Fresh', '1 cup', 8, 35, 4, 0, 3, 2),
    ('Pasta', 'Barilla', '1 cup', 55, 280, 10, 1, 2, 2),
    ('Eggs', 'Fresh', '2 large', 1, 140, 12, 10, 0, 0),
    ('Avocado', 'Fresh', '1/2 medium', 4, 120, 2, 11, 5, 0),
    ('Turkey sandwich', 'Subway', '6 inch', 45, 320, 24, 8, 5, 8),
    ('Mixed salad', 'Fresh', '2 cups', 12, 80, 4, 2, 6, 4),
    ('Almonds', 'Blue Diamond', '1 oz', 3, 160, 6, 14, 3, 1),
    ('Banana', 'Fresh', '1 medium', 27, 105, 1, 0, 3, 14)
  ) AS foods(food_name, brand, serving_size, carbs_grams, calories, protein_grams, fat_grams, fiber_grams, sugar_grams)
WHERE 
  generate_series % 4 = (
    CASE meal_types.meal_type
      WHEN 'breakfast' THEN 0
      WHEN 'lunch' THEN 1
      WHEN 'dinner' THEN 2
      ELSE 3
    END
  )
  AND generate_series % 15 = (
    CASE foods.food_name
      WHEN 'Oatmeal with berries' THEN 0
      WHEN 'Grilled chicken breast' THEN 1
      WHEN 'Brown rice' THEN 2
      WHEN 'Greek yogurt' THEN 3
      WHEN 'Apple' THEN 4
      WHEN 'Whole wheat bread' THEN 5
      WHEN 'Salmon fillet' THEN 6
      WHEN 'Broccoli' THEN 7
      WHEN 'Pasta' THEN 8
      WHEN 'Eggs' THEN 9
      WHEN 'Avocado' THEN 10
      WHEN 'Turkey sandwich' THEN 11
      WHEN 'Mixed salad' THEN 12
      WHEN 'Almonds' THEN 13
      ELSE 14
    END
  );

-- =============================================
-- EXERCISE ENTRIES - 500 exercise entries over 6 months
-- =============================================
INSERT INTO exercise_entries (user_id, exercise_type, activity_name, duration_minutes, intensity, calories_burned, notes, performed_at)
SELECT 
  '70911de0-1a1b-4552-babe-9e35e699bad1',
  exercises.exercise_type,
  exercises.activity_name,
  exercises.duration_minutes + (random() * 20 - 10)::INTEGER,
  exercises.intensity,
  exercises.calories_burned + (random() * 50 - 25)::INTEGER,
  CASE 
    WHEN random() < 0.3 THEN 'Great workout!'
    WHEN random() < 0.6 THEN 'Felt energized'
    WHEN random() < 0.8 THEN 'Good pace'
    ELSE NULL
  END,
  NOW() - (generate_series * INTERVAL '5 hours') - (random() * INTERVAL '3 hours')
FROM 
  generate_series(0, 499) AS generate_series,
  (VALUES 
    ('walking', 'Morning walk', 30, 'moderate', 120),
    ('cardio', 'Treadmill running', 25, 'high', 250),
    ('strength', 'Weight training', 45, 'high', 180),
    ('flexibility', 'Yoga session', 40, 'low', 100),
    ('cardio', 'Cycling', 35, 'moderate', 200),
    ('walking', 'Evening stroll', 20, 'low', 80),
    ('sports', 'Tennis', 60, 'high', 400),
    ('cardio', 'Swimming', 30, 'moderate', 250),
    ('strength', 'Bodyweight exercises', 25, 'moderate', 150),
    ('other', 'Gardening', 40, 'low', 120),
    ('cardio', 'Elliptical', 30, 'moderate', 180),
    ('flexibility', 'Stretching', 15, 'low', 50),
    ('walking', 'Hiking', 90, 'moderate', 300),
    ('sports', 'Basketball', 45, 'high', 350),
    ('cardio', 'Dance class', 50, 'moderate', 220)
  ) AS exercises(exercise_type, activity_name, duration_minutes, intensity, calories_burned)
WHERE 
  generate_series % 15 = (
    CASE exercises.activity_name
      WHEN 'Morning walk' THEN 0
      WHEN 'Treadmill running' THEN 1
      WHEN 'Weight training' THEN 2
      WHEN 'Yoga session' THEN 3
      WHEN 'Cycling' THEN 4
      WHEN 'Evening stroll' THEN 5
      WHEN 'Tennis' THEN 6
      WHEN 'Swimming' THEN 7
      WHEN 'Bodyweight exercises' THEN 8
      WHEN 'Gardening' THEN 9
      WHEN 'Elliptical' THEN 10
      WHEN 'Stretching' THEN 11
      WHEN 'Hiking' THEN 12
      WHEN 'Basketball' THEN 13
      ELSE 14
    END
  );

-- =============================================
-- HBA1C READINGS - 100+ readings over 2 years
-- =============================================
INSERT INTO hba1c_readings (user_id, hba1c_value, units, test_date, lab_name, doctor_name, notes)
SELECT 
  '70911de0-1a1b-4552-babe-9e35e699bad1',
  CASE 
    -- Simulate improvement over time with some variation
    WHEN dates.test_date < '2023-01-01' THEN 8.5 + (random() * 1.5 - 0.75)::DECIMAL(4,2)  -- Early readings: 7.75-9.25%
    WHEN dates.test_date < '2023-06-01' THEN 8.0 + (random() * 1.2 - 0.6)::DECIMAL(4,2)   -- Mid 2023: 7.4-8.6%
    WHEN dates.test_date < '2024-01-01' THEN 7.5 + (random() * 1.0 - 0.5)::DECIMAL(4,2)   -- Late 2023: 7.0-8.0%
    WHEN dates.test_date < '2024-06-01' THEN 7.2 + (random() * 0.8 - 0.4)::DECIMAL(4,2)   -- Early 2024: 6.8-7.6%
    ELSE 6.9 + (random() * 0.6 - 0.3)::DECIMAL(4,2)                                 -- Recent: 6.6-7.2%
  END,
  '%',
  dates.test_date,
  lab_names.lab_name,
  doctors.doctor_name,
  notes.note_text
FROM (
  SELECT 
    (DATE '2022-06-01' + (generate_series * INTERVAL '3 weeks') + (random() * INTERVAL '1 week'))::DATE as test_date,
    generate_series AS series_num
  FROM generate_series(0, 119) -- Generate 120 readings over ~2.5 years
) dates
CROSS JOIN (
  VALUES 
    ('LabCorp'), 
    ('Quest Diagnostics'), 
    ('BioReference'), 
    ('Sonic Healthcare'), 
    ('Hospital Lab')
) lab_names(lab_name)
CROSS JOIN (
  VALUES 
    ('Dr. Smith'), 
    ('Dr. Johnson'), 
    ('Dr. Wilson'), 
    ('Dr. Brown'), 
    ('Dr. Davis')
) doctors(doctor_name)
CROSS JOIN (
  VALUES 
    ('Baseline reading'),
    ('Improved from last reading'),
    ('Good progress, continue current regimen'),
    ('Slight increase, monitor closely'),
    ('Excellent control'),
    ('Target achieved'),
    ('Medication adjustment needed'),
    ('Stable readings'),
    ('Seasonal variation noted'),
    ('Post-holiday reading'),
    ('Follow-up after medication change'),
    ('Routine quarterly check'),
    ('Annual comprehensive test'),
    ('Pre-appointment test'),
    ('Insurance required test')
) notes(note_text)
WHERE 
  -- Distribute lab names evenly
  (dates.series_num % 5) = (
    CASE lab_names.lab_name
      WHEN 'LabCorp' THEN 0
      WHEN 'Quest Diagnostics' THEN 1
      WHEN 'BioReference' THEN 2
      WHEN 'Sonic Healthcare' THEN 3
      ELSE 4
    END
  )
  -- Distribute doctors evenly
  AND (dates.series_num % 5) = (
    CASE doctors.doctor_name
      WHEN 'Dr. Smith' THEN 0
      WHEN 'Dr. Johnson' THEN 1
      WHEN 'Dr. Wilson' THEN 2
      WHEN 'Dr. Brown' THEN 3
      ELSE 4
    END
  )
  -- Distribute notes evenly
  AND (dates.series_num % 15) = (
    CASE notes.note_text
      WHEN 'Baseline reading' THEN 0
      WHEN 'Improved from last reading' THEN 1
      WHEN 'Good progress, continue current regimen' THEN 2
      WHEN 'Slight increase, monitor closely' THEN 3
      WHEN 'Excellent control' THEN 4
      WHEN 'Target achieved' THEN 5
      WHEN 'Medication adjustment needed' THEN 6
      WHEN 'Stable readings' THEN 7
      WHEN 'Seasonal variation noted' THEN 8
      WHEN 'Post-holiday reading' THEN 9
      WHEN 'Follow-up after medication change' THEN 10
      WHEN 'Routine quarterly check' THEN 11
      WHEN 'Annual comprehensive test' THEN 12
      WHEN 'Pre-appointment test' THEN 13
      ELSE 14
    END
  )
ORDER BY dates.test_date;

-- =============================================
-- APPOINTMENTS - 10 appointments over 6 months
-- =============================================
INSERT INTO appointments (user_id, doctor_name, appointment_type, appointment_date, duration_minutes, location, notes, status) VALUES
('70911de0-1a1b-4552-babe-9e35e699bad1', 'Dr. Smith', 'routine', '2024-01-20 10:00:00', 30, 'Diabetes Center', 'Quarterly checkup', 'completed'),
('70911de0-1a1b-4552-babe-9e35e699bad1', 'Dr. Johnson', 'specialist', '2024-02-10 14:30:00', 45, 'Cardiology Clinic', 'Heart health assessment', 'completed'),
('70911de0-1a1b-4552-babe-9e35e699bad1', 'Dr. Smith', 'follow_up', '2024-03-15 09:00:00', 20, 'Diabetes Center', 'Medication adjustment', 'completed'),
('70911de0-1a1b-4552-babe-9e35e699bad1', 'Dr. Wilson', 'specialist', '2024-04-05 11:00:00', 30, 'Eye Clinic', 'Diabetic eye exam', 'completed'),
('70911de0-1a1b-4552-babe-9e35e699bad1', 'Dr. Smith', 'routine', '2024-04-20 10:00:00', 30, 'Diabetes Center', 'Quarterly checkup', 'completed'),
('70911de0-1a1b-4552-babe-9e35e699bad1', 'Dr. Brown', 'specialist', '2024-05-12 15:00:00', 40, 'Podiatry Clinic', 'Foot examination', 'completed'),
('70911de0-1a1b-4552-babe-9e35e699bad1', 'Dr. Smith', 'routine', '2024-07-20 10:00:00', 30, 'Diabetes Center', 'Quarterly checkup', 'completed'),
('70911de0-1a1b-4552-babe-9e35e699bad1', 'Dr. Johnson', 'follow_up', '2024-08-15 14:30:00', 30, 'Cardiology Clinic', 'Blood pressure followup', 'scheduled'),
('70911de0-1a1b-4552-babe-9e35e699bad1', 'Dr. Smith', 'routine', '2024-10-20 10:00:00', 30, 'Diabetes Center', 'Quarterly checkup', 'scheduled'),
('70911de0-1a1b-4552-babe-9e35e699bad1', 'Dr. Wilson', 'specialist', '2024-11-05 11:00:00', 30, 'Eye Clinic', 'Annual eye exam', 'scheduled');

-- =============================================
-- ALERTS - 20 alerts for various reminders
-- =============================================
INSERT INTO alerts (user_id, alert_type, title, message, scheduled_at, is_recurring, recurrence_pattern, is_active, is_read) VALUES
('70911de0-1a1b-4552-babe-9e35e699bad1', 'medication_reminder', 'Take Metformin', 'Time for your morning Metformin dose', '2024-07-16 08:00:00', true, 'daily', true, false),
('70911de0-1a1b-4552-babe-9e35e699bad1', 'medication_reminder', 'Take Metformin', 'Time for your evening Metformin dose', '2024-07-16 20:00:00', true, 'daily', true, false),
('70911de0-1a1b-4552-babe-9e35e699bad1', 'medication_reminder', 'Lantus Insulin', 'Time for your bedtime Lantus injection', '2024-07-16 22:00:00', true, 'daily', true, false),
('70911de0-1a1b-4552-babe-9e35e699bad1', 'glucose_check', 'Morning glucose check', 'Check your fasting blood sugar', '2024-07-16 07:00:00', true, 'daily', true, true),
('70911de0-1a1b-4552-babe-9e35e699bad1', 'glucose_check', 'Post-meal glucose check', 'Check blood sugar 2 hours after lunch', '2024-07-16 14:00:00', true, 'daily', true, false),
('70911de0-1a1b-4552-babe-9e35e699bad1', 'appointment', 'Cardiology Appointment', 'Appointment with Dr. Johnson tomorrow', '2024-08-14 09:00:00', false, null, true, false),
('70911de0-1a1b-4552-babe-9e35e699bad1', 'high_glucose', 'High Blood Sugar Alert', 'Your reading of 245 mg/dL is above target range', '2024-07-15 18:30:00', false, null, true, true),
('70911de0-1a1b-4552-babe-9e35e699bad1', 'low_glucose', 'Low Blood Sugar Alert', 'Your reading of 65 mg/dL is below target range', '2024-07-14 10:15:00', false, null, true, true),
('70911de0-1a1b-4552-babe-9e35e699bad1', 'custom', 'Exercise Reminder', 'Time for your evening walk', '2024-07-16 19:00:00', true, 'daily', true, false),
('70911de0-1a1b-4552-babe-9e35e699bad1', 'custom', 'Hydration Reminder', 'Remember to drink water', '2024-07-16 12:00:00', true, 'daily', true, true);

-- =============================================
-- HEALTH REPORTS - 5 generated reports
-- =============================================
INSERT INTO health_reports (user_id, report_type, title, date_from, date_to, avg_glucose, glucose_in_range_percent, total_carbs, total_exercise_minutes, medications_taken, medications_missed, report_data) VALUES
('70911de0-1a1b-4552-babe-9e35e699bad1', 'weekly', 'Weekly Report - July 8-14, 2024', '2024-07-08', '2024-07-14', 142.5, 72.3, 1250.5, 180, 42, 2, '{"highlights": ["Good glucose control", "Consistent exercise"], "recommendations": ["Continue current medication regimen", "Maintain exercise routine"]}'),
('70911de0-1a1b-4552-babe-9e35e699bad1', 'monthly', 'Monthly Report - June 2024', '2024-06-01', '2024-06-30', 138.7, 75.1, 5420.2, 720, 180, 8, '{"highlights": ["Improved time in range", "Weight loss of 2 lbs"], "recommendations": ["Consider reducing evening snacks", "Great progress overall"]}'),
('70911de0-1a1b-4552-babe-9e35e699bad1', 'weekly', 'Weekly Report - July 1-7, 2024', '2024-07-01', '2024-07-07', 145.2, 68.9, 1180.3, 200, 41, 3, '{"highlights": ["Stable readings", "Good medication adherence"], "recommendations": ["Monitor post-meal spikes", "Continue current plan"]}'),
('70911de0-1a1b-4552-babe-9e35e699bad1', 'monthly', 'Monthly Report - May 2024', '2024-05-01', '2024-05-31', 140.1, 73.8, 5680.8, 650, 186, 6, '{"highlights": ["Consistent exercise routine", "Good HbA1c improvement"], "recommendations": ["Focus on carb consistency", "Excellent progress"]}'),
('70911de0-1a1b-4552-babe-9e35e699bad1', 'custom', 'Pre-Appointment Report', '2024-07-01', '2024-07-15', 141.8, 71.2, 875.4, 240, 56, 4, '{"highlights": ["Ready for appointment", "Good 2-week summary"], "recommendations": ["Discuss medication timing", "Review exercise plan"]}');

-- Display summary of inserted data
SELECT 
  'profiles' as table_name, 
  COUNT(*) as row_count 
FROM profiles 
WHERE id = '70911de0-1a1b-4552-babe-9e35e699bad1'

UNION ALL

SELECT 
  'glucose_readings' as table_name, 
  COUNT(*) as row_count 
FROM glucose_readings 
WHERE user_id = '70911de0-1a1b-4552-babe-9e35e699bad1'

UNION ALL

SELECT 
  'medications' as table_name, 
  COUNT(*) as row_count 
FROM medications 
WHERE user_id = '70911de0-1a1b-4552-babe-9e35e699bad1'

UNION ALL

SELECT 
  'medication_doses' as table_name, 
  COUNT(*) as row_count 
FROM medication_doses 
WHERE user_id = '70911de0-1a1b-4552-babe-9e35e699bad1'

UNION ALL

SELECT 
  'food_entries' as table_name, 
  COUNT(*) as row_count 
FROM food_entries 
WHERE user_id = '70911de0-1a1b-4552-babe-9e35e699bad1'

UNION ALL

SELECT 
  'exercise_entries' as table_name, 
  COUNT(*) as row_count 
FROM exercise_entries 
WHERE user_id = '70911de0-1a1b-4552-babe-9e35e699bad1'

UNION ALL

SELECT 
  'hba1c_readings' as table_name, 
  COUNT(*) as row_count 
FROM hba1c_readings 
WHERE user_id = '70911de0-1a1b-4552-babe-9e35e699bad1'

UNION ALL

SELECT 
  'appointments' as table_name, 
  COUNT(*) as row_count 
FROM appointments 
WHERE user_id = '70911de0-1a1b-4552-babe-9e35e699bad1'

UNION ALL

SELECT 
  'alerts' as table_name, 
  COUNT(*) as row_count 
FROM alerts 
WHERE user_id = '70911de0-1a1b-4552-babe-9e35e699bad1'

UNION ALL

SELECT 
  'health_reports' as table_name, 
  COUNT(*) as row_count 
FROM health_reports 
WHERE user_id = '70911de0-1a1b-4552-babe-9e35e699bad1'

ORDER BY table_name;
