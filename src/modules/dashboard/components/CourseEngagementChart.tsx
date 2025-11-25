"use client";

import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const sampleData = [
  { month: "Jan", enrollments: 220, completions: 300 },
  { month: "Feb", enrollments: 240, completions: 320 },
  { month: "Mar", enrollments: 230, completions: 310 },
  { month: "Apr", enrollments: 210, completions: 305 },
  { month: "May", enrollments: 200, completions: 210 },
  { month: "Jun", enrollments: 220, completions: 90 },
  { month: "Jul", enrollments: 215, completions: 85 },
  { month: "Aug", enrollments: 220, completions: 75 },
  { month: "Sep", enrollments: 210, completions: 80 },
  { month: "Oct", enrollments: 215, completions: 75 },
  { month: "Nov", enrollments: 80, completions: 170 },
  { month: "Dec", enrollments: 210, completions: 180 },
];

export default function CourseEngagementChart({
  data = sampleData,
}: {
  data?: typeof sampleData;
}) {
  const primaryColor = "#16B1FF"; // Blue
  const successColor = "#56CA00"; // Green

  return (
    <div
      className="rounded-xl border bg-card p-6 shadow-sm"
      style={{ borderColor: "var(--border)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Course Engagement</h3>
        <div className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded">
          Yearly ▾
        </div>
      </div>

      {/* Chart */}
      <div style={{ width: "100%", height: 320 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            barSize={18} // slimmer bars
            barGap={2} // spacing BETWEEN bars in a group
            barCategoryGap="28%" // spacing BETWEEN months
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--grey-4)"
              vertical={false} // matches screenshot
            />

            <XAxis
              dataKey="month"
              tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              wrapperStyle={{
                borderRadius: 10,
                border: "none",
                boxShadow: "0 6px 20px rgba(0,0,0,0.07)",
                padding: 6,
              }}
            />

            <Legend wrapperStyle={{ paddingTop: 16 }} />

            <Bar
              dataKey="enrollments"
              fill={primaryColor}
              radius={[6, 6, 0, 0]}
            />

            <Bar
              dataKey="completions"
              fill={successColor}
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
