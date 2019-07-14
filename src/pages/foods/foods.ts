import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-foods',
  templateUrl: 'foods.html',
})
export class FoodsPage {

  articles;
  avatar=[];
  useravatar=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
  }

  ionViewDidEnter(){
    this.http.get('/api/foods').subscribe((data)=>{
      console.log(111);
      console.log(data);
      this.articles = data;
      this.articles.forEach(e => {
        this.avatar.push('../assets' + e.img);
        this.useravatar.push('../assets' + e.imgavatar);
      });
      
    })
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

  foodsmore(i){
    console.log(i);
    this.navCtrl.push('NeirongPage',{
      id: this.articles[i].id,
      value: 'sight'
    })
  }
}
