import View from '@/app/components/ui/view';
import { Label } from '@radix-ui/react-dropdown-menu';

import { BenefitsCardProps } from '@/app/types/props';
const BenefitsCard: React.FC<BenefitsCardProps> = ({ data }) => {
  return (
    <View className="flex justify-around items-center p-2 w-full">
      <View className="p-4 border border-[var(--foreground)]    rounded-lg my-2 transition-colors duration-300 hover:bg-gradient-to-r from-[#D5ED78] via-[#86E1D8] to-[#55B6F6]  hover:text-black ease-in ">
        <data.icon />
        <Label className="text-2xl font-semibold">{data.title}</Label>
        <Label className="text-justify w-full max-w-100">{data.desc}</Label>
      </View>
    </View>
  );
};

export default BenefitsCard;
