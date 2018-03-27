import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { RestfulServiceProvider } from '../../providers/restful-service/restful-service';
import { FormBuilder, Validators } from "@angular/forms";

import { ViewNotePage } from '../view-note/view-note';


@IonicPage()
@Component({
  selector: 'page-create-note',
  templateUrl: 'create-note.html',
})
export class CreateNotePage {

  noteForm: any;


  constructor(public navCtrl: NavController,
              public formBuilder: FormBuilder,
              public rest: RestfulServiceProvider ) {
    this.noteForm = this.createFormNote();
  }
  private createFormNote(){
    return this.formBuilder.group({
      noteName: ['', Validators.required],
      noteComment: ['',Validators.required]
    });
  }
  ionViewDidLoad() {

  }
  sendData(){
    console.log(this.noteForm.value);
    this.navCtrl.setRoot(ViewNotePage);
  }


}
