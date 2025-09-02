import DashboardLayout from '@/app/core/layout/dashboard-layout';
import ProfileHeroSection from '@/app/core/section/profile/profile-content';

const ProfileContainer = () => {
  return (
    <DashboardLayout>
      <main className="w-full min-h-screen flex flex-col ">
        <ProfileHeroSection />
      </main>
    </DashboardLayout>
  );
};

export default ProfileContainer;
