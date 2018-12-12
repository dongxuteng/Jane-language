import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MePage');
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
}
