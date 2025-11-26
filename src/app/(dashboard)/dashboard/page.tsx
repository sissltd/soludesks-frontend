"use client";

import {
  Book1,
  Teacher,
  Profile2User,
  People,
  NoteText,
  Award,
  Task,
} from "iconsax-react";

import KpiCard from "@/modules/helpdesk/calls/components/KpiCard";

import CourseEngagementChart from "@/modules/dashboard/components/CourseEngagementChart";
import PendingTasks from "@/modules/dashboard/components/PendingTasks";
import RecentActivity from "@/modules/dashboard/components/RecentActivity";
import TopLearners from "@/modules/dashboard/components/TopLearners";

export default function DashboardPage() {
  return (
    <div className="p-8 pt-4 space-y-8">
      <div>
        <h1 className="text-2xl font-semibold mb-4">
          Good morning John, <span>👋</span>
        </h1>

        {/* KPI ROW USING KPICARD */}
        <div className="grid grid-cols-5 gap-4">
          <KpiCard
            title="Total Courses"
            value="123"
            bg="#F7F2FF"
            iconBg="#F1E8FD"
            icon={<Book1 size={28} variant="Linear" color="#A66AFE" />}
          />

          <KpiCard
            title="Total Students"
            value="22"
            bg="#E9FBFF"
            iconBg="#CCF5FF"
            icon={<Teacher size={28} variant="Linear" color="#00C2FF" />}
          />

          <KpiCard
            title="Instructors"
            value="153"
            bg="#F7F2FF"
            iconBg="#F1E8FD"
            icon={<Award size={28} variant="Linear" color="#D36FFD" />}
          />

          <KpiCard
            title="Staff"
            value="35"
            bg="#E9FFE9"
            iconBg="#C8FFC8"
            icon={<Profile2User size={28} variant="Linear" color="#3ECB4B" />}
          />

          <KpiCard
            title="Completion Rate"
            value="90%"
            bg="#FFF4EB"
            iconBg="#FFE3CC"
            icon={<Task size={28} variant="Linear" color="#F5A45B" />}
          />
        </div>
      </div>

      {/* MAIN COMPONENT GRID */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <CourseEngagementChart />
        </div>

        <div className="col-span-1">
          <PendingTasks />
        </div>

        <div className="col-span-2">
          <RecentActivity />
        </div>

        <div className="col-span-1">
          <TopLearners />
        </div>
      </div>
    </div>
  );
}
