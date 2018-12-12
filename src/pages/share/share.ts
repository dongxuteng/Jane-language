import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-share',
  templateUrl: 'share.html',
})
export class SharePage {
  arrmsg=[{
    name:'赫恩曼尼',
    tx:'assets/imgs/0.jpg',
    title:'如何看待高通在专利侵权案中获得临时禁令，福州法院禁止苹果在化销售'
  },
  {
    name:'花颜',
    tx:'assets/imgs/3.jpg',
    title:'如何制作传统的法国羊角面包'
  }
]
  arrvideo=[{
    name:'花颜',
    tx:'assets/imgs/3.jpg',
    likes:'45',
    comments:'60',
    url:'http://edge.ivideo.sina.com.cn/180245613.mp4?KID=sina,viask&Expires=1544630400&ssig=XaEGf0qxFV'
  }];
  interest:string="text";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  Goperson(){
    this.navCtrl.push('PersonalPage')
  }
  ionViewDidEnter(){
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
       Object.keys(elements).map((key) => {
          elements[key].style.display = 'none';
         });
<<<<<<< HEAD
       }
=======
       }   
>>>>>>> ee3bc292c8dc67fc10e54cac2ece4bd7b8cb55cc
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
