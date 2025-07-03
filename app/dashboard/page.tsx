import Header from '@/components/sections/Header';
import DashboardStats from '@/components/dashboard/DashboardStats';
import DashboardProjects from '@/components/dashboard/DashboardProjects';
import DashboardUsage from '@/components/dashboard/DashboardUsage';
import DashboardSettings from '@/components/dashboard/DashboardSettings';

export const metadata = {
  title: 'Dashboard - Keplor AI Platform',
  description: 'Manage your AI projects, monitor usage, and access your tools from the Keplor dashboard.',
};

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back to Keplor</h1>
          <p className="text-muted-foreground">Manage your AI projects and monitor your usage</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <DashboardStats />
            <DashboardProjects />
          </div>
          <div className="space-y-8">
            <DashboardUsage />
            <DashboardSettings />
          </div>
        </div>
      </div>
    </main>
  );
}