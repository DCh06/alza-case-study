import { computed, Injectable, Signal, signal } from '@angular/core';
import { IHero } from '../types/hero.interface';
import { mockHeroes } from '../mock/heroes.mock';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private selectedId = signal<number | null>(null);
  private heroes = signal<IHero[]>([]);

  private selectedHero = computed(() => {
    const y = this.selectedId();
    return this.heroes().find((h) => h.id === y);
  });

  private topHeroes = computed(() => {
    return this.heroes().filter((hero) => hero.top === true);
  });

  constructor() {
    this.heroes.set([...mockHeroes]);
  }

  add(hero: Omit<IHero, 'id'>): number {
    const newId = this.biggestIdx() + 1;
    this.heroes.set([...this.heroes(), { id: newId, ...hero }]);

    return newId;
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

  toggleTop(hero: IHero) {
    this.modify({ ...hero, top: !hero.top });
  }

  getAll(): Signal<IHero[]> {
    return this.heroes.asReadonly();
  }

  getActive(): Signal<IHero | undefined> {
    return this.selectedHero;
  }

  select(id: number | null): void {
    const newId = id !== null ? +id : null;
    this.selectedId.set(newId);
  }

  getAllTop(): Signal<IHero[]> {
    return this.topHeroes;
  }

  // this should be be/db
  biggestIdx = computed(() => {
    return Math.max(...this.heroes().map((h) => h.id));
  });
}
