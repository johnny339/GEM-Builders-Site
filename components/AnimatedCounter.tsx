'use client';

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedCounter({ 
  value, 
  duration = 2, 
  suffix = '',
  className = '',
  style 
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 80,
    stiffness: 120
  });
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return (
    <div ref={ref} className={className} style={style}>
      0{suffix}
    </div>
  );
}
