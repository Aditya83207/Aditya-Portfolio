import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import { EDUCATION, type EducationItem } from '../data';

interface CardProps {
  item: EducationItem;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function EducationCard({ item, index, total, progress }: CardProps) {
  const targetScale = 1 - (total - 1 - index) * 0.04;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    
       <div className="sticky top-24 md:top-32 mb-[20vh] last:mb-0">
        <motion.div
          className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-6 sm:p-8 md:p-12 relative"
          style={{ background: '#0C0C0C', scale, top: index * 28, transformOrigin: 'top center' }}
        >
          <div className="flex items-start justify-between gap-4 flex-wrap mb-6 sm:mb-8">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
            >
              {item.year}
            </span>
            <span className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-5 py-2 text-xs sm:text-sm">
              0{index + 1}
            </span>
          </div>

          <h3
            className="text-[#D7E2EA] font-medium uppercase mb-2"
            style={{ fontSize: 'clamp(1.1rem, 2.6vw, 2.4rem)' }}
          >
            {item.degree}
          </h3>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-widest opacity-60 mb-4 sm:mb-6"
            style={{ fontSize: 'clamp(0.75rem, 1.3vw, 1.1rem)' }}
          >
            {item.institution}
          </p>
          <p
            className="text-[#D7E2EA] font-light leading-relaxed max-w-2xl opacity-80"
            style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
          >
            {item.description}
          </p>
        </motion.div>
      </div>
    
  );
}

export default function EducationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  return (
    <section
      id="education"
      className="relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 140px)' }}
        >
          Education
        </h2>
      </FadeIn>
      <div ref={ref} className="max-w-5xl mx-auto">
        {EDUCATION.map((item, i) => (
          <EducationCard
            key={item.degree + i}
            item={item}
            index={i}
            total={EDUCATION.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}