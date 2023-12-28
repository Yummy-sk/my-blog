import Theme from '@/components/header/theme';
import MobileNav from './mobile_nav';
import PcNav from './pc_nav';

export default function Header() {
  return (
    <header className="pointer-events-none z-50 flex flex-none flex-col relative py-4 px-5">
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
