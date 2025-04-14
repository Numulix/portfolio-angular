interface ProjectItem {
    image: string;
    title: string;
    tags: string[];
    description: string;
    link: string;
}

export const projects: ProjectItem[] = [
    {
        image: '/projects/rafflix.png',
        title: 'Rafflix Microfrontend',
        tags: ['Vue', 'React', 'Piral', 'Microfrontend'],
        description: 'A Netflix microfrontend clone built using Piral, Vue and React',
        link: 'https://github.com/Numulix/rafflix-microfrontends'
    },
    {
        image: '/projects/files-away.png',
        title: 'Files Away',
        tags: ['Next.js', 'Appwrite', 'Shadcn'],
        description: 'A simple online storage solution built with Next.js and styled using Shadcn. For backend services, Appwrite was used for its simplicity.',
        link: 'https://github.com/Numulix/files-away'
    },
    {
        image: '/projects/portfolio.png',
        title: 'Portfolio',
        tags: ['Angular', 'Tailwind CSS'],
        description: 'This portfolio. You are looking at it :)',
        link: 'https://github.com/Numulix/portfolio-angular'
    },
    {
        image: '/projects/ptcg-browser.png',
        title: 'Pokemon TCG Browser',
        tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
        description: 'A simple web application to browse and search for Pokemon TCG cards. This serves as a mini scalable project to practice React',
        link: 'https://github.com/Numulix/pokemon-tcg-browser'
    }
]