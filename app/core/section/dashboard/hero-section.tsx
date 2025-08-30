import { Button } from '@/app/components/ui/button';
import Shape from '@/app/components/ui/shape';
import View from '@/app/components/ui/view';
import { IconBrandTiktok } from '@tabler/icons-react';

export default function HeroSection() {
  return (
    <section>
      <View className="flex min-h-screen justify-center items-center relative z-0">
        <Shape className="top-0 flex justify-center items-center rounded-lg border-[var(--foreground)] p-2 border gap-2 ">
          <IconBrandTiktok />
          <p className="text-lg font-semibold">aaa</p>
        </Shape>
        <Shape className="w-150 h-150 bg-[var(--shapeV1-parent)]/30 rounded-full z-[-5] blur-2xl  translate-x-70 " />
        <Shape className="w-130 h-130 bg-[var(--shapeV1-child)]/30 rounded-full z-[-5] blur-2xl top-0 -translate-x-80 " />
        <View className="w-full flex items-center justify-center flex-col">
          <View className=" w-full max-w-150  text-center">
            <h1 className="font-extrabold text-6xl">Todo List aaaaa aaaaaaaa</h1>
          </View>
          <View className="w-full max-w-200 text-center mt-2">
            <h1 className="font-extrabold text-lgxl">Deskripsi</h1>
          </View>
          <Button>Login</Button>
        </View>
      </View>
    </section>
  );
}
