import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TesterPage } from '../tester/tester';
import { Employee } from '../tester/Employee';
import { HomePage } from '../home/home';
import {UpdatePage} from '../update/update';
import arrEmp from '../tester/EmployeeArray';
import { DisplayPage } from '../display/display';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  empName;
  empID;
  arrTemp=arrEmp;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  // inputName(event) {
  //   this.empName = event.target.value;
  // }
  // inputID(event) {
  //   this.empID = event.target.value;
  // }
  back(){
    this.navCtrl.pop();
  }
  login(empName,empID) {
    if (empName != null && empID != null) {
      for(let i=0; i<this.arrTemp.length; i++){
        if(empName==this.arrTemp[i].empName && empID==this.arrTemp[i].empID){
          this.navCtrl.push(DisplayPage);
        }else{
          alert('Wrong Username or ID');
        }

      } 
        

    }else{
      alert('Field cannot be Empty!');
     
    }
  }
}
