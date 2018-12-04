import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http'
/**
 * Generated class for the FabuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var BMap;
@IonicPage()
@Component({
  selector: 'page-fabu',
  templateUrl: 'fabu.html',
})
export class FabuPage {
  localCityName: string;
  arr={
    name:'赫恩曼尼'
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() { 
    var myCity = new BMap.LocalCity();
    myCity.get(function (result) {
    var cityName = result.name; 
    localStorage.setItem('currentCity', cityName);
    return cityName;
});

//延迟500毫秒取存储在localStorage中的 cityName 
  setTimeout(() => {
   this.localCityName = localStorage.getItem('currentCity'); 
}, 500); 
}

}
