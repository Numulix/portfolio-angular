interface NavItem {
    label: string;
    link: string;
    class: string;
}

export const navItems: NavItem[] = [
    {
        label: 'Home',
        link: '#home',
        class: 'nav-link active'
    },
    {
        label: 'About',
        link: '#about',
        class: 'nav-link'
    },
    {
        label: 'Projects',
        link: '#projects',
        class: 'nav-link'
    },
    {
        label: 'Contact',
        link: '#contact',
        class: 'nav-link'
    },
]