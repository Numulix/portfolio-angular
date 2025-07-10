interface SocialItem {
    href: string;
    icon: string;
    alt: string;
    ariaLabel: string;
}

export const socials: SocialItem[] = [
    {
        href: "https://github.com/Numulix",
        icon: "/socials/github.svg",
        alt: "GitHub",
        ariaLabel: "Follow me on GitHub"
    },
    {
        href: "https://www.linkedin.com/in/jovan-babi%C4%87-56530b179/",
        icon: "/socials/linkedin.svg",
        alt: "LinkedIn",
        ariaLabel: "Connect with me on LinkedIn"
    },
    {
        href: "https://www.instagram.com/jbabic_numulix/",
        icon: "/socials/instagram.svg",
        alt: "Instagram",
        ariaLabel: "Follow me on Instagram"
    }
]