import { divProps } from '@/app/types/ui';
export default function View({ as: Tag = 'view', children, className, ...props }: divProps) {
  return <div className={className}>{children}</div>;
}
