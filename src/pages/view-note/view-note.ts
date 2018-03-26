import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-view-note',
  templateUrl: 'view-note.html',
})
export class ViewNotePage {
  noteList: Array<any>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {

  }

  getNote(){

  }

  ionViewDidLoad() {

  }

}
