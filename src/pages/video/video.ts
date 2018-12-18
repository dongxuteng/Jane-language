import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';

/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {
  url='https://api.apiopen.top/todayVideo';
  title:string;
  des:string;
  des2:string;
  video:string;
  video2:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
      this.http.get(this.url).subscribe((data)=>{
      this.title=data['result'][0]['data']['text'];
      this.des=data['result'][2]['data']['content']['data']['description'];
      this.des2=data['result'][3]['data']['content']['data']['description'];
      this.video=data['result'][2]['data']['content']['data']['playUrl'];
      this.video2=data['result'][3]['data']['content']['data']['playUrl'];
      return this.title+this.video+this.des+this.video2+this.des2;
    })
  }
  arr=[{
    tx:'assets/imgs/3.jpg',
    url:this.video,
    name:'赫赫',
    talk:44,
    text:this.des
  }
]
  ionViewDidLoad() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'none';
      });
    }
  }
  ionViewDidEnter() {
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
  // 下拉刷新
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
goPersonal(){
  this.navCtrl.push('PersonalPage')
} 
}
