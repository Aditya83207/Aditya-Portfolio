import { useEffect, useRef, useState } from 'react';
import { GIFS } from '../data';

const row1 = GIFS.slice(0, 11);
const row2 = GIFS.slice(11);

// Fluid tile width: ~60% of screen on phones, max 420px on desktop
const TILE = 'clamp(240px, 60vw, 420px)';
const GAP = '12px';

function Tile({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt=""
      loading="lazy"
      className="rounded-2xl object-cover flex-none"
      style={{ width: TILE, aspectRatio: '420 / 270' }}
    />
  );
}

export default function MarqueeSection() {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const sectionTop = ref.current.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      ref={ref}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      {/* Row 1: moves right; starts one set to the left so there is no blank gap */}
      <div
        className="flex gap-3 mb-3"
        style={{
          willChange: 'transform',
          marginLeft: `calc(-${row1.length} * (${TILE} + ${GAP}))`,
          transform: `translateX(${offset - 200}px)`,
        }}
      >
        {[0, 1, 2].flatMap((r) => row1.map((s, i) => <Tile key={`a${r}-${i}`} src={s} />))}
      </div>

      {/* Row 2: moves left */}
      <div
        className="flex gap-3"
        style={{ willChange: 'transform', transform: `translateX(${-(offset - 200)}px)` }}
      >
        {[0, 1, 2].flatMap((r) => row2.map((s, i) => <Tile key={`b${r}-${i}`} src={s} />))}
      </div>
    </section>
  );
}