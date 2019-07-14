import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the TravelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-travel',
  templateUrl: 'travel.html',
})
export class TravelPage {

  articles;
  avatar=[];
  useravatar=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
  }

  ionViewDidEnter() {
    this.http.get('/api/travel').subscribe((data)=>{
      console.log(111);
      console.log(data);
      this.articles = data;
      this.articles.forEach(e => {
        this.avatar.push('../assets' + e.img);
        this.useravatar.push('../assets' + e.imgavatar);
      });
      
    })
  }

  ionViewDidLoad() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'none';
      });
    }
  }
  
  
  

  

goTravelmore(i){
  console.log(i);
    this.navCtrl.push('NeirongPage',{
      id: this.articles[i].id,
      value: 'sight'
    })
}
}
