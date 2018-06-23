import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TextEditorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-text-editor',
  templateUrl: 'text-editor.html',
})
export class TextEditorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TextEditorPage');
  }

  sendMessage(){
    this.navCtrl.pop();
  }

  goBack(){
    this.navCtrl.pop();
  }
}
