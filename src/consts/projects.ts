import { ProjectItem } from './types';

export const defaultProjects: ProjectItem[] = [
  {
    title: 'Rafflix Microfrontend',
    description:
      'A Netflix microfrontend clone built using Piral, Vue and React. Integrates isolated feature pods into a seamless media streaming user experience with shared state.',
    image: 'https://raspy-bonus-452c.jbabic999.workers.dev/rafflix.webp',
    tags: ['Vue', 'React', 'Piral', 'Microfrontend'],
    link: 'https://github.com/Numulix/rafflix-microfrontends',
    slug: 'rafflix-microfrontend',
  },
  {
    title: 'Files Away',
    description:
      'A simple online storage solution built with Next.js and styled using Shadcn. For backend services, Appwrite was used for its simplicity and scalable object storage.',
    image: 'https://raspy-bonus-452c.jbabic999.workers.dev/files-away.webp',
    tags: ['Next.js', 'Appwrite', 'Shadcn'],
    link: 'https://github.com/Numulix/files-away',
    slug: 'files-away',
  },
  {
    title: 'Streaks',
    description:
      'Full-stack web application designed to help users build and maintain positive habits through visual momentum, heatmap telemetry, and daily milestones.',
    image: 'https://raspy-bonus-452c.jbabic999.workers.dev/streaks.webp',
    tags: ['Next.js', 'TypeScript', 'Prisma'],
    link: 'https://github.com/Numulix/streaks',
    slug: 'streaks',
  },
  {
    title: 'PokéSerbia TCG Notifier',
    description:
      'Automated web scraper and Discord notification bot monitoring Serbian retail stores for Pokémon TCG product restocks in real-time.',
    image: 'https://raspy-bonus-452c.jbabic999.workers.dev/pokeserbia.webp',
    tags: ['TypeScript', 'Discord.js', 'Node.js'],
    link: 'https://github.com/Numulix/poke-serbia-tcg-scrape',
    slug: 'poke-serbia-tcg-scrape',
  },
  {
    title: 'Portfolio',
    description:
      'Personal developer portfolio and technical blog built with Angular 18, SSR hydration, and Tailwind CSS.',
    image: 'https://raspy-bonus-452c.jbabic999.workers.dev/portfolio.webp',
    tags: ['Angular', 'TailwindCSS', 'TypeScript'],
    link: 'https://github.com/Numulix/portfolio-angular',
    slug: 'portfolio',
  }
];
