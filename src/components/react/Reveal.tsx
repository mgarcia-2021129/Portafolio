import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState, type ReactNode } from 'react';

export type RevealVariant =
  | 'rise'
  | 'mask'
  | 'zoom'
  | 'slide-left'
  | 'slide-right'
  | 'card';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
};

const appleEase = [0.16, 1, 0.3, 1] as const;

const presets: Record<
  RevealVariant,
  {
    hidden: Record<string, number | string>;
    visible: Record<string, number | string>;
  }
> = {
  rise: {
    hidden: { opacity: 0, y: 84 },
    visible: { opacity: 1, y: 0 },
  },
  mask: {
    hidden: { opacity: 0, y: 56, clipPath: 'inset(90% 0 0 0)' },
    visible: { opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' },
  },
  zoom: {
    hidden: { opacity: 0, scale: 1.16 },
    visible: { opacity: 1, scale: 1 },
  },
  'slide-left': {
    hidden: { opacity: 0, x: -72 },
    visible: { opacity: 1, x: 0 },
  },
  'slide-right': {
    hidden: { opacity: 0, x: 72 },
    visible: { opacity: 1, x: 0 },
  },
  card: {
    hidden: { opacity: 0, y: 64, scale: 0.92 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
};

export default function Reveal({
  children,
  className = '',
  delay = 0,
  variant = 'rise',
}: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    amount: 0.4,
    once: false,
    margin: '0px 0px -8% 0px',
  });
  const [cycle, setCycle] = useState(0);
  const [active, setActive] = useState(false);
  const wasInView = useRef(false);
  const hasLeft = useRef(false);
  const preset = presets[variant];

  useEffect(() => {
    if (reduce) return;

    if (inView) {
      if (hasLeft.current && !wasInView.current) {
        setCycle((value) => value + 1);
      }
      setActive(true);
      wasInView.current = true;
      return;
    }

    if (wasInView.current) {
      hasLeft.current = true;
    }
    wasInView.current = false;
  }, [inView, reduce]);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className}>
      <motion.div
        key={`${variant}-${cycle}`}
        initial={preset.hidden}
        animate={active ? preset.visible : preset.hidden}
        transition={{
          duration: 1.35,
          delay,
          ease: appleEase,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
