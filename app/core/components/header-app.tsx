'use client';
import View from '@/app/components/ui/view';
import ToggleTheme from './toggle-theme';
import { Button } from '@/app/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { IconArrowLeft } from '@tabler/icons-react';
import useGetProfile from '@/app/hooks/mutation/auth/useGetProfile';
export default function HeaderApp() {
  const profile = useGetProfile();
  const pathname = usePathname();
  const hiddenButton = ['/login', '/user/todolist', '/user/profile'];
  const router = useRouter();
  const showButton = ['/user/todolist', '/'];
  const buttonProfile = ['/user/todolist'];

  const isProfile = profile.data?.data;
  const handleBackHistory = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };
  return (
    <nav>
      <div className="flex justify-between items-center w-full p-2">
        <p>Icon</p>
        <View className="flex justify-center items-center gap-2">
          <ToggleTheme />
          {!hiddenButton.includes(pathname) && (
            <Link href="/login">
              <Button className="font-semibold text-lg" variant="gradient">
                Login
              </Button>
            </Link>
          )}
          {!showButton.includes(pathname) && (
            <Button className="" variant="ghost" onClick={() => handleBackHistory()}>
              <IconArrowLeft />
            </Button>
          )}
          {buttonProfile.includes(pathname) && (
            <Link href="/user/profile" className="text-lg">
              <Button variant="link">{isProfile?.fullname}</Button>
            </Link>
          )}
        </View>
      </div>
    </nav>
  );
}
