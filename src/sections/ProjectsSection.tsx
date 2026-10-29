import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import LiveProjectButton from '../components/LiveProjectButton';
import { PROJECTS, type Project } from '../data';

const RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

interface CardProps {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function ProjectCard({ project, index, total, progress }: CardProps) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    
      <div className="sticky top-24 md:top-32 mb-[25vh] last:mb-0">
        <motion.div
          className={`${RADIUS} border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 relative`}
          style={{ background: '#0C0C0C', scale, top: index * 28, transformOrigin: 'top center' }}
        >
          <div className="flex items-center justify-between gap-4 mb-4 sm:mb-6 flex-wrap">
            <div className="flex items-center gap-4 sm:gap-8 min-w-0">
              <span className="hero-heading font-black leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
                {project.number}
              </span>
              <div className="flex flex-col">
                <span
                  className="text-[#D7E2EA] font-light uppercase tracking-widest opacity-60"
                  style={{ fontSize: 'clamp(0.7rem, 1.2vw, 1rem)' }}
                >
                  {project.category}
                </span>
                <h3 className="text-[#D7E2EA] font-medium uppercase" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                  {project.name}
                </h3>
              </div>
            </div>
            <LiveProjectButton href={project.liveUrl} />
          </div>

          <div className="flex gap-3 sm:gap-4">
            <div className="flex flex-col gap-3 sm:gap-4" style={{ width: '40%' }}>
              <img
                src={project.images[0]}
                alt=""
                loading="lazy"
                className={`w-full object-cover ${RADIUS}`}
                style={{ height: 'clamp(130px, 16vw, 230px)' }}
              />
              <img
                src={project.images[1]}
                alt=""
                loading="lazy"
                className={`w-full object-cover ${RADIUS}`}
                style={{ height: 'clamp(160px, 22vw, 340px)' }}
              />
            </div>
            <div style={{ width: '60%' }}>
              <img src={project.images[2]} alt="" loading="lazy" className={`w-full h-full object-cover ${RADIUS}`} />
            </div>
          </div>
        </motion.div>
      </div>
    
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  return (
    <section
      id="projects"
      className="relative z-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
      style={{ background: '#0C0C0C' }}
    >
      <h2
        className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Project
      </h2>
      <div ref={ref} className="max-w-6xl mx-auto">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.number} project={p} index={i} total={PROJECTS.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
