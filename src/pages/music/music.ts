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
 
  //音乐播放
//  isPlaying = false;
//  playsrc = "../../assets/imgs/player@play.png";
//  displaysrc = "../../assets/imgs/player@pause.png";
//  player = "player";
//  displayer = "displayer";
//  rotation = "";
//  audio: HTMLAudioElement;
//  notemusic= "../../assets/imgs/Adele - Rolling in the Deep.mp3";
//  play() {
//   this.audio = document.querySelector("#audios");
//   this.rotation = this.isPlaying ? "" : "rotation";
//   this.isPlaying ? this.audio.pause() : this.audio.play();
//   this.isPlaying = !this.isPlaying;
// };

  arr=[{
    img:'../../assets/imgs/12.jpg',
    title:'《你要的全拿走》— 胡彦斌',
    p:'“先冲我笑的人是你 先伸出手的人是你 可为什么 后退一万步的人是你 急于抽身离开的人也是你”',
    music:'../../assets/imgs/liangliang.mp3'
  }]
  
  ionViewDidLoad() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'none';
      });
    }
  }
  //ionic当退出页面的时候触发的方法
  ionViewWillLeave() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'flex';
      });
    }
  }
}
