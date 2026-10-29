import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

const EMAIL = 'aditya.gupta.devv@gmail.com';
const PHONE = '+91 8320758503';

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/Aditya83207', Icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aditya-gupta-7b0073317/', Icon: Linkedin },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative px-5 sm:px-8 md:px-10 pt-10 pb-10 sm:pb-12"
      style={{ background: '#0C0C0C' }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-10 sm:gap-14 py-16 sm:py-24">
        <FadeIn y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Contact
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[560px]"
            style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.4rem)' }}
          >
            Have a project, an internship, or an idea? Let&rsquo;s talk.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <a
            href={`mailto:${EMAIL}`}
            className="hero-heading font-black break-all hover:opacity-70 transition-opacity duration-200 no-underline"
            style={{ fontSize: 'clamp(1.1rem, 3.6vw, 3rem)' }}
          >
            {EMAIL}
          </a>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-[#D7E2EA] font-light tracking-wide text-sm sm:text-base">
            <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:opacity-70 transition-opacity no-underline text-[#D7E2EA]">
              <Phone size={18} /> {PHONE}
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={18} /> Ahmedabad / Bharuch, Gujarat
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex items-center gap-4">
            <ContactButton href={`mailto:${EMAIL}`} label="Email Me" />
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-12 h-12 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] flex items-center justify-center hover:bg-[#D7E2EA]/10 transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </FadeIn>
      </div>

      <p className="text-center text-[#D7E2EA] opacity-40 font-light text-xs sm:text-sm tracking-widest uppercase">
        &copy; {new Date().getFullYear()} Aditya Gupta
      </p>
    </section>
  );
}