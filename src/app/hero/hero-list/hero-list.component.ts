import { Component, inject } from '@angular/core';
import { HeroService } from '../../api/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.scss',
})
export class HeroListComponent {
  heroService = inject(HeroService);

  heroes = this.heroService.getAll();
  lastSelected = this.heroService.getLast();
}
