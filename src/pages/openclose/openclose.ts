import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedbackPage } from '../feedback/feedback';

/**
 * Generated class for the OpenclosePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-openclose',
  templateUrl: 'openclose.html',
})
export class OpenclosePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpenclosePage');
  }
  goToFeedback(){
    this.navCtrl.push(FeedbackPage);
  }

}
