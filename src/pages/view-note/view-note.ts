import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestfulServiceProvider } from '../../providers/restful-service/restful-service';


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
    this.rest.getNote().subscribe( data => {
      this.noteList = data;
    });

  }

}
