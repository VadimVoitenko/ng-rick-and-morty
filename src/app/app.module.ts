import { RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha'

import { registerLocaleData } from '@angular/common'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import localeUk from '@angular/common/locales/uk'
import { APP_ID, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from 'src/app/app-routing.module'
import { AppComponent } from 'src/app/app.component'
import { TranslocoRootModule } from 'src/app/transloco-root.module'

import { CoreModule } from 'src/app/core/core.module'
import { ErrorInterceptor } from 'src/app/core/interceptors/error.interceptor'
import { MatSelectModule } from '@angular/material/select'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { environment } from 'src/environments/environment'
import { CharacterService } from './modules/home/services/character.service'

registerLocaleData(localeUk)

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
    MatSelectModule,
    NgbModule,
  ],
  providers: [
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: environment.recaptcha.siteKey },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    CharacterService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
