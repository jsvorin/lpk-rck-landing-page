
import { cn } from '@/lib/utils';

interface WaveDividerProps {
  position?: 'top' | 'bottom';
  className?: string;
  color?: string; // Fill color of the wave
}

export const WaveDivider = ({ position = 'bottom', className, color = '#F8FAFC' }: WaveDividerProps) => {
  return (
    <div className={cn('absolute left-0 right-0 w-full overflow-hidden leading-none z-10', 
      position === 'top' ? 'top-0 rotate-180' : 'bottom-0',
      className
    )}>
      <svg
        className="relative block w-full h-[40px] md:h-[60px] lg:h-[80px]"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.28,191.1,101.41C235.53,88.2,279.16,71.55,321.39,56.44Z"
          fill={color}
        ></path>
      </svg>
    </div>
  );
};
