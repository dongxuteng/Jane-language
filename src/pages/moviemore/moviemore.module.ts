import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoviemorePage } from './moviemore';

@NgModule({
  declarations: [
    MoviemorePage,
  ],
  imports: [
    IonicPageModule.forChild(MoviemorePage),
  ],
})
export class MoviemorePageModule {}
