import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TermsNPolicyPage } from '../terms-n-policy/terms-n-policy';
import { ActivationCodePage } from '../activation-code/activation-code';

@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthPage');
  }
  
  authenticate(){
    console.log("navigate to activation code page")
    this.navCtrl.push(ActivationCodePage);
  }

  navigate(pageName){
    this.navCtrl.push(TermsNPolicyPage);
  }
}
