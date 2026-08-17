import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../data/content';

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0C0C0C]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 md:px-10">
        <NavLink
          to="/"
          onClick={closeMenu}
          className="text-lg font-black uppercase tracking-[0.22em] text-white transition-opacity hover:opacity-80 sm:text-xl"
        >
          Shaurya
        </NavLink>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:border-[#A855F7]/45 hover:text-[#C084FC] md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <nav className="hidden items-center justify-end gap-x-5 gap-y-2 md:flex md:gap-x-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === '/'}
              className={({ isActive }) =>
                [
                  'text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-colors sm:text-xs md:text-sm',
                  isActive ? 'text-[#C084FC]' : 'text-white/70 hover:text-white',
                ].join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div
        className={[
          'overflow-hidden border-white/10 transition-[max-height,opacity] duration-300 ease-out md:hidden',
          isOpen ? 'max-h-[420px] border-t opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <nav className="mx-auto grid max-w-7xl gap-2 px-5 py-4 sm:px-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === '/'}
              onClick={closeMenu}
              className={({ isActive }) =>
                [
                  'rounded-2xl border px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-colors',
                  isActive
                    ? 'border-[#A855F7]/45 bg-[#A855F7]/10 text-[#C084FC]'
                    : 'border-white/10 bg-white/[0.03] text-white/72 hover:border-white/20 hover:text-white',
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
