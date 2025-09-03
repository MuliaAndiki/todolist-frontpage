import { Button } from '@/app/components/ui/button';
import View from '@/app/components/ui/view';
import FloatHero from '@/app/components/float-component';
import BallHero from '@/app/components/ball-component';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section>
      <View className="flex min-h-screen justify-center items-center relative z-0">
        <FloatHero />
        <BallHero />
        <View className="w-full flex items-center justify-center flex-col">
          <View className=" w-full max-w-150  text-center">
            <h1 className="font-extrabold text-4xl lg:text-7xl">Dari Rencana ke Realita</h1>
          </View>
          <View className="w-full max-w-200 text-center my-2">
            <h1 className="font-light text-sm lg:text-lg">
              Alat sederhana namun efektif untuk mengubah ide dan target harian menjadi langkah
              nyata, menjaga fokus, dan membantu kamu menuntaskan setiap rencana dengan lebih
              teratur.
            </h1>
          </View>
          <Link href="/login">
            <Button className="text-lg font-semibold" variant="gradient">
              Mulai Sekarang
            </Button>
          </Link>
        </View>
      </View>
    </section>
  );
}
