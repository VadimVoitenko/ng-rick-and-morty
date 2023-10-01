import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { BannerComponent } from './components/partials/banner/banner.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HeroPageComponent } from './components/pages/hero-page/hero-page.component';
import { ButtonComponent } from './components/partials/button-filter/button-filter.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RickAndMortyService } from './services/rick-and-morty.service';
import { HeroItemsComponent } from './components/partials/hero-items/hero-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    HomeComponent,
    HeroPageComponent,
    ButtonComponent,
    HeroItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [RickAndMortyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
