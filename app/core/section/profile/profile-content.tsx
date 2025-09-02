'use client';
import View from '@/app/components/ui/view';
import { Button } from '@/app/components/ui/button';
import useLogout from '@/app/hooks/mutation/auth/useLogout';

const ProfileHeroSection = () => {
  const logout = useLogout();

  return (
    <section>
      <View className="flex min-h-screen justify-center items-center relative z-0">
        <Button onClick={() => logout.mutate()}>Keluar</Button>
      </View>
    </section>
  );
};

export default ProfileHeroSection;
