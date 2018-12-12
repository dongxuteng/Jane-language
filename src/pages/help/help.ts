import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedbackPage } from '../feedback/feedback';
import { OpenclosePage } from '../openclose/openclose';
import { SwicityPage } from '../swicity/swicity';
import { OpagePage } from '../opage/opage';
import { UpdatePage } from '../update/update';

/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {
  // items=[
  //   "如何切换日/夜间模式？","如何打开/关闭系统消息","如何删除收藏的内容","首页天气如何切换城市"
  // ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }
  goToFeedBack(){
    this.navCtrl.push(FeedbackPage)
  }
  fun1(){
    this.navCtrl.push(OpenclosePage)
  }
  fun2(){
    this.navCtrl.push(SwicityPage)
  }
  fun3(){
    this.navCtrl.push(OpagePage)
  }
  fun4(){
    this.navCtrl.push(UpdatePage)
  }

}
