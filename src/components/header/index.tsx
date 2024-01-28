'use client';

import { useRef, useEffect } from 'react';
import clsx from 'clsx';
import Theme from '@/components/header/theme';
import MobileNav from './mobile_nav';
import PcNav from './pc_nav';

export default function Header() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      if (ref.current) {
        const currentScrollPos = window.scrollY;

        if (prevScrollPos > currentScrollPos || currentScrollPos === 0) {
          ref.current.style.setProperty('top', '0');
          ref.current.style.setProperty('transition', 'top 0.3s ease-in-out');
          ref.current.style.setProperty('position', 'sticky');
        } else {
          ref.current.style.setProperty('top', '-100px');
          ref.current.style.setProperty('transition', 'top 0.3s ease-in-out');
          ref.current.style.removeProperty('postion');
        }

        prevScrollPos = currentScrollPos;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      ref={ref}
      className={clsx('pointer-events-none z-50 flex flex-none flex-col relative py-4 px-5')}
    >
      <div className="relative flex items-center ">
        <div className="flex flex-1 justify-start md:justify-center">
          <MobileNav className="pointer-events-auto md:hidden" />
          <PcNav className="pointer-events-auto hidden md:block" />
        </div>
        <div className="flex justify-end ml-4">
          <div className="pointer-events-auto">
            <Theme />
          </div>
        </div>
      </div>
    </header>
  );
}
