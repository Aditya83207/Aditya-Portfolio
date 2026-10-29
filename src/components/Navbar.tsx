import { motion } from 'framer-motion';

const LINKS = ['About', 'Education', 'Skills', 'Projects', 'Contact'];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between px-6 md:px-10 py-4 md:py-5 backdrop-blur-md"
      style={{ background: 'rgba(12, 12, 12, 0.7)' }}
    >
      {LINKS.map((l) => (
        <a
          key={l}
          href={`#${l.toLowerCase()}`}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 no-underline"
        >
          {l}
        </a>
      ))}
    </motion.nav>
  );
}