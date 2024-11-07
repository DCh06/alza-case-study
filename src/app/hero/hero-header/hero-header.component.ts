import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HeroService } from '../../api/hero.service';
import { filter, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-hero-header',
  templateUrl: './hero-header.component.html',
  styleUrl: './hero-header.component.scss',
})
export class HeroHeaderComponent implements OnInit {
  router = inject(Router);
  heroService = inject(HeroService);
  activeHero = this.heroService.getActive();
  destroyRef = inject(DestroyRef);

  activeLink = this.router.url;

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        tap(() => {
          this.activeLink = this.router.url.substring(1);
          if (['list', 'dashboard'].includes(this.activeLink)) {
            this.heroService.select(null);
          }
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  viewDetail() {
    this.router.navigate([`/${this.activeHero()?.id}`]);
  }
}
