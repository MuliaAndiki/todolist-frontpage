import View from '@/app/components/ui/view';
import { Label } from '@radix-ui/react-dropdown-menu';
import ExperiensCard from '../../components/experiens-card';
import { ExperiensCardData } from '@/app/config/component.config';

export default function ExperiensSection() {
  return (
    <main>
      <View className="flex min-h-screen justify-center items-center relative z-0 ">
        <View className="flex justify-center items-center flex-col w-full">
          <Label className="text-4xl font-extrabold">Experience</Label>
          <View className="grid grid-cols-2 grid-rows-1 w-full mt-4 ">
            {ExperiensCardData.map((items, key) => (
              <ExperiensCard data={items} key={key} />
            ))}
          </View>
        </View>
      </View>
    </main>
  );
}
