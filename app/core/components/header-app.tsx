'use client';
import View from '@/app/components/ui/view';
import ToggleTheme from './toggle-theme';
import { Button } from '@/app/components/ui/button';

export default function HeaderApp() {
  return (
    <nav>
      <div className="flex justify-between items-center w-full p-2">
        <p>Icon</p>
        <View className="flex justify-center items-center gap-2">
          <ToggleTheme />
          <Button className="font-semibold text-lg">Login</Button>
        </View>
      </div>
    </nav>
  );
}
