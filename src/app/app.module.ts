import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { NewWalletModule } from './new-wallet/new-wallet.module';
import { WalletService } from './@service/wallet.service';
import { TokenIndexModule } from './token-index/token-index.module';
import { AcceptTermsModule } from './accept-terms/accept-terms.module';

import { UnlockRouteGuard } from '@guard/unlock-route-guard';
import { AcceptTermsRouteGuard } from '@guard/accept-terms-route-guard'
import { CookieService } from './@service/cookie.service';
import { SharedService } from './@service/shared.service'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
    NewWalletModule,
    TokenIndexModule,
    AcceptTermsModule,
  ],
  providers: [WalletService, UnlockRouteGuard, CookieService, AcceptTermsRouteGuard, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
