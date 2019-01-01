import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the MePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class MePage {
  arr;
  username;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
  }

  ionViewDidEnter() {
    this.username = window.localStorage.getItem('username');
    this.http.post('/api/me', {"username":this.username}).subscribe((data)=>{
      console.log(data[0]);
      if(data['code'] === 1){
        console.log(data['message']);
      }else{
        this.arr=data;
        console.log(this.arr);
      }
      
    })
    console.log(this.arr);
  }

  goMy() {
    this.navCtrl.push('MypagePage')
  }

  Text() {
    this.navCtrl.push("WenPage")
  }
  Video(){
  this.navCtrl.push("VideoPage")
}
  Music() {
    this.navCtrl.push("YinPage")
  }
  Image(){
    this.navCtrl.push("ImagePage")
  }
  Interest(){
    this.navCtrl.push('InterestPage')
  }
  Share(){
    this.navCtrl.push('SharePage')
  }
  function4() {
    this.navCtrl.push("GuanzhuPage")
  }

  function5() {
    this.navCtrl.push("ShezhiPage")
  }
  // arr=[{
  // name:"赫恩曼尼",
  // icon:"../../assets/imgs/icon.png",
  // geqian:"666 skr skr"
  // }]

  change(){
    this.navCtrl.push('SettingsPage')
  }
}