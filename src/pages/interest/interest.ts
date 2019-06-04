import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http'
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
  Uid;
  arr;
  title;
  imgs=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
  }
  ionViewDidLoad() {
    this.Uid = localStorage.getItem('userId');
    console.log(this.Uid);
    this.http.post('/api/me/interest',{"Uid":this.Uid}).subscribe((data)=>{
      console.log(data);
      this.arr = data;
      this.arr.forEach(e => {
        this.imgs.push('../assets' + e.imgs);
      });
    })
  }
  Gofabu(){
    this.navCtrl.push("FabuPage")
  }

}
