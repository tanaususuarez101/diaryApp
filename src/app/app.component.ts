import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ViewNotePage } from '../pages/view-note/view-note';
import { CreateNotePage } from '../pages/create-note/create-note';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('mymenu') nav: Nav;
  rootPage:any = ViewNotePage;
  public pages: Array<{titulo: string, component: any, icon: string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.pages = [
      { title: "Ver",     component: ViewNotePage,     icon: "bookmarks" },
      { title: "Crear",   component: CreateNotePage,   icon: "add" }
    ];


    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPage(page){
    console.log("pulsado");
    this.nav.setRoot(page);

  }
}

