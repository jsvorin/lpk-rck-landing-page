
import { cn } from '@/lib/utils';

export const GeometricPattern = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      <div className="absolute inset-0 hero-pattern" />
    </div>
  );
};
