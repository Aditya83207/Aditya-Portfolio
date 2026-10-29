import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

const ICON = (name: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;

const DECO = [
  { name: 'React', src: ICON('react'), cls: 'w-[70px] sm:w-[100px] md:w-[130px] top-[4%] left-[3%] sm:left-[4%] md:left-[8%]', delay: 0.1, x: -80, float: 10 },
  { name: 'Node.js', src: ICON('nodejs'), cls: 'w-[65px] sm:w-[90px] md:w-[120px] bottom-[8%] left-[5%] sm:left-[8%] md:left-[12%]', delay: 0.25, x: -80, float: 12 },
  { name: 'MongoDB', src: ICON('mongodb'), cls: 'w-[70px] sm:w-[100px] md:w-[130px] top-[4%] right-[3%] sm:right-[4%] md:right-[8%]', delay: 0.15, x: 80, float: 12 },
  { name: 'JavaScript', src: ICON('javascript'), cls: 'w-[70px] sm:w-[95px] md:w-[125px] bottom-[8%] right-[5%] sm:right-[8%] md:right-[12%]', delay: 0.3, x: 80, float: 10 },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 gap-16 sm:gap-20 md:gap-24"
      style={{ background: '#0C0C0C' }}
    >
      {DECO.map((d, i) => (
        <div key={d.name} className={`absolute ${d.cls}`}>
          <FadeIn delay={d.delay} x={d.x} y={0} duration={0.9}>
            <motion.img
              src={d.src}
              alt={d.name}
              className="w-full block"
              style={{ filter: 'drop-shadow(0 0 24px rgba(215, 226, 234, 0.15))' }}
              animate={{ y: [0, -d.float, 0] }}
              transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </FadeIn>
        </div>
      ))}

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 relative z-10">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>
        <AnimatedText
          text="I’m Aditya, a computer engineering student with a CGPA of 8.58, passionate about building full-stack web apps with React, Node.js, and MongoDB. I enjoy turning real problems into clean, scalable solutions. Let’s build something impactful together!"
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />
      </div>

      <div className="relative z-10">
        <ContactButton />
      </div>
    </section>
  );
}