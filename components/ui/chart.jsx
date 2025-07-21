"use client";
import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "@/lib/utils";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = {
 light: "",
 dark: ".dark",
};

const ChartContext = React.createContext(null);

function useChart() {
 const context = React.useContext(ChartContext);

 if (!context) {
  throw new Error("useChart must be used within a <ChartContainer />");
 }

 return context;
}

function ChartContainer({ id, className, children, config, ...props }) {
 const uniqueId = React.useId();
 const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

 return (
  <ChartContext.Provider value={{ config }}>
   <div
    data-slot="chart"
    data-chart={chartId}
    className={cn(
     "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
     className
    )}
    {...props}
   >
    <ChartStyle id={chartId} config={config} />
    <RechartsPrimitive.ResponsiveContainer>
     {children}
    </RechartsPrimitive.ResponsiveContainer>
   </div>
  </ChartContext.Provider>
 );
}

const ChartStyle = ({ id, config }) => {
 const colorConfig = Object.entries(config).filter(
  ([, config]) => config.theme || config.color
 );

 if (!colorConfig.length) {
  return null;
 }

 return (
  <style
   dangerouslySetInnerHTML={{
    __html: Object.entries(THEMES)
     .map(
      ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
 .map(([key, itemConfig]) => {
  const color = itemConfig.theme?.[theme] || itemConfig.color;
  return color ? `  --color-${key}: ${color};` : null;
 })
 .join("\n")}
}
`
     )
     .join("\n"),
   }}
  />
 );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

function ChartTooltipContent({
 active,
 payload,
 className,
 indicator = "dot",
 hideLabel = false,
 hideIndicator = false,
 label,
 labelFormatter,
 labelClassName,
 formatter,
 color,
 nameKey,
 labelKey,
}) {
 const { config } = useChart();

 const tooltipLabel = React.useMemo(() => {
  if (hideLabel || !payload?.length) {
   return null;
  }

  const [item] = payload;
  const key = `${labelKey || item?.dataKey || item?.name || "value"}`;
  const itemConfig = getPayloadConfigFromPayload(config, item, key);
  const value =
   !labelKey && typeof label === "string"
    ? config[label]?.label || label
    : itemConfig?.label;

  if (labelFormatter) {
   return (
    <div className={cn("font-medium", labelClassName)}>
     {labelFormatter(value, payload)}
    </div>
   );
  }

  if (!value) {
   return null;
  }

  return <div className={cn("font-medium", labelClassName)}>{value}</div>;
 }, [
  label,
  labelFormatter,
  payload,
  hideLabel,
  labelClassName,
  config,
  labelKey,
 ]);

 if (!active || !payload?.length) {
  return null;
 }

 const nestLabel = payload.length === 1 && indicator !== "dot";

 return (
  <div
   className={cn(
    "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
    className
   )}
  >
   {!nestLabel ? tooltipLabel : null}
   <div className="grid gap-1.5">
    {payload.map((item, index) => {
     const key = `${nameKey || item.name || item.dataKey || "value"}`;
     const itemConfig = getPayloadConfigFromPayload(config, item, key);
     const indicatorColor = color || item.payload.fill || item.color;

     return (
      <div
       key={item.dataKey}
       className={cn(
        "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
        indicator === "dot" && "items-center"
       )}
      >
       {formatter && item?.value !== undefined && item.name ? (
        formatter(item.value, item.name, item, index, item.payload)
       ) : (
        <>
         {itemConfig?.icon ? (
          <itemConfig.icon />
         ) : (
          !hideIndicator && (
           <div
            className={cn(
             "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
             {
              "h-2.5 w-2.5": indicator === "dot",
              "w-1": indicator === "line",
              "w-0 border-[1.5px] border-dashed bg-transparent":
               indicator === "dashed",
              "my-0.5": nestLabel && indicator === "dashed",
             }
            )}
            style={{
             "--color-bg": indicatorColor,
             "--color-border": indicatorColor,
            }}
           />
          )
         )}
         <div
          className={cn(
           "flex flex-1 justify-between leading-none",
           nestLabel ? "items-end" : "items-center"
          )}
         >
          <div className="grid gap-1.5">
           {nestLabel ? tooltipLabel : null}
           <span className="text-muted-foreground">
            {itemConfig?.label || item.name}
           </span>
          </div>
          {item.value && (
           <span className="text-foreground font-mono font-medium tabular-nums">
            {item.value.toLocaleString()}
           </span>
          )}
         </div>
        </>
       )}
      </div>
     );
    })}
   </div>
  </div>
 );
}

const ChartLegend = RechartsPrimitive.Legend;

function ChartLegendContent({
 className,
 hideIcon = false,
 payload,
 verticalAlign = "bottom",
 nameKey,
}) {
 const { config } = useChart();

 if (!payload?.length) {
  return null;
 }

 return (
  <div
   className={cn(
    "flex items-center justify-center gap-4",
    verticalAlign === "top" ? "pb-3" : "pt-3",
    className
   )}
  >
   {payload.map((item) => {
    const key = `${nameKey || item.dataKey || "value"}`;
    const itemConfig = getPayloadConfigFromPayload(config, item, key);

    return (
     <div
      key={item.value}
      className={cn(
       "[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
      )}
     >
      {itemConfig?.icon && !hideIcon ? (
       <itemConfig.icon />
      ) : (
       <div
        className="h-2 w-2 shrink-0 rounded-[2px]"
        style={{
         backgroundColor: item.color,
        }}
       />
      )}
      {itemConfig?.label}
     </div>
    );
   })}
  </div>
 );
}

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config, payload, key) {
 if (typeof payload !== "object" || payload === null) {
  return undefined;
 }

 const payloadPayload =
  "payload" in payload &&
  typeof payload.payload === "object" &&
  payload.payload !== null
   ? payload.payload
   : undefined;

 let configLabelKey = key;

 if (key in payload && typeof payload[key] === "string") {
  configLabelKey = payload[key];
 } else if (
  payloadPayload &&
  key in payloadPayload &&
  typeof payloadPayload[key] === "string"
 ) {
  configLabelKey = payloadPayload[key];
 }

 return configLabelKey in config ? config[configLabelKey] : config[key];
}

// Simple Chart component that can handle different chart types
function Chart({ type, data, options = {}, className, ...props }) {
 const config = {
  value: {
   label: options.valueLabel || "Value",
   color: options.valueColor || "hsl(var(--chart-1))",
  },
  value2: {
   label: options.value2Label || "Value 2",
   color: options.value2Color || "hsl(var(--chart-2))",
  },
 };

 // Sample data for different chart types
 const sampleData = [
  { name: "A", value: 400, value2: 240 },
  { name: "B", value: 300, value2: 139 },
  { name: "C", value: 200, value2: 980 },
  { name: "D", value: 278, value2: 390 },
  { name: "E", value: 189, value2: 480 },
 ];

 const pieData = [
  { name: "Group A", value: 400, fill: "hsl(var(--chart-1))" },
  { name: "Group B", value: 300, fill: "hsl(var(--chart-2))" },
  { name: "Group C", value: 300, fill: "hsl(var(--chart-3))" },
  { name: "Group D", value: 200, fill: "hsl(var(--chart-4))" },
 ];

 const radarData = [
  { subject: "Math", A: 120, B: 110, fullMark: 150 },
  { subject: "Chinese", A: 98, B: 130, fullMark: 150 },
  { subject: "English", A: 86, B: 130, fullMark: 150 },
  { subject: "Geography", A: 99, B: 100, fullMark: 150 },
  { subject: "Physics", A: 85, B: 90, fullMark: 150 },
  { subject: "History", A: 65, B: 85, fullMark: 150 },
 ];

 const chartData = data && Object.keys(data).length > 0 ? data : sampleData;

 return (
  <ChartContainer config={config} className={className} {...props}>
   {type === "bar" && (
    <RechartsPrimitive.BarChart data={chartData}>
     {options.showGrid !== false && (
      <RechartsPrimitive.CartesianGrid
       vertical={options.verticalGrid || false}
      />
     )}
     {options.showXAxis !== false && (
      <RechartsPrimitive.XAxis dataKey={options.xAxisKey || "name"} />
     )}
     {options.showYAxis !== false && <RechartsPrimitive.YAxis />}
     {options.showTooltip !== false && (
      <ChartTooltip content={<ChartTooltipContent />} />
     )}
     {options.showLegend && <ChartLegend content={<ChartLegendContent />} />}
     <RechartsPrimitive.Bar
      dataKey={options.dataKey || "value"}
      fill={options.barColor || "var(--color-value)"}
      radius={options.barRadius || 0}
     />
    </RechartsPrimitive.BarChart>
   )}
   {type === "stacked-bar" && (
    <RechartsPrimitive.BarChart data={chartData}>
     {options.showGrid !== false && (
      <RechartsPrimitive.CartesianGrid
       vertical={options.verticalGrid || false}
      />
     )}
     {options.showXAxis !== false && (
      <RechartsPrimitive.XAxis dataKey={options.xAxisKey || "name"} />
     )}
     {options.showYAxis !== false && <RechartsPrimitive.YAxis />}
     {options.showTooltip !== false && (
      <ChartTooltip content={<ChartTooltipContent />} />
     )}
     {options.showLegend && <ChartLegend content={<ChartLegendContent />} />}
     <RechartsPrimitive.Bar
      dataKey="value"
      stackId="a"
      fill="var(--color-value)"
     />
     <RechartsPrimitive.Bar
      dataKey="value2"
      stackId="a"
      fill="var(--color-value2)"
     />
    </RechartsPrimitive.BarChart>
   )}
   {type === "line" && (
    <RechartsPrimitive.LineChart data={chartData}>
     {options.showGrid !== false && (
      <RechartsPrimitive.CartesianGrid
       vertical={options.verticalGrid || false}
      />
     )}
     {options.showXAxis !== false && (
      <RechartsPrimitive.XAxis dataKey={options.xAxisKey || "name"} />
     )}
     {options.showYAxis !== false && <RechartsPrimitive.YAxis />}
     {options.showTooltip !== false && (
      <ChartTooltip content={<ChartTooltipContent />} />
     )}
     {options.showLegend && <ChartLegend content={<ChartLegendContent />} />}
     <RechartsPrimitive.Line
      type={options.lineType || "monotone"}
      dataKey={options.dataKey || "value"}
      stroke={options.lineColor || "var(--color-value)"}
      strokeWidth={options.lineWidth || 2}
      dot={options.showDots !== false}
     />
    </RechartsPrimitive.LineChart>
   )}
   {type === "area" && (
    <RechartsPrimitive.AreaChart data={chartData}>
     {options.showGrid !== false && (
      <RechartsPrimitive.CartesianGrid
       vertical={options.verticalGrid || false}
      />
     )}
     {options.showXAxis !== false && (
      <RechartsPrimitive.XAxis dataKey={options.xAxisKey || "name"} />
     )}
     {options.showYAxis !== false && <RechartsPrimitive.YAxis />}
     {options.showTooltip !== false && (
      <ChartTooltip content={<ChartTooltipContent />} />
     )}
     {options.showLegend && <ChartLegend content={<ChartLegendContent />} />}
     <RechartsPrimitive.Area
      type={options.areaType || "monotone"}
      dataKey={options.dataKey || "value"}
      stroke={options.strokeColor || "var(--color-value)"}
      fill={options.fillColor || "var(--color-value)"}
      fillOpacity={options.fillOpacity || 1}
     />
    </RechartsPrimitive.AreaChart>
   )}
   {type === "stacked-area" && (
    <RechartsPrimitive.AreaChart data={chartData}>
     {options.showGrid !== false && (
      <RechartsPrimitive.CartesianGrid
       vertical={options.verticalGrid || false}
      />
     )}
     {options.showXAxis !== false && (
      <RechartsPrimitive.XAxis dataKey={options.xAxisKey || "name"} />
     )}
     {options.showYAxis !== false && <RechartsPrimitive.YAxis />}
     {options.showTooltip !== false && (
      <ChartTooltip content={<ChartTooltipContent />} />
     )}
     {options.showLegend && <ChartLegend content={<ChartLegendContent />} />}
     <RechartsPrimitive.Area
      type="monotone"
      dataKey="value"
      stackId="1"
      stroke="var(--color-value)"
      fill="var(--color-value)"
     />
     <RechartsPrimitive.Area
      type="monotone"
      dataKey="value2"
      stackId="1"
      stroke="var(--color-value2)"
      fill="var(--color-value2)"
     />
    </RechartsPrimitive.AreaChart>
   )}
   {type === "pie" && (
    <RechartsPrimitive.PieChart>
     {options.showTooltip !== false && (
      <ChartTooltip content={<ChartTooltipContent />} />
     )}
     {options.showLegend && <ChartLegend content={<ChartLegendContent />} />}
     <RechartsPrimitive.Pie
      data={pieData}
      cx={options.centerX || "50%"}
      cy={options.centerY || "50%"}
      labelLine={options.showLabelLine !== false}
      outerRadius={options.outerRadius || 80}
      fill={options.pieColor || "#8884d8"}
      dataKey={options.dataKey || "value"}
      label={options.showLabels}
     />
    </RechartsPrimitive.PieChart>
   )}
   {type === "donut" && (
    <RechartsPrimitive.PieChart>
     {options.showTooltip !== false && (
      <ChartTooltip content={<ChartTooltipContent />} />
     )}
     {options.showLegend && <ChartLegend content={<ChartLegendContent />} />}
     <RechartsPrimitive.Pie
      data={chartData}
      cx={options.centerX || "50%"}
      cy={options.centerY || "50%"}
      labelLine={options.showLabelLine !== false}
      outerRadius={options.outerRadius || 80}
      innerRadius={options.innerRadius || 40}
      fill={options.pieColor || "#8884d8"}
      dataKey={options.dataKey || "value"}
      label={options.showLabels}
     />
    </RechartsPrimitive.PieChart>
   )}
   {type === "radar" && (
    <RechartsPrimitive.RadarChart data={radarData}>
     {options.showTooltip !== false && (
      <ChartTooltip content={<ChartTooltipContent />} />
     )}
     {options.showLegend && <ChartLegend content={<ChartLegendContent />} />}
     <RechartsPrimitive.PolarGrid />
     <RechartsPrimitive.PolarAngleAxis
      dataKey={options.angleKey || "subject"}
     />
     <RechartsPrimitive.PolarRadiusAxis />
     <RechartsPrimitive.Radar
      name={options.radarName || "A"}
      dataKey={options.dataKey || "A"}
      stroke={options.radarStroke || "var(--color-value)"}
      fill={options.radarFill || "var(--color-value)"}
      fillOpacity={options.fillOpacity || 0.6}
     />
    </RechartsPrimitive.RadarChart>
   )}
   {type === "scatter" && (
    <RechartsPrimitive.ScatterChart data={chartData}>
     {options.showGrid !== false && <RechartsPrimitive.CartesianGrid />}
     {options.showXAxis !== false && (
      <RechartsPrimitive.XAxis dataKey={options.xAxisKey || "name"} />
     )}
     {options.showYAxis !== false && <RechartsPrimitive.YAxis />}
     {options.showTooltip !== false && (
      <ChartTooltip content={<ChartTooltipContent />} />
     )}
     {options.showLegend && <ChartLegend content={<ChartLegendContent />} />}
     <RechartsPrimitive.Scatter
      dataKey={options.dataKey || "value"}
      fill={options.scatterColor || "var(--color-value)"}
     />
    </RechartsPrimitive.ScatterChart>
   )}
   {type === "radial-bar" && (
    <RechartsPrimitive.RadialBarChart
     data={pieData}
     innerRadius={options.innerRadius || "20%"}
     outerRadius={options.outerRadius || "90%"}
    >
     {options.showTooltip !== false && (
      <ChartTooltip content={<ChartTooltipContent />} />
     )}
     {options.showLegend && <ChartLegend content={<ChartLegendContent />} />}
     <RechartsPrimitive.RadialBar
      dataKey={options.dataKey || "value"}
      cornerRadius={options.cornerRadius || 10}
      fill={options.barColor || "var(--color-value)"}
     />
    </RechartsPrimitive.RadialBarChart>
   )}
  </ChartContainer>
 );
}

export {
 ChartContainer,
 ChartTooltip,
 ChartTooltipContent,
 ChartLegend,
 ChartLegendContent,
 ChartStyle,
 Chart,
};
