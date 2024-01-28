import Link from 'next/link';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="px-4 sm:px-8 lg:px-12 mt-32 flex-none">
      <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
            <NavLink href="/">About</NavLink>
            <NavLink href="/articles">Articles</NavLink>
            <NavLink href="/tags">Tags</NavLink>
          </div>
          <p className="text-sm text-zinc-400 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} SangKwon Yeum. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
