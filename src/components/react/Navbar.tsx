import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import { navLinks } from '../../data/site';

type Props = {
  pathname: string;
};

function LogoMark() {
  return (
    <svg
      width="28"
      height="22"
      viewBox="0 0 28 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2 20.5L8.2 2.5H12.1L15.4 12.2L18.8 2.5H22.7L28 20.5H23.6L20.7 9.8L17.2 20.5H13.5L10 9.8L7.1 20.5H2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Navbar({ pathname }: Props) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setAtTop(latest < 24);
    if (latest < 24) {
      setHidden(false);
      return;
    }
    setHidden(latest > previous && latest > 80);
  });

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.header
          initial={{ y: -28, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -28, opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-6"
        >
          <nav
            aria-label="Principal"
            className={`glass-pill flex w-full max-w-3xl items-center justify-between px-5 py-3 sm:px-7 sm:py-3.5 ${
              atTop ? '' : 'shadow-glow'
            }`}
          >
            <a
              href="/"
              className="relative z-10 flex items-center gap-2 text-ink transition-colors hover:text-accent"
              aria-label="Inicio"
            >
              <LogoMark />
              <span className="hidden font-display text-sm font-bold tracking-wide sm:inline">
                MAG
              </span>
            </a>
            <ul className="relative z-10 flex items-center gap-5 sm:gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`font-sans text-sm font-medium transition-colors duration-300 ${
                      isActive(link.href)
                        ? 'text-accent'
                        : 'text-ink/75 hover:text-ink'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
