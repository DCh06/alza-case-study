import { computed, Injectable, Signal, signal } from '@angular/core';
import { IHero } from '../types/hero.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private last = signal<IHero | null>(null);
  private heroes = signal<IHero[]>([]);
  private topHeroes = computed(() => {
    return this.heroes().filter((hero) => hero.top === true);
  });

  constructor() {}

  add(hero: IHero): void {
    this.heroes.set([...this.heroes(), hero]);
  }

  remove(heroId: number): void {
    const filteredHeroes = this.heroes().filter((hero) => hero.id !== heroId);
    this.heroes.set(filteredHeroes);
  }

  modify(modifiedHero: IHero): void {
    const modifiedHeroes = this.heroes().map((hero) =>
      hero.id === modifiedHero.id ? modifiedHero : hero
    );
    this.heroes.set([...modifiedHeroes]);
  }

  makeTop(hero: IHero) {
    this.modify({ ...hero, top: true });
  }

  getAll(): Signal<IHero[]> {
    return this.heroes.asReadonly();
  }

  getLast(): Signal<IHero | null> {
    return this.last.asReadonly();
  }

  getAllTop(): Signal<IHero[]> {
    return this.topHeroes;
  }
}
