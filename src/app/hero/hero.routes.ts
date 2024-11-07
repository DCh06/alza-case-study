import { Route } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroComponent } from './hero.component';
import { HeroDashboardComponent } from './hero-dashboard/hero-dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

export const routes: Route[] = [
  {
    path: '',
    component: HeroComponent,
    children: [
      { path: 'list', component: HeroListComponent },
      { path: 'dashboard', component: HeroDashboardComponent },
      { path: ':id', component: HeroDetailComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
    ],
  },
];
