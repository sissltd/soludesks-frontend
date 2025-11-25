"use client";

import { Book1, Teacher, Profile2User, People, NoteText } from "iconsax-react";

import StatCard from "@/modules/dashboard/components/StatCard";
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

        <div className="grid grid-cols-5 gap-4">
          <StatCard
            title="Total courses"
            value="123"
            icon={<Book1 size={24} variant="Bulk" color="#A66AFE" />}
            accent="var(--primary-1)"
          />

          <StatCard
            title="Total Students"
            value="22"
            icon={<Teacher size={24} variant="Bulk" color="#6DD6F7" />}
            accent="var(--secondary-1)"
          />

          <StatCard
            title="Instructors"
            value="153"
            icon={<Profile2User size={24} variant="Bulk" color="#D36FFD" />}
            accent="var(--primary-1)"
          />

          <StatCard
            title="Staff"
            value="35"
            icon={<People size={24} variant="Bulk" color="#3ECB4B" />}
            accent="#D4FEB4"
          />

          <StatCard
            title="Completion Rate"
            value="90%"
            icon={<NoteText size={24} variant="Bulk" color="#BACDFF" />}
            accent="#F9E1CD"
          />
        </div>
      </div>

      {/* Main Grid */}
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
