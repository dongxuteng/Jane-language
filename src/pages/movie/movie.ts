import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviemorePage } from '../moviemore/moviemore';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  arr=[{
    tx:'assets/imgs/3.jpg',
    url:'http://edge.ivideo.sina.com.cn/180518871.mp4?KID=sina,viask&Expires=1544803200&ssig=pzZ5EvhSe1',
    name:'赫赫',
    face:'assets/imgs/fj2.jpg'
  },{
    tx:'assets/imgs/3.jpg',
    url:'http://edge.ivideo.sina.com.cn/180518871.mp4?KID=sina,viask&Expires=1544803200&ssig=pzZ5EvhSe1',
    name:'花颜',
    face:'assets/imgs/fj1.jpg'
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
goMoviemore(){
  this.navCtrl.push("MoviemorePage")
}

}
