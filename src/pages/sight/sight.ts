import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-sight',
  templateUrl: 'sight.html',
})
export class SightPage {

  articles;
  ionViewDidEnter() {
    this.http.get('/api/sight').subscribe((data)=>{
      this.articles = data;
      console.log(data);
    })
  }




  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
  }

  ionViewDidLoad() {
  }

  // 页面跳转
  goFoods() {
    this.navCtrl.push("FoodsPage");
  }
  goEssays(){
    this.navCtrl.push("EssayPage");
  }
  goEmotions(){
    this.navCtrl.push("EmotionPage");
  }
  goEncouragements(){
    this.navCtrl.push("EncouragementPage");
  }
  goSightmore() {
    this.navCtrl.push('SightmorePage')
  }
  goPersonal() {
    this.navCtrl.push('PersonalPage');
  }
  goTravel() {
    this.navCtrl.push('TravelPage');
  }
  goMusic(){
    this.navCtrl.push('MusicPage');
  }
  goMovie(){
    this.navCtrl.push("MoviePage");
  }

  goNeirong(i) {
    this.navCtrl.push('NeirongPage',{
      id: this.articles[i].id,
      value: 'sight'
    })
  }
  // 点赞计数
  like(i) {
    var islike = document.querySelectorAll('#like')[i].className.indexOf(' love');
    // console.log(islike);
    if(islike === -1){  // 未收藏->已收藏
      document.querySelectorAll('#like')[i].className += ' love';
      // this.arr[0].like++
      // console.log('未收藏->已收藏： ',document.querySelectorAll('#like')[0].className);
    }
    else{  // 已收藏->未收藏
      document.querySelectorAll('#like')[i].className = document.querySelectorAll('#like')[i].className.slice(0,20);
      // console.log('已收藏->未收藏： ',document.querySelectorAll('#like')[0].className);
      // this.arr[0].like--;
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
}
