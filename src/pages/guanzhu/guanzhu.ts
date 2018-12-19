import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GuanzhuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guanzhu',
  templateUrl: 'guanzhu.html',
})
export class GuanzhuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuanzhuPage');
  }

  guanzhus = [{
    id: '001',
    imageUrl:"../assets/imgs/icon.png",
    title: '简小语',
    lastMessage: '简语官方客服',
    
  },
    {
      id: '002',
      imageUrl:"../assets/imgs/icon.png",
      title: 'Tony',
      lastMessage: '一个写手',
    },
    {
      id: '003',
      imageUrl: "../assets/imgs/icon.png",
      title: 'Steve',
      lastMessage: '666',
      
    }];

     //下拉刷新
 doRefresh(refresher) {//请求数据的请求方法可以写在这个函数里面
  console.log('Begin async operation', refresher);
  setTimeout(() => {
    console.log('刷新成功');
    refresher.complete();
  }, 2000);
 }
  function1(){
    this.navCtrl.pop();
  }
   show1(){
    var aTrue = document.getElementsByClassName('true');
    var aFalse = document.getElementsByClassName('false');
    for(var x=0;x<1;x++){
    if ( aTrue[x].style.display!="none"){
        aTrue[x].style.display="none";
        aFalse[x].style.display="inline";
    }else{
        aTrue[x].style.display="inline";
        aFalse[x].style.display="none";
    }
  }
} 

}
