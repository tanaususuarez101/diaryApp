import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-note',
  templateUrl: 'detail-note.html',
})
export class DetailNotePage {

  title: String;
  comments: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = this.navParams.get("noteTitle");
    this.comments = this.navParams.get("noteComments");
  }

  ionViewDidLoad() {
  }

}
