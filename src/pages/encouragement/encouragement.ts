import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  articles = [
    {
      num:666,
      tx:'../../assets/imgs/1.jpg',
      name:'赫赫',
      title: '年少有为',
      imgSrc: '../../assets/imgs/one.png',
      inner:'谁都想年少有为，可现实却很多人一生碌碌无为。每个人在年少时，都对未来有个美好的憧憬，以为等到长大后，这些憧憬就能一一实现，但真正等到年老那时，却发现梦想一个都未曾实现。',
    },
    {
      num:888,
      tx:'../../assets/imgs/2.jpg',
      name:'花颜',
      title: '与其碌碌无为，不如兴风作浪',
      imgSrc: '../../assets/imgs/11.jpg',
      inner:'“世间谤我、欺我、辱我、笑我、轻我、贱我、恶我、骗我、如何处治乎?只是忍他、让他、由他、避他、耐他、敬他、不要理他、再待几年你且看他。”愿你成全这个世界给予你的欢喜，也成全当年兴风作浪的自己。...',
    },
    { num:88,
      tx:'assets/imgs/fj.jpg',
      name:'就不告诉你',
      title: '不同的选择不一样的人生',
      imgSrc: '../../assets/imgs/two.png',
      inner: '在我们走出校门的那一刻，我们就面临这选择，是选择北上广深一线大城市，还是回到自己名不见经传的老家;是选择进入制度规范、福利有保障的大公司，还是进入担任多面手的小公司;是经商，还是从政。每一种选择对于不同的人来说，无所谓好坏之分，只有是否合适之说。',
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad EncouragementPage');
  // }
  goEncourage(){
    this.navCtrl.push('EncouragemorePage')
  }

}
