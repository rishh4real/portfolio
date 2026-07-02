import type { ReactNode } from 'react';
import SiteHeader from './SiteHeader';

interface PageShellProps {
  children: ReactNode;
  className?: string;
}

export default function PageShell({ children, className = '' }: PageShellProps) {
  return (
    <div className={`min-h-screen bg-[#0C0C0C] text-white ${className}`}>
      <SiteHeader />
      <main>{children}</main>
    </div>
  );
}
