import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './hero.routes';
import { HeroComponent } from './hero.component';
import { HeroHeaderComponent } from './hero-header/hero-header.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroDirective } from '../utils/hero.directive';
import { HeroDashboardComponent } from './hero-dashboard/hero-dashboard.component';

@NgModule({
  declarations: [
    HeroComponent,
    HeroHeaderComponent,
    HeroListComponent,
    HeroDetailComponent,
    HeroDashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HeroDirective,
  ],
})
export class HeroModule {}
