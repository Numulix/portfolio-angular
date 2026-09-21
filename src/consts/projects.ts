export interface ProjectTag {
  name: string;
  bgClass: string;
}

export interface BentoProjectItem {
  id: string;
  number: string;
  badge: string;
  badgeBg: string;
  title: string;
  description: string;
  image: string;
  tags: ProjectTag[];
  repoUrl: string;
  pathLabel: string;
  colSpan: string;
  aspectRatio: string;
  actionVariant: 'yellow' | 'blue' | 'mint' | 'pink' | 'purple';
}

export const bentoProjects: BentoProjectItem[] = [
  {
    id: 'rafflix',
    number: '01 // RAFFLIX MICROFRONTEND',
    badge: 'ARCH: PIRAL',
    badgeBg: 'bg-nb-yellow',
    title: 'Rafflix Microfrontend',
    description:
      'A Netflix microfrontend clone built using Piral, Vue and React. Integrates isolated feature pods into a seamless media streaming user experience with shared state.',
    image: 'https://raspy-bonus-452c.jbabic999.workers.dev/rafflix.webp',
    tags: [
      { name: 'Vue', bgClass: 'bg-nb-mint' },
      { name: 'React', bgClass: 'bg-nb-blue' },
      { name: 'Piral', bgClass: 'bg-nb-yellow' },
      { name: 'Microfrontend', bgClass: 'bg-nb-pink' }
    ],
    repoUrl: 'https://github.com/Numulix/rafflix-microfrontends',
    pathLabel: 'github.com/Numulix/rafflix-microfrontends',
    colSpan: 'md:col-span-7',
    aspectRatio: 'aspect-[16/9]',
    actionVariant: 'yellow'
  },
  {
    id: 'files-away',
    number: '02 // FILES AWAY',
    badge: 'CLOUD STORAGE',
    badgeBg: 'bg-nb-blue',
    title: 'Files Away',
    description:
      'A simple online storage solution built with Next.js and styled using Shadcn. For backend services, Appwrite was used for its simplicity and scalable object storage.',
    image: 'https://raspy-bonus-452c.jbabic999.workers.dev/files-away.webp',
    tags: [
      { name: 'Next.js', bgClass: 'bg-nb-yellow' },
      { name: 'Appwrite', bgClass: 'bg-nb-pink' },
      { name: 'Shadcn', bgClass: 'bg-nb-purple' }
    ],
    repoUrl: 'https://github.com/Numulix/files-away',
    pathLabel: 'files-away',
    colSpan: 'md:col-span-5',
    aspectRatio: 'aspect-[16/10]',
    actionVariant: 'blue'
  },
  {
    id: 'streaks',
    number: '03 // STREAKS',
    badge: 'HABITS',
    badgeBg: 'bg-nb-mint',
    title: 'Streaks',
    description:
      'Full-stack web application designed to help users build and maintain positive habits through visual momentum, heatmap telemetry, and daily milestones.',
    image: 'https://raspy-bonus-452c.jbabic999.workers.dev/streaks.webp',
    tags: [
      { name: 'Next.js', bgClass: 'bg-white' },
      { name: 'TypeScript', bgClass: 'bg-white' },
      { name: 'Prisma', bgClass: 'bg-nb-mint' }
    ],
    repoUrl: 'https://github.com/Numulix/streaks',
    pathLabel: 'streaks',
    colSpan: 'md:col-span-4',
    aspectRatio: 'aspect-[16/11]',
    actionVariant: 'mint'
  },
  {
    id: 'pokeserbia',
    number: '04 // POKÉSERBIA',
    badge: 'DISCORD BOT',
    badgeBg: 'bg-nb-yellow',
    title: 'PokéSerbia TCG Notifier',
    description:
      'Discord bot to regularly scrape for new available and restocked Pokémon TCG products across Serbian retailers. Real-time notifications and highly expandable architecture.',
    image: 'https://raspy-bonus-452c.jbabic999.workers.dev/pokeserbia.webp',
    tags: [
      { name: 'Discord', bgClass: 'bg-white' },
      { name: 'Node.js', bgClass: 'bg-white' },
      { name: 'Scraper', bgClass: 'bg-nb-yellow' }
    ],
    repoUrl: 'https://github.com/Numulix/ptcg-scraper-discord-bot',
    pathLabel: 'ptcg-scraper',
    colSpan: 'md:col-span-4',
    aspectRatio: 'aspect-[16/11]',
    actionVariant: 'yellow'
  },
  {
    id: 'portfolio',
    number: '05 // PORTFOLIO',
    badge: 'ANGULAR',
    badgeBg: 'bg-nb-pink',
    title: 'Portfolio',
    description:
      'This portfolio! You are looking at it :) Engineered with structured Bento layouts, custom token mappings, and snappy component transitions.',
    image: 'https://raspy-bonus-452c.jbabic999.workers.dev/portfolio.webp',
    tags: [
      { name: 'Angular', bgClass: 'bg-nb-pink' },
      { name: 'Tailwind', bgClass: 'bg-white' },
      { name: 'Bento', bgClass: 'bg-white' }
    ],
    repoUrl: 'https://github.com/Numulix/portfolio-angular',
    pathLabel: 'portfolio-angular',
    colSpan: 'md:col-span-4',
    aspectRatio: 'aspect-[16/11]',
    actionVariant: 'pink'
  }
];
