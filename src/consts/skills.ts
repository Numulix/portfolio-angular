export interface SkillItem {
    name: string;
    icon: string;
    description: string;
    short?: string;
    tag?: string;
    role?: string;
    bgClass?: string;
}

export const skills: SkillItem[] = [
    {
        name: "Angular",
        icon: "/icons/angular.svg",
        description: "Primary Framework",
        short: "NG",
        tag: "Primary",
        role: "Framework",
        bgClass: "bg-nb-yellow"
    },
    {
        name: "React",
        icon: "/icons/react.svg",
        description: "Frontend Library",
        short: "RC",
        tag: "Library",
        role: "Frontend",
        bgClass: "bg-nb-blue"
    },
    {
        name: "Next.js",
        icon: "/icons/nextjs.svg",
        description: "React Framework",
        short: "NXT",
        tag: "Fullstack",
        role: "React Framework",
        bgClass: "bg-white"
    },
    {
        name: "Vue.js",
        icon: "/icons/vue.svg",
        description: "Enterprise Framework",
        short: "VUE",
        tag: "Enterprise",
        role: "Framework",
        bgClass: "bg-nb-mint"
    },
    {
        name: "TypeScript",
        icon: "/icons/typescript.svg",
        description: "Type Safety",
        short: "TS",
        tag: "Typed",
        role: "Type Safety",
        bgClass: "bg-nb-purple"
    },
    {
        name: "JavaScript",
        icon: "/icons/javascript.svg",
        description: "ES6+ Standard",
        short: "JS",
        tag: "Core",
        role: "ES6+ Standard",
        bgClass: "bg-nb-yellow-light"
    },
    {
        name: "Tailwind CSS",
        icon: "/icons/tailwindcss.svg",
        description: "Utility-First",
        short: "TW",
        tag: "Styling",
        role: "Utility-First",
        bgClass: "bg-nb-blue"
    },
    {
        name: "Vite",
        icon: "/icons/vite.svg",
        description: "Build Tool",
        short: "VTE",
        tag: "Fast",
        role: "Build Tool",
        bgClass: "bg-nb-pink"
    },
    {
        name: "Cypress",
        icon: "/icons/cypress.svg",
        description: "E2E Testing",
        short: "CY",
        tag: "QA",
        role: "E2E Testing",
        bgClass: "bg-nb-mint"
    },
    {
        name: "Nest.js",
        icon: "/icons/nestjs.svg",
        description: "Backend Architecture",
        short: "NST",
        tag: "Server",
        role: "Backend",
        bgClass: "bg-nb-coral"
    },
    {
        name: "HTML5",
        icon: "/icons/html5.svg",
        description: "Modern Semantics",
        short: "H5",
        tag: "Semantics",
        role: "Structure",
        bgClass: "bg-nb-orange"
    },
    {
        name: "CSS3",
        icon: "/icons/css3.svg",
        description: "Layouts & Grid",
        short: "C3",
        tag: "Design",
        role: "Layouts & Grid",
        bgClass: "bg-nb-purple"
    }
];
