import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './hero.routes';
import { HeroComponent } from './hero.component';
import { HeroHeaderComponent } from './hero-header/hero-header.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [HeroComponent, HeroHeaderComponent, HeroListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatTabsModule],
})
export class HeroModule {}
