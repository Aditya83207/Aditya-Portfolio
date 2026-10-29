import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export default function Magnet({
  children,
  padding = 100,
  strength = 2,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}: MagnetProps) {
  const [active, setActive] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hasMouse, setHasMouse] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  // Detect real mouse (desktop) vs touch-only phone
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    setHasMouse(mq.matches);
    const onChange = () => setHasMouse(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Follow the pointer (mouse, pen, or finger while dragging)
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!ref.current) return;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const cx = left + width / 2;
      const cy = top + height / 2;
      const dx = Math.abs(cx - e.clientX);
      const dy = Math.abs(cy - e.clientY);
      if (dx < width / 2 + padding && dy < height / 2 + padding) {
        setActive(true);
        setPos({ x: (e.clientX - cx) / strength, y: (e.clientY - cy) / strength });
      } else {
        setActive(false);
        setPos({ x: 0, y: 0 });
      }
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [padding, strength]);

  return (
    <div ref={ref} className={className} style={{ display: 'inline-block', position: 'relative' }}>
      {/* Idle floating only on touch devices */}
      <motion.div
        animate={hasMouse ? { y: 0 } : { y: [0, -12, 0] }}
        transition={hasMouse ? { duration: 0 } : { duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div
          style={{
            transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
            transition: active ? activeTransition : inactiveTransition,
            willChange: 'transform',
          }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}