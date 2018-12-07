import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  asseys = [
    {
      name: "花颜",
      title: "一段话",
      inner: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a ?! Whoa. This is heavy.Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
      iconSrc: "../../assets/imgs/icon.png",
      comments: 256,
      likes: 999,
    },
    {
      name: "简小语",
      title: "一段话",
      inner: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
      //imgSrc: "../../assets/imgs/3.jpg",
      iconSrc: "../../assets/imgs/icon.png",
      comments: 187,
      likes: 999,
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WenPage');
  }
  // 下拉刷新
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  

}
