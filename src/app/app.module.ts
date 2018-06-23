import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';


import { MyApp } from './app.component';

// Pages
import { HomePage } from '../pages/home/home';
import { SearchPage } from '../pages/search/search';
import { TermsNPolicyPage } from '../pages/terms-n-policy/terms-n-policy';
import { AuthPage } from "../pages/auth/auth";
import { ActivationCodePage } from '../pages/activation-code/activation-code';
import { TextEditorPage } from '../pages/text-editor/text-editor';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchPage,
    TermsNPolicyPage,
    AuthPage,
    ActivationCodePage,
    TextEditorPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchPage,
    TermsNPolicyPage,
    AuthPage,
    ActivationCodePage,
    TextEditorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
