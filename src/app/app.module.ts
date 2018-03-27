import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { ViewNotePage } from '../pages/view-note/view-note';
import { CreateNotePage } from '../pages/create-note/create-note';
import { RestfulServiceProvider } from '../providers/restful-service/restful-service';

@NgModule({
  declarations: [
    MyApp,
    ViewNotePage,
    CreateNotePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ViewNotePage,
    CreateNotePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestfulServiceProvider
  ]
})
export class AppModule {}
