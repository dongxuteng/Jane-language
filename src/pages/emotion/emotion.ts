import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the EmotionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-emotion',
  templateUrl: 'emotion.html',
})
export class EmotionPage {

  assey;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
  }
  ionViewDidLoad() {
    
  }
  ionViewDidEnter() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'none';
      });
    }
    // 请求数据
    this.http.get('/api/emotions').subscribe((data)=>{
      this.assey = data;
    })
  }

  goNeirong(i){
    this.navCtrl.push('NeirongPage',{
      id: i,
      value: 'emotion'
    })
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
