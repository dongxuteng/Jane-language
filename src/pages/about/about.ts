import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  v='v1.0.0';
  p='《简语》是一款极简风格的集阅读，交流，分享为一体的轻文学阅读APP。旨在让读者在疲惫忙碌的生活中通过阅读获得快乐与温暖。'
  constructor(public navCtrl: NavController) {

  }

}
