import View from '@/app/components/ui/view';
import { Label } from '@radix-ui/react-dropdown-menu';
import BenefitsCard from '../../components/benefit-card';
import { BenefitCardData } from '@/app/config/component.config';

export default function BenefitsSection() {
  return (
    <main>
      <View className="flex min-h-screen justify-center items-center relative z-0">
        <View className="flex justify-center items-center flex-col w-full">
          <Label className="text-4xl font-extrabold">Manfaat yang Akan Kamu Dapatkan</Label>
          <h1 className="font-light text-lg  max-w-150 text-center">
            Setiap fitur dirancang sederhana tapi berdampak besar—mulai dari manajemen waktu, fokus
            pada prioritas, hingga membangun kebiasaan yang konsisten.
          </h1>
          <View className="flex mt-8">
            {BenefitCardData.map((items, key) => (
              <BenefitsCard key={key} data={items} />
            ))}
          </View>
        </View>
      </View>
    </main>
  );
}
