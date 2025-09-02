import DashboardLayout from '@/app/core/layout/dashboard-layout';
import BenefitsSection from '@/app/core/section/dashboard/benefits-section';
import ExperiensSection from '@/app/core/section/dashboard/experiens-section';
import HeroSection from '@/app/core/section/dashboard/hero-section';
const DashboardContainer = () => {
  return (
    <DashboardLayout>
      <main className="w-full min-h-screen flex flex-col">
        <HeroSection />
        <BenefitsSection />
        <ExperiensSection />
      </main>
    </DashboardLayout>
  );
};

export default DashboardContainer;
