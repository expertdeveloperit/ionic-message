import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

import { SearchPage } from '../search/search';
import { TermsNPolicyPage } from '../terms-n-policy/terms-n-policy';
import { TextEditorPage } from '../text-editor/text-editor';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private contacts: Contacts) {
    this.contacts.find(["displayName", "phoneNumbers"], {multiple: true}).then((contacts) => {
      console.log(contacts, "contacts");
    })
  }

  navigate(pageName: String){
    switch(pageName){
      case 'search':
        this.navCtrl.push(SearchPage);
        break;
      case 'terms':
        this.navCtrl.push(TermsNPolicyPage);
        break;
    }
  }

  sendMessage(){
    this.navCtrl.push(TextEditorPage);
  }
}
