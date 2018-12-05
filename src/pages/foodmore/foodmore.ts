import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FoodmorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-foodmore',
  templateUrl: 'foodmore.html',
})
export class FoodmorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  arr = [
    {
      title: '如何制作传统的法国羊角面包',
      img: '../../assets/imgs/3.jpg',
      tx: '../../assets/imgs/icon.png',
      username: 'Kika Kong',
      likes: '222',
      date:'2018.12.5',
      msg:'她早该知道的，儿子有了女友，并且住在了一起，可还是自我麻烦，装傻充愣，在儿子的公寓赖了大半个月，看他心不在焉地陪自己。她装起胆，编造种种理由去看他，其实为的是暂时躲避另一个男人。她早该知道的，儿子有了女友，并且住在了一起，可还是自我麻烦，装傻充愣，在儿子的公寓赖了大半个月，看他心不在焉地陪自己。她装起胆，编造种种理由去看他，其实为的是暂时躲避另一个男人'
    }]
   ionViewDidload(){
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
