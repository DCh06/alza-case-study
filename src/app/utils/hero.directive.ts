import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHero]',
  standalone: true,
})
export class HeroDirective {
  @Input() appHero!: string;

  @HostBinding('class.invisible') get invisible() {
    return this.appHero.length > 10;
  }
}
