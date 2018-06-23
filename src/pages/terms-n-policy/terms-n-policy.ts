import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthPage } from "../auth/auth";
// Pages
import { HomePage } from "../home/home";
@IonicPage()
@Component({
  selector: 'page-terms-n-policy',
  templateUrl: 'terms-n-policy.html',
})
export class TermsNPolicyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsNPolicyPage');
  }

  logout(){
    this.navCtrl.push(AuthPage);
  }

  goBack(){
    this.navCtrl.pop();
  }
}
