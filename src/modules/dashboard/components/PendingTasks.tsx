"use client";

import React from "react";
import { ArrowRight2 } from "iconsax-react";

type Task = {
  id: string;
  label: "Low" | "High" | "Medium";
  title: string;
  action: string;
};

const tasks: Task[] = [
  {
    id: "1",
    label: "Low",
    title: "Review 5 new assessment submission",
    action: "Review",
  },
  {
    id: "2",
    label: "High",
    title: "Review settings configuration",
    action: "Update",
  },
  {
    id: "3",
    label: "Low",
    title: "Continue editing User Onboarding course creation",
    action: "Resume",
  },
  {
    id: "4",
    label: "Low",
    title: "Approve 3 new user registrations",
    action: "Review",
  },
];

export default function PendingTasks() {
  return (
    <div
      className="rounded-xl border bg-card p-6 shadow-sm"
      style={{ borderColor: "var(--border)" }}
    >
      <h3 className="text-lg font-semibold mb-4">Pending Tasks</h3>

      <div className="flex flex-col gap-3">
        {tasks.map((t) => (
          <div
            key={t.id}
            className="flex items-center justify-between gap-4 rounded-lg bg-muted p-3"
          >
            <div>
              <div
                className="text-xs inline-block px-2 py-1 rounded-full"
                style={{
                  background:
                    t.label === "High" ? "var(--error-2)" : "var(--primary-1)",
                  color: "var(--primary-7)",
                }}
              >
                {t.label}
              </div>
              <div className="mt-2 text-sm text-foreground">{t.title}</div>
            </div>

            <button className="text-sm font-medium text-primary-6 flex items-center gap-2">
              {t.action} <ArrowRight2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
