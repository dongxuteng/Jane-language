import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalzonePage } from './personalzone';

@NgModule({
  declarations: [
    PersonalzonePage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalzonePage),
  ],
})
export class PersonalzonePageModule {}
