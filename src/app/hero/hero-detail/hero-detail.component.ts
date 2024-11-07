import { Component, effect, inject, OnInit } from '@angular/core';
import { HeroService } from '../../api/hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss',
})
export class HeroDetailComponent implements OnInit {
  heroService = inject(HeroService);
  activeRoute = inject(ActivatedRoute);
  router = inject(Router);
  location = inject(Location);

  id = toSignal(this.activeRoute.params.pipe(map(({ id }) => id)));
  hero = this.heroService.getActive();
  heroName = '';

  constructor() {
    effect(() => {
      const id = this.id();
      if (id === 'new-hero') {
        this.heroName = '';
      } else {
        this.heroName = this.hero()?.name || '';
      }
    });
  }

  ngOnInit(): void {
    const hero = this.hero();
    if (this.id() !== hero?.id) {
      this.heroService.select(this.id());
      this.heroName = this.hero()?.name || '';
    }
  }

  save() {
    if (this.id() === 'new-hero') {
      const newId = this.heroService.add({
        name: this.heroName,
        top: false,
      });
      this.heroService.select(newId);
      console.log(this.hero());
      this.router.navigate([newId]);
    }
  }

  remove() {
    const id = this.hero()?.id;
    if (id || id === 0) {
      this.heroService.remove(id);
    }
    this.router.navigate(['']);
  }

  toggleTop() {
    const hero = this.hero();
    if (hero) {
      this.heroService.toggleTop(hero);
    }
  }

  back(): void {
    this.location.back();
  }
}
