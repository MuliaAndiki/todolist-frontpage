import View from './ui/view';
import Link from 'next/link';
import Shape from './ui/shape';
import { sosmedData } from '../config/app.config';

const FloatHero = () => {
  return (
    <View>
      {sosmedData.map((items, key) => (
        <View key={key}>
          <Link href={items.tiktok.link}>
            <Shape className="right-1/4 top-2/3 flex justify-center items-center rounded-lg border-[var(--foreground)]  px-4 py-2 border gap-2 transition-colors duration-300 hover:bg-gradient-to-r from-[#D5ED78] via-[#86E1D8] to-[#55B6F6]  hover:text-black  ">
              <items.tiktok.icon />
              <p className="text-lg font-semibold">{items.tiktok.title}</p>
            </Shape>
          </Link>
          <Link href={items.web.link}>
            <Shape className="left-1/4 top-1/4 flex justify-center items-center rounded-lg border-[var(--foreground)]  px-4 py-2 border gap-2 transition-colors duration-300 hover:bg-gradient-to-r from-[#D5ED78] via-[#86E1D8] to-[#55B6F6]  hover:text-black  ">
              <items.web.icon />
              <p className="text-lg font-semibold">{items.web.title}</p>
            </Shape>
          </Link>
        </View>
      ))}
    </View>
  );
};

export default FloatHero;
