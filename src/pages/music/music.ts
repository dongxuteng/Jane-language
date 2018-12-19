import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MusicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-music',
  templateUrl: 'music.html',
})
export class MusicPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicPage');
  }

  arr=[{
    img:'../../assets/imgs/12.jpg',
    title:'《你要的全拿走》— 胡彦斌',
    p:'“先冲我笑的人是你 先伸出手的人是你 可为什么 后退一万步的人是你 急于抽身离开的人也是你”',
    music:'../../assets/imgs/liangliang.mp3'
  }]

}
