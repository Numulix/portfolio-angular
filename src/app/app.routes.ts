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
    },
    {
        path: 'playground',
        loadComponent: () => import('./playground/design-system-playground.component').then(m => m.DesignSystemPlaygroundComponent),
        data: {
            title: "Design System Playground - Jovan Babić",
            description: "Interactive Neo-Brutalist design system component laboratory."
        }
    },
    {
        path: 'design-system',
        redirectTo: 'playground',
        pathMatch: 'full'
    },
    {
        path: 'new',
        loadComponent: () => import('./new-design/layout/new-layout.component').then(m => m.NewLayoutComponent),
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home'
            },
            {
                path: 'home',
                loadComponent: () => import('./new-design/home/new-home.component').then(m => m.NewHomeComponent),
                data: {
                    title: "Jovan Babić (Numulix) - Neo-Brutalist Portfolio",
                    description: "Mid Frontend Engineer specializing in Angular, React, Next.js & Microfrontends."
                }
            },
            {
                path: 'blog',
                loadComponent: () => import('./new-design/blog/new-blog-list.component').then(m => m.NewBlogListComponent),
                data: {
                    title: "Blog - Jovan Babić (Numulix) | Neo-Brutalist Dev Journal",
                    description: "Writing on Frontend Engineering, Bot Automation, and Web Performance."
                }
            },
            {
                path: 'blog/:slug',
                loadComponent: () => import('./new-design/blog/blog-post/new-blog-post.component').then(m => m.NewBlogPostComponent)
            },
            {
                path: '404',
                loadComponent: () => import('./new-design/not-found/not-found.component').then(m => m.NotFoundComponent),
                data: {
                    title: "404 Not Found - Jovan Babić (Numulix)",
                    description: "The page you are looking for doesn't exist or has been moved."
                }
            },
            {
                path: '**',
                redirectTo: '404'
            }
        ]
    },
    {
        path: '404',
        loadComponent: () => import('./new-design/layout/new-layout.component').then(m => m.NewLayoutComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./new-design/not-found/not-found.component').then(m => m.NotFoundComponent),
                data: {
                    title: "404 Not Found - Jovan Babić (Numulix)",
                    description: "The page you are looking for doesn't exist or has been moved."
                }
            }
        ]
    },
    {
        path: '**',
        redirectTo: '404'
    }
];
