import { divProps } from '@/app/types/ui';

export default function Shape({ as: Tag = 'canvas', children, className, ...props }: divProps) {
  return <div className={`absolute ${className}`}>{children}</div>;
}
