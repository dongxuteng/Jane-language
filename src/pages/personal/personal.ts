import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

@IonicPage()
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})
export class PersonalPage {
  arr;
  username;
  avatar;
  target;
  followers;
  gender;
  grade;
  area;
  title;
  content;
  img;
  constellation;
  dynamic: number=2;
  public anyList:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient) {
  }
  ionViewDidEnter() {
    this.username = window.localStorage.getItem('username');
    console.log(this.username);
    // 请求数据
    this.http.post('/api/personal',{"username":this.username}).subscribe((data)=>{
      console.log(data[0]);
      if(data['code'] === 1){
        console.log(data['message']);
      }else{
        this.arr=data;
        this.target=data[0].target;
        this.followers=data[0].followers;
        this.gender=data[0].gender;
        this.grade=data[0].grade;
        this.area=data[0].area;
        this.constellation=data[0].constellation;
        this.avatar = './assets'+data[0].imgavatar;
        this.img='./assets'+data[0].img;
        console.log(this.arr);
      }
    })
  }
  goNeirong(i) {
    this.navCtrl.push('NeirongPage',{
      id: this.arr[i].id,
      value: 'sight'
    })
  }
  
  goMePage() {
    this.navCtrl.pop();
  }
  //关注
  show1(){
    var aTrue = document.getElementById('true');
    var aFalse = document.getElementById('false');
    if ( aTrue.style.display!="none"){
        aTrue.style.display="none";
        aFalse.style.display="inline";
    }else{
        aTrue.style.display="inline";
        aFalse.style.display="none";
    }
  } 

  ionViewDidLoad() {
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
  change2(){
    this.dynamic=2;
    var yellow3=document.getElementById('yellow3');
    var yellow2=document.getElementById('yellow2');
    var yellow1=document.getElementById('yellow1');
    yellow3.style.borderBottom='2px solid #fff';
    yellow2.style.borderBottom='2px solid #808080';
    yellow1.style.borderBottom='2px solid #fff';
  }
  change1(){
    this.dynamic=1;
    var yellow3=document.getElementById('yellow3');
    var yellow2=document.getElementById('yellow2');
    var yellow1=document.getElementById('yellow1');
    yellow3.style.borderBottom='2px solid #fff';
    yellow1.style.borderBottom='2px solid #808080';
    yellow2.style.borderBottom='2px solid #fff';
  }
  change3(){
    this.dynamic=3;
    var yellow3=document.getElementById('yellow3');
    var yellow2=document.getElementById('yellow2');
    var yellow1=document.getElementById('yellow1');
    yellow3.style.borderBottom='2px solid #808080';
    yellow2.style.borderBottom='2px solid #fff';
    yellow1.style.borderBottom='2px solid #fff';

  }
}
