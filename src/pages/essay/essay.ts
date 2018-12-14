import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  asseys = [
    {
      name: "春暖花开",
      title: "【生活感悟】时间面前，一切终将释怀",
      inner: "常想时间是一味良药，能让人自渡，再难忘的人或事，在时间面前终将释怀。 光阴的巷口，谁没有过年少唇红齿白的时光，谁不曾走过青春的迷茫，谁没有过年少轻狂，谁没有经过命运的起起落落？ 生命中，总有那么一个人陪你看过风景，总有一双手温暖你前行的路，",
      iconSrc: "../../assets/imgs/icon.png",
      comments: 256,
      likes: 999,
    },
    {
      name: "黄天健",
      title: "【故乡感悟】乡愁，是心灵深处最美的花朵",
      inner: "乡愁是一份沉重的爱。离开故土的游子，默默将爱收藏在心底。在异乡打拼，心里异常孤独，对着城市的钢筋水泥，对着那些永远都不可能与之说心里话的人，心中充满惆怅。在寂寞的时候，对着荷塘月色，想起故乡的袅袅炊烟，想起脸上堆满皱纹的阿爸阿妈，想起故乡的那条清澈",
      iconSrc: "../../assets/imgs/1.jpg",
      comments: 256,
      likes: 999,
    },
    {
      name: "简小语",
      title: "一段话",
      inner: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
      iconSrc: "../../assets/imgs/icon.png",
      comments: 187,
      likes: 45,
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EssayPage');
  }
  goEssaymore(){
    this.navCtrl.push('EssaymorePage')
  }

}
