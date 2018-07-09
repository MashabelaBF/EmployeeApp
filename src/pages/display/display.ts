import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TesterPage } from '../tester/tester';
import arrEmp from '../tester/EmployeeArray';
import { LoginPage } from '../login/login';
import { UpdatePage } from '../update/update';

/**
 * Generated class for the DisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display',
  templateUrl: 'display.html',
})
export class DisplayPage {
  url = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayPage');
  }

  arrTemp=arrEmp;

  update(){
    this.navCtrl.push(UpdatePage);
  }
  back(){
    this.navCtrl.pop();
  }
}
