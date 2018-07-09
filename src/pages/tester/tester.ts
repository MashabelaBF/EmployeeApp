import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Employee } from './Employee';
import { LoginPage } from '../login/login';
import {DisplayPage} from '../display/display';
import arrEmp from '../tester/EmployeeArray';
/**
 * Generated class for the TesterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tester',
  templateUrl: 'tester.html',
})
export class TesterPage {
  url="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
  empName;
  empSurname;
  empID;
  empRole;
  temp=arrEmp;
  pic;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad TesterPage');
  }

  // inputName(event) {
  //   this.empName = event.target.value;
  // }
  // inputSurname(event) {
  //   this.empSurname = event.target.value;
  // }
  // inputID(event) {
  //   this.empID = event.target.value;
  // }
  // inputRole(event) {
  //   this.empRole = event.target.value;
  // }
  
  addArr(empName,empSurname,empID,empRole){
  
    let objEmp = new Employee(empName,empSurname,empID,empRole,this.url);
    
    if(empName!=null && empSurname!=null && empID!=null && empRole!=null){
    
    arrEmp.push(objEmp);
    this.navCtrl.push(LoginPage);
    }else{
      alert("Inputs cannot be Empty!");
    }
  }
  editEmp(i){
    if(this.empName !=null && this.empSurname !=null && this.empID !=null && this.empRole !=null){
      arrEmp[i]=(this.empName +" "+ this.empSurname +" "+ this.empID +" "+ this.empRole +""+this.pic);
    }else{
      alert("Inputs cannot be Empty!");
    }
          
           
  }
  deleteEmp(i){
    if(arrEmp!=null){
      arrEmp.splice(i,1);
    }else{
      alert('Array Empty');
    }
           
  }
  back(){
    this.navCtrl.pop();
  }
  
  addImg(event: any){

    if(event.target.files && event.target.files[0]){
      let reader = new FileReader();

      reader.onload = (event:any)=>{
        this.url=event.target.result;
        // console.log(this.url);
      }
     return reader.readAsDataURL(event.target.files[0]);
     
    } 

}
}
