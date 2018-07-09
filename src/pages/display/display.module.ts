import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisplayPage } from './display';
import { TesterPage } from '../tester/tester';
@NgModule({
  declarations: [
    DisplayPage,
  ],
  imports: [
    IonicPageModule.forChild(DisplayPage),
  ],
})
export class DisplayPageModule {}
