import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { CoreModule } from 'src/app/core/core.module'

import { LayoutModule } from 'src/app/shared/modules/layout/layout.module'

import { HomeRoutingModule } from 'src/app/modules/home/home-routing.module'
import { HomeComponent } from 'src/app/modules/home/pages/home/home.component';
import { HeroComponent } from './pages/hero/hero.component'

@NgModule({
  declarations: [HomeComponent, HeroComponent],
  imports: [CommonModule, HomeRoutingModule, CoreModule, LayoutModule],
})
export class HomeModule {}
