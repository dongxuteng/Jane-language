import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EncouragemorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-encouragemore',
  templateUrl: 'encouragemore.html',
})
export class EncouragemorePage {

  arr = [
    {
      title: '年少有为',
      img: '../../assets/imgs/lizhi.jpg',
      tx: '../../assets/imgs/icon.png',
      name: '二十四番花信',
      likes: 888,
      date:'2018.11.26',
      msg:'谁都想年少有为，可现实却很多人一生碌碌无为。每个人在年少时，都对未来有个美好的憧憬，以为等到长大后，这些憧憬就能一一实现，但真正等到年老那时，却发现梦想一个都未曾实现。今天，许久未发朋友圈的大学同学，突然分享李荣浩的歌曲《年少有为》，配文却是年少无为。想想看，我们已经离开大学整整五年的时间，有些人混得风生水起，大部分人却一直碌碌无为，差距一点点产生，焦虑也在一点点增加。如果这辈子注定年少无为，我们该以何种姿态来面对自身呢?又以何种面貌来面对，对我们寄予厚望的父母呢?'
    }
    
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
//收藏
  isCollect(){

    var iscollect = document.querySelectorAll('#star')[0].className.indexOf(' collected');
    // console.log(iscollect);
    if(iscollect === -1){  // 未收藏->已收藏
      document.querySelectorAll('#star')[0].className += ' collected';
      // console.log('未收藏->已收藏： ',document.querySelectorAll('.star')[0].className);
    }
    else{  // 已收藏->未收藏
      document.querySelectorAll('#star')[0].className = document.querySelectorAll('#star')[0].className.slice(0,37);
      // console.log('已收藏->未收藏： ',document.querySelectorAll('.star')[0].className);
    }
  }
//喜欢
    isLike(){
        // document.querySelectorAll('.star')[0].className += ' collected';
        var islike = document.querySelectorAll('.like')[0].className.indexOf(' liked');
        console.log(islike);
        if(islike === -1){  // 未收藏->已收藏
          document.querySelectorAll('.like')[0].className += ' liked';
          this.arr[0].likes++;
          console.log(this.arr[0].likes)
          // console.log('未收藏->已收藏： ',document.querySelectorAll('.like')[0].className);
        }
        else{  // 已收藏->未收藏
          this.arr[0].likes--;
          document.querySelectorAll('.like')[0].className = document.querySelectorAll('.like')[0].className.slice(0,38);
          // console.log('已收藏->未收藏： ',document.querySelectorAll('.like')[0].className);
        }
      }
      //关注
    show1(){
      var aTrue = document.getElementById('true');
      var aFalse = document.getElementById('false');
      if ( aTrue.style.display!="none"){
          aTrue.style.display="none";
          aFalse.style.display="inline";
      }else{
          aTrue.style.display="inline";
          aFalse.style.display="none";
      }
    } 
      // ionViewDidLoad() {
      // }
    goPersonal(){
      this.navCtrl.push('PersonalPage')
    }  

}
