import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EssaymorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-essaymore',
  templateUrl: 'essaymore.html',
})
export class EssaymorePage {

  arr = [
    {
      title: '【生活感悟】时间面前，一切终将释怀',
      //img: '../../assets/imgs/lizhi.jpg',
      tx: '../../assets/imgs/icon.png',
      username: '春暖花开',
      likes: '555',
      date:'2018.12.6',
      msg:'常想时间是一味良药，能让人自渡，再难忘的人或事，在时间面前终将释怀。光阴的巷口，谁没有过年少唇红齿白的时光，谁不曾走过青春的迷茫，谁没有过年少轻狂，谁没有经过命运的起起落落？生命中，总有那么一个人陪你看过风景，总有一双手温暖你前行的路，总有一首歌让你听着就泪流满面，总有一段文字让你不忍触碰，埋藏在心底。当有一天，站在岁月的彼岸回望，那些纯真的年月，那些沧桑的磨砺，都变成泛黄的记忆，终是感动了时光，也感动了自己。'
    }
    
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EssaymorePage');
  }

}
