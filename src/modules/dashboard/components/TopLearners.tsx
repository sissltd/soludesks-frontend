"use client";

import React from "react";

const learners = [
  { id: 1, name: "Sophia Carter", points: 2331 },
  { id: 2, name: "Emma Thompson", points: 1331 },
  { id: 3, name: "Liam Johnson", points: 900 },
];

export default function TopLearners() {
  return (
    <div
      className="rounded-xl border bg-card p-4 shadow-sm"
      style={{ borderColor: "var(--border)" }}
    >
      <h4 className="font-semibold mb-4">Top Performing Learners</h4>
      <ol className="space-y-3">
        {learners.map((l, i) => (
          <li key={l.id} className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="text-sm font-semibold w-6">{i + 1}</div>
              <div className="flex flex-col">
                <div className="font-medium">{l.name}</div>
                <div className="text-xs text-muted-foreground">
                  {l.points} points
                </div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              {l.points}points
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
