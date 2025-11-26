"use client";

interface ActivityItem {
  name: string;
  email: string;
  date: string;
  status: string;
  message: string;
}

interface Props {
  activityLog: ActivityItem[];
}

export default function ActivityLog({ activityLog }: Props) {
  return (
    <div className="px-3">
      <h3 className="font-semibold text-lg mb-4">Activity Log</h3>

      <div className="space-y-8">
        {activityLog.map((log, index) => (
          <div key={index} className="border-b pb-4">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <img
                  src="/images/profile.png"
                  className="w-10 h-10 rounded-full"
                  alt="Profile"
                />
                <div>
                  <p className="font-medium">{log.name}</p>
                  <p className="text-xs text-gray-500">{log.email}</p>
                </div>
              </div>

              <p className="text-xs text-gray-500">{log.date}</p>
            </div>

            <div className="mt-3">
              <p className="font-semibold text-sm">{log.status}</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {log.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
