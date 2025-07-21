-- =============================================
-- DIABETES DASHBOARD - SUPABASE SQL SCHEMA
-- =============================================

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================
-- USER PROFILES TABLE
-- =============================================
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  date_of_birth DATE,
  gender TEXT CHECK (gender IN ('male', 'female', 'other')),
  diabetes_type TEXT CHECK (diabetes_type IN ('type1', 'type2', 'gestational', 'other')),
  diagnosis_date DATE,
  height_cm INTEGER,
  weight_kg DECIMAL(5,2),
  target_glucose_min INTEGER DEFAULT 80,
  target_glucose_max INTEGER DEFAULT 180,
  timezone TEXT DEFAULT 'UTC',
  units_glucose TEXT DEFAULT 'mg/dL' CHECK (units_glucose IN ('mg/dL', 'mmol/L')),
  units_weight TEXT DEFAULT 'kg' CHECK (units_weight IN ('kg', 'lbs')),
  is_caregiver BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- CAREGIVER RELATIONSHIPS TABLE
-- =============================================
CREATE TABLE caregiver_relationships (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  caregiver_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  patient_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  relationship_type TEXT CHECK (relationship_type IN ('family', 'friend', 'healthcare_provider', 'other')),
  permissions TEXT[] DEFAULT ARRAY['view_glucose', 'view_medications', 'view_food', 'view_exercise'],
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(caregiver_id, patient_id)
);

-- =============================================
-- BLOOD SUGAR READINGS TABLE
-- =============================================
CREATE TABLE glucose_readings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  glucose_value INTEGER NOT NULL,
  units TEXT DEFAULT 'mg/dL' CHECK (units IN ('mg/dL', 'mmol/L')),
  reading_type TEXT CHECK (reading_type IN ('fasting', 'before_meal', 'after_meal', 'bedtime', 'random', 'continuous')),
  meal_context TEXT CHECK (meal_context IN ('breakfast', 'lunch', 'dinner', 'snack', 'none')),
  notes TEXT,
  tags TEXT[],
  measured_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- MEDICATIONS TABLE
-- =============================================
CREATE TABLE medications (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  medication_type TEXT CHECK (medication_type IN ('insulin', 'metformin', 'sulfonylurea', 'other')),
  dosage TEXT,
  unit TEXT,
  frequency TEXT,
  instructions TEXT,
  prescriber_name TEXT,
  start_date DATE,
  end_date DATE,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- MEDICATION DOSES TABLE
-- =============================================
CREATE TABLE medication_doses (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  medication_id UUID REFERENCES medications(id) ON DELETE CASCADE,
  dose_amount DECIMAL(10,2) NOT NULL,
  dose_unit TEXT,
  taken_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  scheduled_at TIMESTAMP WITH TIME ZONE,
  status TEXT DEFAULT 'taken' CHECK (status IN ('taken', 'missed', 'delayed')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- FOOD ENTRIES TABLE
-- =============================================
CREATE TABLE food_entries (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  meal_type TEXT CHECK (meal_type IN ('breakfast', 'lunch', 'dinner', 'snack')),
  food_name TEXT NOT NULL,
  brand TEXT,
  serving_size TEXT,
  carbs_grams DECIMAL(8,2),
  calories INTEGER,
  protein_grams DECIMAL(8,2),
  fat_grams DECIMAL(8,2),
  fiber_grams DECIMAL(8,2),
  sugar_grams DECIMAL(8,2),
  notes TEXT,
  eaten_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- EXERCISE ENTRIES TABLE
-- =============================================
CREATE TABLE exercise_entries (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  exercise_type TEXT CHECK (exercise_type IN ('cardio', 'strength', 'flexibility', 'sports', 'walking', 'other')),
  activity_name TEXT NOT NULL,
  duration_minutes INTEGER,
  intensity TEXT CHECK (intensity IN ('low', 'moderate', 'high')),
  calories_burned INTEGER,
  notes TEXT,
  performed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- HEALTH REPORTS TABLE
-- =============================================
CREATE TABLE health_reports (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  report_type TEXT CHECK (report_type IN ('daily', 'weekly', 'monthly', 'custom')),
  title TEXT NOT NULL,
  date_from DATE NOT NULL,
  date_to DATE NOT NULL,
  avg_glucose DECIMAL(8,2),
  glucose_in_range_percent DECIMAL(5,2),
  total_carbs DECIMAL(10,2),
  total_exercise_minutes INTEGER,
  medications_taken INTEGER,
  medications_missed INTEGER,
  report_data JSONB,
  generated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- ALERTS AND NOTIFICATIONS TABLE
-- =============================================
CREATE TABLE alerts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  alert_type TEXT CHECK (alert_type IN ('medication_reminder', 'glucose_check', 'appointment', 'high_glucose', 'low_glucose', 'custom')),
  title TEXT NOT NULL,
  message TEXT,
  scheduled_at TIMESTAMP WITH TIME ZONE,
  is_recurring BOOLEAN DEFAULT false,
  recurrence_pattern TEXT,
  is_active BOOLEAN DEFAULT true,
  is_read BOOLEAN DEFAULT false,
  triggered_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- DOCTOR APPOINTMENTS TABLE
-- =============================================
CREATE TABLE appointments (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  doctor_name TEXT NOT NULL,
  appointment_type TEXT CHECK (appointment_type IN ('routine', 'emergency', 'follow_up', 'specialist')),
  appointment_date TIMESTAMP WITH TIME ZONE NOT NULL,
  duration_minutes INTEGER DEFAULT 30,
  location TEXT,
  notes TEXT,
  status TEXT DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'completed', 'cancelled', 'rescheduled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- HBA1C READINGS TABLE
-- =============================================
CREATE TABLE hba1c_readings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  hba1c_value DECIMAL(4,2) NOT NULL,
  units TEXT DEFAULT '%' CHECK (units IN ('%', 'mmol/mol')),
  test_date DATE NOT NULL,
  lab_name TEXT,
  doctor_name TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- INDEXES FOR PERFORMANCE
-- =============================================
CREATE INDEX idx_glucose_readings_user_id_measured_at ON glucose_readings(user_id, measured_at DESC);
CREATE INDEX idx_medication_doses_user_id_taken_at ON medication_doses(user_id, taken_at DESC);
CREATE INDEX idx_food_entries_user_id_eaten_at ON food_entries(user_id, eaten_at DESC);
CREATE INDEX idx_exercise_entries_user_id_performed_at ON exercise_entries(user_id, performed_at DESC);
CREATE INDEX idx_alerts_user_id_scheduled_at ON alerts(user_id, scheduled_at);
CREATE INDEX idx_appointments_user_id_appointment_date ON appointments(user_id, appointment_date);
CREATE INDEX idx_hba1c_readings_user_id_test_date ON hba1c_readings(user_id, test_date DESC);

-- =============================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =============================================

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE caregiver_relationships ENABLE ROW LEVEL SECURITY;
ALTER TABLE glucose_readings ENABLE ROW LEVEL SECURITY;
ALTER TABLE medications ENABLE ROW LEVEL SECURITY;
ALTER TABLE medication_doses ENABLE ROW LEVEL SECURITY;
ALTER TABLE food_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE exercise_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE health_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE alerts ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE hba1c_readings ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Caregiver relationships policies
CREATE POLICY "Users can view caregiver relationships" ON caregiver_relationships
  FOR SELECT USING (auth.uid() = caregiver_id OR auth.uid() = patient_id);

CREATE POLICY "Users can manage caregiver relationships" ON caregiver_relationships
  FOR ALL USING (auth.uid() = caregiver_id OR auth.uid() = patient_id);

-- Data access policies (glucose, medications, food, exercise, etc.)
CREATE POLICY "Users can access own data" ON glucose_readings
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can access own medications" ON medications
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can access own medication doses" ON medication_doses
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can access own food entries" ON food_entries
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can access own exercise entries" ON exercise_entries
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can access own health reports" ON health_reports
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can access own alerts" ON alerts
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can access own appointments" ON appointments
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can access own hba1c readings" ON hba1c_readings
  FOR ALL USING (auth.uid() = user_id);

-- Caregiver access policies
CREATE POLICY "Caregivers can view patient glucose readings" ON glucose_readings
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM caregiver_relationships 
      WHERE caregiver_id = auth.uid() 
      AND patient_id = glucose_readings.user_id 
      AND is_active = true
      AND 'view_glucose' = ANY(permissions)
    )
  );

CREATE POLICY "Caregivers can view patient medications" ON medications
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM caregiver_relationships 
      WHERE caregiver_id = auth.uid() 
      AND patient_id = medications.user_id 
      AND is_active = true
      AND 'view_medications' = ANY(permissions)
    )
  );

-- =============================================
-- FUNCTIONS AND TRIGGERS
-- =============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_medications_updated_at
  BEFORE UPDATE ON medications
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_appointments_updated_at
  BEFORE UPDATE ON appointments
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Function to create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, avatar_url)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'avatar_url'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to calculate glucose statistics
CREATE OR REPLACE FUNCTION calculate_glucose_stats(
  user_uuid UUID,
  start_date DATE,
  end_date DATE
)
RETURNS TABLE (
  avg_glucose DECIMAL,
  min_glucose INTEGER,
  max_glucose INTEGER,
  readings_count INTEGER,
  in_range_count INTEGER,
  in_range_percentage DECIMAL
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    ROUND(AVG(glucose_value)::DECIMAL, 2) as avg_glucose,
    MIN(glucose_value) as min_glucose,
    MAX(glucose_value) as max_glucose,
    COUNT(*)::INTEGER as readings_count,
    COUNT(CASE WHEN glucose_value BETWEEN 
      (SELECT target_glucose_min FROM profiles WHERE id = user_uuid) AND 
      (SELECT target_glucose_max FROM profiles WHERE id = user_uuid) 
      THEN 1 END)::INTEGER as in_range_count,
    ROUND(
      (COUNT(CASE WHEN glucose_value BETWEEN 
        (SELECT target_glucose_min FROM profiles WHERE id = user_uuid) AND 
        (SELECT target_glucose_max FROM profiles WHERE id = user_uuid) 
        THEN 1 END) * 100.0 / COUNT(*))::DECIMAL, 2
    ) as in_range_percentage
  FROM glucose_readings 
  WHERE user_id = user_uuid 
  AND measured_at::DATE BETWEEN start_date AND end_date;
END;
$$ LANGUAGE plpgsql;

-- =============================================
-- SAMPLE DATA VIEWS
-- =============================================

-- View for dashboard summary
CREATE VIEW dashboard_summary AS
SELECT 
  p.id as user_id,
  p.full_name,
  p.diabetes_type,
  COUNT(DISTINCT gr.id) as total_glucose_readings,
  COUNT(DISTINCT md.id) as total_medication_doses,
  COUNT(DISTINCT fe.id) as total_food_entries,
  COUNT(DISTINCT ee.id) as total_exercise_entries,
  AVG(gr.glucose_value) as avg_glucose_last_30_days
FROM profiles p
LEFT JOIN glucose_readings gr ON p.id = gr.user_id AND gr.measured_at >= NOW() - INTERVAL '30 days'
LEFT JOIN medication_doses md ON p.id = md.user_id AND md.taken_at >= NOW() - INTERVAL '30 days'
LEFT JOIN food_entries fe ON p.id = fe.user_id AND fe.eaten_at >= NOW() - INTERVAL '30 days'
LEFT JOIN exercise_entries ee ON p.id = ee.user_id AND ee.performed_at >= NOW() - INTERVAL '30 days'
GROUP BY p.id, p.full_name, p.diabetes_type;

-- View for recent activity
CREATE VIEW recent_activity AS
SELECT 
  'glucose' as activity_type,
  user_id,
  glucose_value::TEXT as value,
  'mg/dL' as unit,
  measured_at as activity_time,
  notes
FROM glucose_readings
WHERE measured_at >= NOW() - INTERVAL '7 days'

UNION ALL

SELECT 
  'medication' as activity_type,
  user_id,
  dose_amount::TEXT as value,
  dose_unit as unit,
  taken_at as activity_time,
  notes
FROM medication_doses
WHERE taken_at >= NOW() - INTERVAL '7 days'

UNION ALL

SELECT 
  'food' as activity_type,
  user_id,
  carbs_grams::TEXT as value,
  'g carbs' as unit,
  eaten_at as activity_time,
  notes
FROM food_entries
WHERE eaten_at >= NOW() - INTERVAL '7 days'

UNION ALL

SELECT 
  'exercise' as activity_type,
  user_id,
  duration_minutes::TEXT as value,
  'minutes' as unit,
  performed_at as activity_time,
  notes
FROM exercise_entries
WHERE performed_at >= NOW() - INTERVAL '7 days'

ORDER BY activity_time DESC;
