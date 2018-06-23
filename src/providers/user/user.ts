import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  currentUser={"mobile": 917011628181}
  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

}
