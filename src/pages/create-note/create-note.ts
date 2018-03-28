import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { RestfulServiceProvider } from '../../providers/restful-service/restful-service';
import { FormBuilder, Validators } from "@angular/forms";




@IonicPage()
@Component({
  selector: 'page-create-note',
  templateUrl: 'create-note.html',
})
export class CreateNotePage {

  noteForm: any;

  constructor(public navCtrl: NavController,
              public formBuilder: FormBuilder,
              public toastCtrl: ToastController,
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
    this.presentToast();
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Nota añadida',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }


}
