import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { MePage } from '../me/me';
import { LoginPage } from '../login/login';
import { HelpPage } from '../help/help';
import { AboutPage } from '../about/about';
import { SwitchAccountPage } from '../switch-account/switch-account';

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

  constructor(public navCtrl: NavController, public app:App, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShezhiPage');
  }
  function1(){
    this.navCtrl.pop();
  }
   zhanghao(){
    this.navCtrl.push('ZhanghaoPage');
  }
  xinxiaoxi(){
    this.navCtrl.push('XinxiaoxiPage');
  }
  yinsi(){
    this.navCtrl.push('YinsiPage');
  }
  tongyong(){
    this.navCtrl.push('TongyongPage');
  }
  tuichu(){
    this.app.getRootNavs()[0].setRoot(LoginPage);
  }
  help(){
    this.navCtrl.push(HelpPage);
  }
  about(){
    this.navCtrl.push(AboutPage);
  }
  switch(){
    this.navCtrl.push(SwitchAccountPage);
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
