import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';

interface BlogIndexEntry {
  slug: string;
}

export const blogSlugGuard: CanActivateFn = (route) => {
  const slug = route.paramMap.get('slug');
  const router = inject(Router);
  const http = inject(HttpClient);

  if (!slug) {
    return of(router.createUrlTree(['/404']));
  }

  return http.get<BlogIndexEntry[]>('/blog/index.json').pipe(
    map((posts) => {
      const exists = Array.isArray(posts) && posts.some((post) => post.slug === slug);
      return exists ? true : router.createUrlTree(['/404']);
    }),
    catchError(() => of(router.createUrlTree(['/404'])))
  );
};
