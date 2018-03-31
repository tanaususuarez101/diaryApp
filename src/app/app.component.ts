import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ViewNotePage } from '../pages/view-note/view-note';
import { CreateNotePage } from '../pages/create-note/create-note';

import { SQLite } from '@ionic-native/sqlite';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('mymenu') nav: Nav;
  rootPage:any = ViewNotePage;
  public pages: Array<{titulo: string, component: any, icon: string}>;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              public sqlite: SQLite) {
    this.pages = [
      { titulo: "Ver",     component: ViewNotePage,     icon: "bookmarks" },
      { titulo: "Crear",   component: CreateNotePage,   icon: "add" }
    ];

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.createDatabase();
    });
  }

  goToPage(page){
    this.nav.setRoot(page);
  }

  private createDatabase(){
    this.sqlite.create({
      name: 'data.db',
      location: 'default' // the location field is required
    })
      .then((db) => {
        console.log(db);
      })
      .catch(error =>{
        console.error(error);
      });
  }

}

