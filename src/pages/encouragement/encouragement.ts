import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the EncouragementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-encouragement',
  templateUrl: 'encouragement.html',
})
export class EncouragementPage {

  articles;
  avatar=[];
  useravatar=[];
  ionViewDidEnter() {
    this.http.get('/api/encouragement').subscribe((data)=>{
      console.log(111);
      console.log(data);
      this.articles = data;
      this.articles.forEach(e => {
        this.avatar.push('../assets' + e.img);
        this.useravatar.push('../assets' + e.imgavatar);
      });
      
    })
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad EncouragementPage');
  // }
  goNeirong(i){
    console.log(i);
    this.navCtrl.push('NeirongPage',{
      id: this.articles[i].id,
      value: 'sight'
    })
  }
  goPersonal(){
    this.navCtrl.push("PersonalPage")
  }
  ionViewWillLeave() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map(key => {
        elements[key].style.display = "flex";
      });
    }
  }
}

