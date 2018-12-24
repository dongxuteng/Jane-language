import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';

/**
 * Generated class for the MoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie',
  templateUrl: 'movie.html',
})
export class MoviePage {
  url='https://api.apiopen.top/todayVideo';
  title:string;
  des:string;
  des2:string;
  video:string;
  video2:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
    this.http.get(this.url).subscribe((data)=>{
      this.title=data['result'][0]['data']['text'];
      this.des=data['result'][5]['data']['content']['data']['description'];
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
    text:this.des,
    like:36
  }
]

ionViewDidLoad(){
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
// goMoviemore(){
//   this.navCtrl.push("MoviemorePage")
// }

  goPersonal(){
    this.navCtrl.push("PersonalPage")
  }
  //喜欢
  isLiked(){
    // document.querySelectorAll('.star')[0].className += ' collected';
    var islike = document.querySelectorAll('.like')[0].className.indexOf(' love');
    console.log(islike);
    if(islike === -1){  // 未收藏->已收藏
      document.querySelectorAll('.like')[0].className += ' love';
      this.arr[0].like++
      console.log('未收藏->已收藏： ',document.querySelectorAll('.like')[0].className);
    }
    else{  // 已收藏->未收藏
      document.querySelectorAll('.like')[0].className = document.querySelectorAll('.like')[0].className.slice(0,37);
      console.log('已收藏->未收藏： ',document.querySelectorAll('.like')[0].className);
      this.arr[0].like--;
    }
  }

}
