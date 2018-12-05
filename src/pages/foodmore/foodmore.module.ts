import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodmorePage } from './foodmore';

@NgModule({
  declarations: [
    FoodmorePage,
  ],
  imports: [
    IonicPageModule.forChild(FoodmorePage),
  ],
})
export class FoodmorePageModule {}
