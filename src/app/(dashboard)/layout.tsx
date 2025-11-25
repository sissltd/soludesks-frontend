import Header from "@/components/shared/Header";
import Sidebar from "@/components/shared/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen flex bg-[#fafafa] text-foreground overflow-hidden">
      <aside className="fixed left-0 top-0 h-screen w-[250px] bg-white border-r z-30">
        <Sidebar />
      </aside>

      <div className="flex flex-col flex-1 ml-[250px] h-screen overflow-hidden">
        <div className="fixed left-[250px] top-0 right-0 h-20 bg-white border-b z-20">
          <Header />
        </div>

        <main className="mt-20 h-[calc(100vh-80px)] overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
