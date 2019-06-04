import { Component,ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient,HttpHeaders} from "@angular/common/http";

@IonicPage()
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})
export class PersonalPage {
  arr;
  id;
  username;
  avatar;
  target;
  followers;
  gender;
  grade;
  area;
  title;
  content;
  img=[];
  bgimg;
  name;
  constellation;
  userId;
  dynamic: number=0;
  headers = new HttpHeaders({ 'Content-Type':'application/x-www-form-urlencoded'});
  public anyList:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient,public cd: ChangeDetectorRef) {
  }
  ionViewDidEnter() {
    this.username = window.localStorage.getItem('username');
    console.log(333);
    console.log(this.username);
    // 请求数据
    this.http.post('/api/personal',{"username":this.username}).subscribe((data)=>{
      console.log(data);
      console.log(444);
      if(data['code'] === 1){
        console.log(data['message']);
      }else{
        this.arr=data;
        this.name=data[0].name;
        this.target=data[0].target;
        this.followers=data[0].followers;
        this.gender=data[0].gender;
        this.grade=data[0].grade;
        this.area=data[0].area;
        this.constellation=data[0].constellation;
        this.avatar = './assets'+data[0].imgavatar;
        this.arr.forEach(e => {
          this.img.push('./assets' + e.img);
        });

        this.bgimg='./assets'+data[0].bgImage;
        
      }
    })
  }

  del(i){
    this.id = this.arr[i].id;
    this.http.post('/api/personal/del',{"id":this.id},{headers:this.headers}).subscribe((data)=>{
      console.log(111);
      if(data['code'] === 1){
        console.log(data['message']);
      }else{
        console.log(data);
      }
    })
    setTimeout(()=>{
      this.username = window.localStorage.getItem('username');
      console.log(333);
      console.log(this.username);
      // 请求数据
      this.http.post('/api/personal',{"username":this.username}).subscribe((data)=>{
        console.log(data);
        console.log(444);
        if(data['code'] === 1){
          console.log(data['message']);
        }else{
          this.arr=data;
          this.name=data[0].name;
          this.target=data[0].target;
          this.followers=data[0].followers;
          this.gender=data[0].gender;
          this.grade=data[0].grade;
          this.area=data[0].area;
          this.constellation=data[0].constellation;
          this.avatar = './assets'+data[0].imgavatar;
          this.arr.forEach(e => {
            this.img.push('./assets' + e.img);
          });
          this.bgimg='./assets'+data[0].bgImage;
          
        }
      })
    },0)
    this.cd.detectChanges();
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

  ionViewDidLoad() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'none';
      });
    }
    var yellow3=document.getElementById('yellow3');
    var yellow1=document.getElementById('yellow1');
    yellow3.style.borderBottom='2px solid #fff';
    yellow1.style.borderBottom='2px solid #808080';
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
  
  change1(){
    this.dynamic=0;
    var yellow3=document.getElementById('yellow3');
    var yellow1=document.getElementById('yellow1');
    yellow3.style.borderBottom='2px solid #fff';
    yellow1.style.borderBottom='2px solid #808080';
  }
  change3(){
    this.dynamic=1;
    var yellow3=document.getElementById('yellow3');
    var yellow1=document.getElementById('yellow1');
    yellow3.style.borderBottom='2px solid #808080';
    yellow1.style.borderBottom='2px solid #fff';

  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}
