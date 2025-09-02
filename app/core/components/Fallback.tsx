import { FallbackProps } from '@/app/types/ui';
import View from '@/app/components/ui/view';
import { Label } from '@radix-ui/react-dropdown-menu';
import { Loader2Icon } from 'lucide-react';
export default function Fallback({ title, className, ...props }: FallbackProps) {
  return (
    <View className="flex justify-center items-center gap-1">
      <Loader2Icon className="animate-spin" />
      <Label className={`${className}`}>{title}</Label>
    </View>
  );
}
