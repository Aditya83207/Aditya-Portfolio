
interface ContactButtonProps {
  href?: string;
  label?: string;
}

export default function ContactButton({ href = '#contact', label = 'Contact Me' }: ContactButtonProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <a
        href="/Aditya-Gupta-CV.pdf"
        download="Aditya-Gupta-CV.pdf"
        className="inline-block rounded-full border-2 border-white px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white whitespace-nowrap cursor-pointer no-underline transition-all duration-300 hover:bg-white hover:text-black"
      >
        Download CV
      </a>
      <a
        href={href}
        className="inline-block rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base whitespace-nowrap cursor-pointer no-underline"
        style={{
          background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
          boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
          outline: '2px solid white',
          outlineOffset: '-3px',
          fontFamily: 'inherit',
        }}
      >
        {label}
      </a>
    </div>
  );
}
