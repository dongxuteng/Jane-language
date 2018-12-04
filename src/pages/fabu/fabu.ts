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
  url="http://api.openweathermap.org/data/2.5/weather?q="+localStorage.getItem('currentCity')+"&appid=d9d89c7f2152ca0906eb224667788da8";
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
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
