import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MePage } from '../me/me';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ShezhiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shezhi',
  templateUrl: 'shezhi.html',
})
export class ShezhiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShezhiPage');
  }
  function1(){
    this.navCtrl.pop();
  }
  function2(){
    this.navCtrl.push('ZhanghaoPage');
  }
  function3(){
    this.navCtrl.push('XinxiaoxiPage');
  }
  function4(){
    this.navCtrl.push('YinsiPage');
  }
  function5(){
    this.navCtrl.push('TongyongPage');
  }
  tuichu(){
    this.navCtrl.push(LoginPage);
  }
  ionViewDidEnter(){
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

}
