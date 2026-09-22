import { Routes } from '@angular/router';
import { blogSlugGuard } from './new-design/blog/blog-slug.guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./new-design/home/new-home.component').then(m => m.NewHomeComponent),
        data: {
            title: "Jovan Babić (Numulix) - Portfolio",
            description: "Mid Frontend Engineer specializing in Angular."
        }
    },
    {
        path: 'blog',
        loadComponent: () => import('./new-design/blog/new-blog-list.component').then(m => m.NewBlogListComponent),
        data: {
            title: "Blog - Jovan Babić (Numulix) | Dev Journal",
            description: "Writing on Frontend Engineering, Bot Automation, and Web Performance."
        }
    },
    {
        path: 'blog/:slug',
        canActivate: [blogSlugGuard],
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
];
