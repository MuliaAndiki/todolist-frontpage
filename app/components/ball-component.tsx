import Shape from './ui/shape';
const BallHero = () => {
  return (
    <>
      <Shape className="w-150 h-150 bg-[var(--shapeV1-parent)]/30 rounded-full z-[-5] blur-2xl  translate-x-70 " />
      <Shape className="w-130 h-130 bg-[var(--shapeV1-child)]/30 rounded-full z-[-5] blur-2xl top-0 -translate-x-80 " />
    </>
  );
};

export default BallHero;
