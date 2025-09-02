import { SpreedProps } from '@/app/types/ui';
const Spreed: React.FC<SpreedProps> = ({ className, orientation }) => {
  return (
    <div
      className={`
        bg-[var(--shapeV1-parent)]
        ${orientation === 'horizontal' ? 'w-full h-px' : 'h-full w-px'} 
        ${className}
      `}
    ></div>
  );
};

export default Spreed;
