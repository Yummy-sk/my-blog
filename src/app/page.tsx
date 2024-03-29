import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import {
  FaRssSquare as RssIcon,
  FaGithub as GitHubIcon,
  FaInstagram as InstagramIcon,
} from 'react-icons/fa';
import { MdEmail as MailIcon } from 'react-icons/md';
import { FaLinkedin as LinkedInIcon } from 'react-icons/fa6';

import portraitImage from '@/images/portrait.jpg';

interface SocialProps {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}

function SocialLink({ className, href, children, icon: Icon }: SocialProps) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'Hi! I’m Sang Kwon Yeum.  I’m a Front End Developer located in Korea. I’m interested in UI effects, animations and creating intuitive, dynamic user experiences.',
};

export default function Page() {
  return (
    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
      <div className="lg:pl-20">
        <div className="max-w-xs px-2.5 lg:max-w-none">
          <Image
            src={portraitImage}
            alt=""
            sizes="(min-width: 1024px) 32rem, 20rem"
            className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
          />
        </div>
      </div>
      <div className="lg:order-first lg:row-span-2">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Hi! I’m Sang Kwon Yeum
        </h1>
        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>
            I’m a Front End Developer located in Korea. I’m interested in UI
            effects, animations and creating intuitive, dynamic user
            experiences.
          </p>
          <p>
            What excites me most about working in software development is being
            able to design and create things that have purpose and solve real
            problems. I want to solve the problems of the world in software and
            contribute to a better world.
          </p>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl mt-6">
          Skill
        </h2>
        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <fieldset className="border-b border-t border-gray-200">
            <legend className="sr-only">Notifications</legend>
            <div className="divide-y divide-gray-200">
              <div className="relative flex items-start pb-4 pt-3.5">
                <div className="min-w-0 flex-1 text-sm leading-6">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Language
                  </h3>
                  <p id="comments-description" className="text-gray-500">
                    JavaScript ・ TypeScript ・ ReScript ・ GraphQL
                  </p>
                </div>
                <div className="ml-3 flex h-6 items-center" />
              </div>
              <div className="relative flex items-start pb-4 pt-3.5">
                <div className="min-w-0 flex-1 text-sm leading-6">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Framework
                  </h3>
                  <p id="comments-description" className="text-gray-500">
                    React.js ・ Next.js ・ Nest.js
                  </p>
                </div>
              </div>
              <div className="relative flex items-start pb-4 pt-3.5">
                <div className="min-w-0 flex-1 text-sm leading-6">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    API Client
                  </h3>
                  <p id="comments-description" className="text-gray-500">
                    React Query ・ Relay
                  </p>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
      <div className="lg:pl-20">
        <ul>
          <SocialLink
            href="https://www.instagram.com"
            icon={InstagramIcon}
            className="mt-4"
          >
            Instagram
          </SocialLink>
          <SocialLink
            href="https://github.com/Yummy-sk"
            icon={GitHubIcon}
            className="mt-4"
          >
            GitHub
          </SocialLink>
          <SocialLink
            href="https://sang-kwon-yeum.me/rss.xml"
            icon={RssIcon}
            className="mt-4"
          >
            RSS
          </SocialLink>
          <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
            LinkedIn
          </SocialLink>
          <SocialLink
            href="mailto:kunshup2000@gmail.com"
            icon={MailIcon}
            className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
          >
            kunshup2000@gmail.com
          </SocialLink>
        </ul>
      </div>
    </div>
  );
}
