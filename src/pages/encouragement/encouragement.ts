import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the EncouragementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-encouragement',
  templateUrl: 'encouragement.html',
})
export class EncouragementPage {

  assey;

  ionViewDidEnter() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'none';
      });
    }
    // 请求数据
    this.http.get('/api/encouragements').subscribe((data)=>{
      this.assey = data;
    })
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad EncouragementPage');
  // }
  goNeirong(i){
    this.navCtrl.push('NeirongPage',{
      id: i,
      value: 'encouragements'
    })
  }
  goPersonal(){
    this.navCtrl.push("PersonalPage")
  }
  ionViewWillLeave() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map(key => {
        elements[key].style.display = "flex";
      });
    }
  }
}

