import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { CoreModule } from 'src/app/core/core.module'

import { LayoutModule } from 'src/app/shared/modules/layout/layout.module'
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select'

import { HomeRoutingModule } from 'src/app/modules/home/home-routing.module'
import { HomeComponent } from 'src/app/modules/home/pages/home/home.component'
import { HeroComponent } from './pages/hero/hero.component'
import { FilterButtonComponent } from './pages/home/filter-button/filter-button.component'
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { CharacterListComponent } from './pages/home/character-list/character-list.component'
import { CharacterItemComponent } from './pages/home/character-item/character-item.component'
import { HeroViewComponent } from './pages/hero/hero-view/hero-view.component'
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [HomeComponent, HeroComponent, FilterButtonComponent, CharacterListComponent, CharacterItemComponent, HeroViewComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    LayoutModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    NgbPaginationModule,
  ],
})
export class HomeModule {}
