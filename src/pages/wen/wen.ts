import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from "@angular/common/http";
/**
 * Generated class for the WenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wen',
  templateUrl: 'wen.html',
})
export class WenPage {
  id:Number;
  articles;
  arr1;
  arr2;
  arr;
  imgs;
  imguser;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
    this.id=navParams.get('id');
    console.log(this.id);
  }

  ionViewDidLoad() {
    
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'none';
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
  ionViewDidEnter() {
    // this.http.get('/api/sight').subscribe((data)=>{
    //   this.articles=data;
    //   this.imgs='./assets'+data[0].img;
    //   this.imguser='./assets'+data[0].imgavatar;
    // })
    this.http.post('/api/collect1',{"id":this.id}).subscribe((data)=>{
      this.arr=data;
      console.log(data);
    });
    this.http.post('/api/trends',{"id":this.id}).subscribe((data)=>{
      this.articles=data;
      console.log(data);
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
  goEncouragemore(){
    this.navCtrl.push('EncouragemorePage')
  }

}
