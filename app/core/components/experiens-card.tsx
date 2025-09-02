import View from '@/app/components/ui/view';
import Image from 'next/image';
import { Label } from '@radix-ui/react-dropdown-menu';
import { ExperiensCardProps } from '@/app/types/props';

const ExperiensCard: React.FC<ExperiensCardProps> = ({ data }) => {
  return (
    <>
      <View className=" flex justify-center items-center ">
        <Image alt="content" src={data.image} width={600} height={600} />
      </View>
      <View className=" flex justify-center items-start p-2 flex-col  ">
        <Label>{data.title}</Label>
        <Label>{data.desc}</Label>
      </View>
    </>
  );
};

export default ExperiensCard;
