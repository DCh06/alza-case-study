import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./hero/hero.module').then((m) => m.HeroModule),
  },
];
