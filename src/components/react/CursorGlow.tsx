import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export default function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 350, damping: 35, mass: 0.25 });
  const springY = useSpring(y, { stiffness: 350, damping: 35, mass: 0.25 });

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)');
    if (!media.matches) return;

    const onMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[5] hidden h-64 w-64 rounded-full md:block"
      style={{
        left: springX,
        top: springY,
        x: '-50%',
        y: '-50%',
        background:
          'radial-gradient(circle, rgba(212,197,249,0.28) 0%, rgba(212,197,249,0.1) 32%, transparent 68%)',
        mixBlendMode: 'screen',
      }}
    />
  );
}
