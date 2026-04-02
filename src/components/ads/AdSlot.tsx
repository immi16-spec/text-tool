import { cn } from '@/lib/utils';

type AdSlotProps = {
  className?: string;
  label?: string;
};

export function AdSlot({ className, label = 'Ad Space' }: AdSlotProps) {
  return (
    <div
      className={cn('ad-slot', className)}
      role="complementary"
      aria-label="Advertisement placeholder"
    >
      {/* Google AdSense Code Will Be Placed Here */}
      <span>{label}</span>
    </div>
  );
}
