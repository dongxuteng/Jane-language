import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-sight',
  templateUrl: 'sight.html',
})
export class SightPage {
  star1;
  articles;
  id:number;
  avatar=[];
  useravatar=[];
  flag:string;
  //flag:boolean=true;
  ionViewDidEnter() {
    this.http.get('/api/sight').subscribe((data)=>{
      console.log(111);
      console.log(data);
      this.articles = data;
      this.articles.forEach(e => {
        this.avatar.push('../assets' + e.img);
        this.useravatar.push('../assets' + e.imgavatar);
      });
      
    })
  }




  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
    //this.id = navParams.get('id');
  }

  ionViewDidLoad() {
  }

  // 页面跳转
  goFoods() {
    this.navCtrl.push("FoodsPage");
  }
  goEssays(){
    this.navCtrl.push("EssayPage");
  }
  goEmotions(){
    this.navCtrl.push("EmotionPage");
  }
  goEncouragements(){
    this.navCtrl.push("EncouragementPage");
  }
  goSightmore() {
    this.navCtrl.push('SightmorePage')
  }
  goPersonal() {
    this.navCtrl.push('PersonalPage');
  }
  goTravel() {
    this.navCtrl.push('TravelPage');
  }
  goMusic(){
    this.navCtrl.push('MusicPage');
  }
  goMovie(){
    this.navCtrl.push("MoviePage");
  }

  goNeirong(i) {
    console.log(i);
    this.navCtrl.push('NeirongPage',{
      id: this.articles[i].id,
      value: 'sight'
    })
  }
  like(i){
   
    this.id=this.articles[i].id;
    this.star1=this.articles[i].star1;
    this.flag=this.articles[i].flag;
    // console.log(this.id,this.star1,this.flag);
    if(this.flag===null){
      this.flag="true";
    }
    // console.log(this.id);
    var like=document.getElementById('like');
    if(this.flag==="true"){
      this.flag ="false";
      this.star1++;
      
      this.http.post('/api/star',{"star1":this.star1,"id":this.id,"flag":this.flag}).subscribe((data)=>{
        console.log(data);
      });
      this.http.get('/api/sight').subscribe((data)=>{
        this.articles = data;
      });
      like.innerHTML=this.articles[i].star1;
    }
    else if(this.flag==="false"){
      this.flag = "true";
      this.star1--;
      this.http.post('/api/star',{"star1":this.star1,"id":this.id,"flag":this.flag}).subscribe((data)=>{
        console.log(data);
      });
      this.http.get('/api/sight').subscribe((data)=>{
        this.articles = data;
      });
      like.innerHTML=this.articles[i].star1;
    }
      console.log(this.star1);
    //document.location.reload();
  }


  // 下拉刷新
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}
