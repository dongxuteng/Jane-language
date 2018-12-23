import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EmotionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-emotion',
  templateUrl: 'emotion.html',
})
export class EmotionPage {

  asseys = [
    {
      name: "彭凌 ",
      title: "【亲情感悟】	岁月，请温柔以待",
      inner: "人生路上，亲情是最持久动力，予无私帮助依靠；在最寂寞路上，亲情是最真陪伴，让心感受温馨安慰；在最无奈十字路口，亲情是清晰路标，指引成功方向。",
      tx: "../../assets/imgs/3.jpg",
      comments: 256,
      likes: 999,
    },
    {
      name: "不倾城",
      title: "【爱情感悟】那些以玩笑说出口的话，往往是最真的表达",
      inner: "有人说世上从来没有所谓的玩笑，所有的玩笑都有认真的成分，多少真心话在玩笑中说出口，只是不想让懂的人，怎么都不会懂。是啊，有多少想要真心表达的话却因为各种各样的原因无奈说不出口。",
      tx: "../../assets/imgs/1.jpg",
      comments: 256,
      likes: 999,
    },
    {
      name: "张兴旺 ",
      title: "【友情感悟】人生何处不相逢",
      inner: "人的一生会遇到许多的人和事，但要想人人成为知己，事事顺心如意，我看也非易事。然，佛经中的两个字却让我茅塞顿开，那就是‘随缘’，按佛经中讲，人与人从相逢到相识也是一种缘分，不管是什么人，只要有缘，哪怕是隔着千山万水，冥冥中也会在一个特定的环境下相逢，正所谓，有缘千里来相会",
      tx: "../../assets/imgs/icon.png",
      comments: 187,
      likes: 45,
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmotionPage');
  }
  emotionmore(){
    this.navCtrl.push('EmotionmorePage')
  }
  Goperson(){
    this.navCtrl.push('PersonalPage')
  }
}
