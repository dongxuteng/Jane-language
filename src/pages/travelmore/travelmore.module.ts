import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TravelmorePage } from './travelmore';

@NgModule({
  declarations: [
    TravelmorePage,
  ],
  imports: [
    IonicPageModule.forChild(TravelmorePage),
  ],
})
export class TravelmorePageModule {}
