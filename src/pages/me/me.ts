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
  avatar;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
  }

  ionViewDidEnter() {
    this.username = window.localStorage.getItem('username');
    console.log(this.username);
    this.http.post('/api/me', {"username":this.username}).subscribe((data)=>{
      console.log(data[0]);
      if(data['code'] === 1){
        console.log(data['message']);
      }else{
        this.arr=data;
        this.avatar = './assets'+data[0].imgavatar;
        console.log(this.arr);
      }
      
    })
    console.log(this.arr);
  }

  goMy() {
    this.navCtrl.push('PersonalPage')
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

  change(){
    this.navCtrl.push('SettingsPage')
  }
}