import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../data/content';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0C0C0C]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8 md:px-10">
        <NavLink
          to="/"
          className="text-lg font-black uppercase tracking-[0.22em] text-white transition-opacity hover:opacity-80 sm:text-xl"
        >
          Shaurya
        </NavLink>

        <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 sm:gap-x-6 md:gap-x-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === '/'}
              className={({ isActive }) =>
                [
                  'text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-colors sm:text-xs md:text-sm',
                  isActive ? 'text-[#FF4D8D]' : 'text-white/70 hover:text-white',
                ].join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
