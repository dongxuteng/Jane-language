import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { MoviePage } from './movie';

@NgModule({
  declarations: [
    MoviePage,
  ],
  imports: [
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    IonicPageModule.forChild(MoviePage),
  ],
})
export class MoviePageModule {}
