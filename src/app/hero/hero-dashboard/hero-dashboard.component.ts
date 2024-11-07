import { Component, inject } from '@angular/core';
import { HeroService } from '../../api/hero.service';

@Component({
  selector: 'app-hero-dashboard',
  templateUrl: './hero-dashboard.component.html',
  styleUrl: './hero-dashboard.component.scss',
})
export class HeroDashboardComponent {
  heroService = inject(HeroService);
  heroes = this.heroService.getAllTop();
}
