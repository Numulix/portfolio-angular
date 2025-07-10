import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
        data: {
            title: "Jovan Babić - Portfolio",
            description: 'Welcome to my portfolio, an average frontend enjoyer.'
        }
    },
    {
        path: 'blog',
        loadComponent: () => import('./blog/blog-list/blog-list.component').then(m => m.BlogListComponent),
        data: {
            title: "Jovan Babić - My Blog",
            description: "A collection of articles on my projects, tech, and more."
        }
    },
    {
        path: 'blog/:slug',
        loadComponent: () => import('./blog/blog-post/blog-post.component').then(m => m.BlogPostComponent),
    }
];
