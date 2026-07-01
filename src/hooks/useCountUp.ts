import { useState, useEffect, useRef } from 'react';

export function useCountUp(target: number, duration = 2000, trigger = true): number {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!trigger) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [target, duration, trigger]);

  return count;
}
