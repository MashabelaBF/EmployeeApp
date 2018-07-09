import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TesterPage } from '../tester/tester';
import { LoginPage } from '../login/login';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
// tet=TesterPage;
  
  constructor(public navCtrl: NavController) {

  }
callTester(){
  this.navCtrl.push(TesterPage);
}
callLogin(){
  this.navCtrl.push(LoginPage);
}
}
