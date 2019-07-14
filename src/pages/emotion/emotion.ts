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

  articles;
  avatar=[];
  useravatar=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
  }
  ionViewDidLoad() {
    
  }
  ionViewDidEnter() {
    this.http.get('/api/emotion').subscribe((data)=>{
      console.log(111);
      console.log(data);
      this.articles = data;
      this.articles.forEach(e => {
        this.avatar.push('../assets' + e.img);
        this.useravatar.push('../assets' + e.imgavatar);
      });
      
    })
  }

  goNeirong(i){
    console.log(i);
    this.navCtrl.push('NeirongPage',{
      id: this.articles[i].id,
      value: 'sight'
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
