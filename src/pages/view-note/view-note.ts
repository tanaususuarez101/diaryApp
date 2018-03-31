import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestfulServiceProvider } from '../../providers/restful-service/restful-service';
import { DetailNotePage } from '../detail-note/detail-note';


@IonicPage()
@Component({
  selector: 'page-view-note',
  templateUrl: 'view-note.html',
  providers:[ RestfulServiceProvider ]
})
export class ViewNotePage {
  noteList:any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public rest: RestfulServiceProvider) {
  }

  ionViewDidLoad() {

  }
  goDetail(title, noteComents) {
    this.navCtrl.push(DetailNotePage, {
      noteTitle: title,
      noteComments: noteComents
    });
  }


}
