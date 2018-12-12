import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

/**
 * Generated class for the InterestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-interest',
  templateUrl: 'interest.html',
})
export class InterestPage {
  testCheckboxOpen: boolean;
  testCheckboxResult;
  arr;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad InterestPage');
  }
  showCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('选择你的兴趣');

    alert.addInput({
      type: 'checkbox',
      label: '美食',
      value: '美食',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: '随笔',
      value: '随笔'
    });
    alert.addInput({
      type: 'checkbox',
      label: '情感',
      value: '情感'
    });
    alert.addInput({
      type: 'checkbox',
      label: '旅行',
      value: '旅行'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {

        // console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
        this.arr=data;
        // for(var i=0;i<this.arr.length;i++){
        //   console.log(this.arr[i]);
        // }

      }
    });
    alert.present();
  }

}
