"use client";

import React from "react";
import { Book, UserAdd } from "iconsax-react";

const activities = [
  {
    id: 1,
    title: "New user registered",
    by: "Sarah Chen",
    ago: "2 minutes ago",
    icon: UserAdd,
  },
  {
    id: 2,
    title: "Course published",
    by: "You • Advanced React Patterns",
    ago: "15 minutes ago",
    icon: Book,
  },
];

export default function RecentActivity() {
  return (
    <div
      className="rounded-xl border bg-card p-4 shadow-sm"
      style={{ borderColor: "var(--border)" }}
    >
      <h4 className="font-semibold mb-3">Recent Platform Activity</h4>
      <div className="flex flex-col gap-3">
        {activities.map((a) => (
          <div
            key={a.id}
            className="flex items-center justify-between gap-4 rounded-lg bg-muted p-3"
          >
            <div className="flex items-start gap-3">
              <div className="rounded-lg p-2 bg-primary-1">
                <a.icon size={20} />
              </div>
              <div>
                <div className="text-sm font-medium">{a.title}</div>
                <div className="text-xs text-muted-foreground">{a.by}</div>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">{a.ago}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
