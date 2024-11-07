import { Directive } from '@angular/core';

@Directive({
  selector: '[appHero]',
  standalone: true,
})
export class HeroDirective {
  transform(value: string) {
    if (value.length > 10) {
      return value.substring(0, 10) + '...';
    }

    return value;
  }
}
