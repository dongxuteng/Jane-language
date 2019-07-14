import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SightPage } from '../sight/sight';
import { HttpClient } from '@angular/common/http';
@IonicPage()
@Component({
  selector: 'page-essay',
  templateUrl: 'essay.html',
})
export class EssayPage {

  articles;
  avatar=[];
  useravatar=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
  }
  
  ionViewDidEnter() {
    this.http.get('/api/essay').subscribe((data)=>{
      console.log(111);
      console.log(data);
      this.articles = data;
      this.articles.forEach(e => {
        this.avatar.push('../assets' + e.img);
        this.useravatar.push('../assets' + e.imgavatar);
      });
      
    })
  }
  
  goNeirong(i){
    console.log(i);
    this.navCtrl.push('NeirongPage',{
      id: this.articles[i].id,
      value: 'sight'
    })
  }
  ionViewDidLoad() {

  }
  goEssaymore(){
    this.navCtrl.push('EssaymorePage');
  }
  goSight(){
    this.navCtrl.pop();
  }
  goPerson(){
    this.navCtrl.push('PersonalPage');
  }
  doRefresh(refresher) {//请求数据的请求方法可以写在这个函数里面
    

    console.log('Begin async operation', refresher);
    setTimeout(() => {
      console.log('刷新成功');
      refresher.complete();
    }, 1000);}
  doInfinite(loader){
      console.log('Begin async operation',loader);
      setTimeout(() => {
        console.log('加载成功');
        loader.complete();
      }, 1000);}

      ionViewWillLeave() {
        let elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
          Object.keys(elements).map(key => {
            elements[key].style.display = "flex";
          });
        }
      }
}
