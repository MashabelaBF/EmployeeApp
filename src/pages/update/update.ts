import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import arrEmp from '../tester/EmployeeArray';
import { TesterPage } from '../tester/tester';
import { Employee } from '../tester/Employee';
import { HomePage } from '../home/home';

/**
 * Generated class for the UpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {

arrTemp=arrEmp;
empName;
empSurname;
empID;
empRole;
pic;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePage');
  }

delete(i){
  this.arrTemp.splice(i,1);
}

back(){
  this.navCtrl.pop();
}
gotoHome(){
  this.navCtrl.push(HomePage);
}

updateName(i) {
  
  const prompt = this.alertCtrl.create({
    title: 'Edit',
    message: "Edit Text",
    inputs: [
      {
        name: 'text',
        placeholder: 'Enter text'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {

          let obj=new Employee(data.text,arrEmp[i].empSurname,arrEmp[i].empID,arrEmp[i].empRole,arrEmp[i].pic);

          this.arrTemp[i]=(obj);
          
          console.log('Saved clicked'+ this.arrTemp[i]);
        }
      }
    ]
  });
  prompt.present();
}
updateSurname(i) {
  
  const prompt = this.alertCtrl.create({
    title: 'Edit',
    message: "Edit Text",
    inputs: [
      {
        name: 'text',
        placeholder: 'Enter text'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {

          let obj=new Employee(arrEmp[i].empName,data.text,arrEmp[i].empID,arrEmp[i].empRole,arrEmp[i].pic);

          this.arrTemp[i]=(obj);
          
          console.log('Saved clicked'+ this.arrTemp[i]);
        }
      }
    ]
  });
  prompt.present();
}
updateID(i) {
  
  const prompt = this.alertCtrl.create({
    title: 'Edit',
    message: "Edit Text",
    inputs: [
      {
        name: 'text',
        placeholder: 'Enter text'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {

          let obj=new Employee(arrEmp[i].empName,arrEmp[i].empSurname,data.text,arrEmp[i].empRole,arrEmp[i].pic);

          this.arrTemp[i]=(obj);
          
          console.log('Saved clicked'+ this.arrTemp[i]);
        }
      }
    ]
  });
  prompt.present();
}
updateRole(i) {
  
  const prompt = this.alertCtrl.create({
    title: 'Edit',
    message: "Edit Text",
    inputs: [
      {
        name: 'text',
        placeholder: 'Enter text'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {

          let obj=new Employee(arrEmp[i].empName,arrEmp[i].empSurname,arrEmp[i].empID,data.text,arrEmp[i].pic);

          this.arrTemp[i]=(obj);
          
          console.log('Saved clicked'+ this.arrTemp[i]);
        }
      }
    ]
  });
  prompt.present();
}

}

