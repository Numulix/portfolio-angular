export interface ProjectItem {
    image: string;
    title: string;
    tags: string[];
    description: string;
    link: string;
}

export interface PostMetadata {
    title: string;
    slug: string;
    publishedAt: string;
    tags: string[];
    summary: string;
}