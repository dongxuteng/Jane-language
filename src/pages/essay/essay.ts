import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SightPage } from '../sight/sight';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the EssayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-essay',
  templateUrl: 'essay.html',
})
export class EssayPage {
  asseys1 = [
    {
      name: "春暖花开",
      title: "【生活感悟】时间面前，一切终将释怀",
      inner: "常想时间是一味良药，能让人自渡，再难忘的人或事，在时间面前终将释怀。 光阴的巷口，谁没有过年少唇红齿白的时光，谁不曾走过青春的迷茫，谁没有过年少轻狂，谁没有经过命运的起起落落？ 生命中，总有那么一个人陪你看过风景，总有一双手温暖你前行的路，",
      iconSrc: "../../assets/imgs/icon.png",
      comments: 256,
      likes: 999,
      bgSrc:"../../assets/imgs/1.jpg"
    }]
  asseys2=[
    {
      name: "黄天健",
      title: "【故乡感悟】乡愁，是心灵深处最美的花朵",
      inner: "乡愁是一份沉重的爱。离开故土的游子，默默将爱收藏在心底。在异乡打拼，心里异常孤独，对着城市的钢筋水泥，对着那些永远都不可能与之说心里话的人，心中充满惆怅。在寂寞的时候，对着荷塘月色，想起故乡的袅袅炊烟，想起脸上堆满皱纹的阿爸阿妈，想起故乡的那条清澈",
      iconSrc: "../../assets/imgs/home2.jpg",
      comments: 256,
      likes: 999,
      bgSrc:"../../assets/imgs/17.jpg",
    }]
  asseys3=[
    {
      name: "简小语",
      title: "一段话",
      inner: "【心灵感悟】Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine...",
      iconSrc:"../../assets/imgs/home.jpeg",
      comments: 187,
      likes: 45,
      bgSrc:"../../assets/imgs/e2.jpg",
    }]
  asseys4=[
    {
      name:"花颜",
      title:"【爱情感悟】那些以玩笑说出口的话，往往是最真的表达",
      inner:"那些以玩笑说出口的话，往往是最真的表达",
      iconSrc:"../../assets/imgs/dog.jpg",
      bgSrc:"../../assets/imgs/11.jpg",
      comments:150,
      likes:45,
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
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
  ionViewDidLoad() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
       Object.keys(elements).map((key) => {
          elements[key].style.display = 'none';
      });
    }
    this.http.get('/api/essay').subscribe((data)=>{
      console.log(data);
    })
  }
  goEssaymore(){
    this.navCtrl.push('EssaymorePage');
  }
  goSight(){
    this.navCtrl.pop();
  }
  goPerson(){
    this.navCtrl.push('PersonalPage');
  }
  doRefresh(refresher) {//请求数据的请求方法可以写在这个函数里面
    console.log('Begin async operation', refresher);
    setTimeout(() => {
      console.log('刷新成功');
      refresher.complete();
    }, 1000);}
  doInfinite(loader){
      console.log('Begin async operation',loader);
      setTimeout(() => {
        console.log('加载成功');
        loader.complete();
      }, 1000);}
}
