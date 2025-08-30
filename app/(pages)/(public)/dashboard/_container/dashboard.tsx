import DashboardLayout from '@/app/core/layout/dashboard-layout';
import HeroSection from '@/app/core/section/dashboard/hero-section';
const DashboardContainer = () => {
  return (
    <DashboardLayout>
      <main className="w-full min-h-screen flex flex-col">
        <HeroSection />
      </main>
    </DashboardLayout>
  );
};

export default DashboardContainer;
