import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { HttpClient, HttpHeaders} from '@angular/common/http';
declare var BMap;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  url="http://api.openweathermap.org/data/2.5/weather?q="+localStorage.getItem('currentCity')+"&appid=d9d89c7f2152ca0906eb224667788da8";
  Mon:string;
  Dat:Number;
  Year:Number;
  localCityName: string;
  Temp:number;
  arr
    constructor(public navCtrl: NavController,public http:HttpClient) {
    //温度
    this.http.get(this.url).subscribe((data)=>{
    this.Temp=parseInt(data['main'].temp)-273
    console.log(this.Temp);
    return this.Temp;
    })
  }

  headers = new HttpHeaders({ 'Content-Type':'application/x-www-form-urlencoded'});
  ionViewDidEnter() {
    this.http.get('/api/home').subscribe((data)=>{
      this.arr = data;
    })
  }

  ionViewDidLoad() { 

//地点
    var myCity = new BMap.LocalCity();
    myCity.get(function (result) {
    var cityName = result.name; 
    localStorage.setItem('currentCity', cityName);
    return cityName;
  });
  // 延迟500毫秒取存储在localStorage中的 cityName 
    setTimeout(() => {
    this.localCityName = localStorage.getItem('currentCity'); 
 }, 500); 
 }
    ngOnInit(){
  // 日期
      var arr=["Jan","Feb","Mar","Apr","May","Jun",,"Jul","Aug","Sept","Oct","Nov","Dec"];
      var d=new Date();
      this.Year=d.getFullYear();
      this.Dat=d.getDate();
      this.Mon= arr[d.getMonth()+1];
      return this.Dat+this.Mon+this.Year;
   }

  

  Go_nr(){
      this.navCtrl.push('NeirongPage') ;
  }
  Go_fb(){
    this.navCtrl.push('FabuPage');
  }
  Goperson(){
    this.navCtrl.push('PersonalPage')
  }
  //喜欢
  isLiked(arr){
    // document.querySelectorAll('.star')[0].className += ' collected';
    var islike = document.querySelectorAll('#like')[0].className.indexOf(' love');
    // console.log(islike);
    if(islike === -1){  // 未收藏->已收藏
      document.querySelectorAll('#like')[0].className += ' love';
      this.arr[0].like++
      // console.log('未收藏->已收藏： ',document.querySelectorAll('#like')[0].className);
    }
    else{  // 已收藏->未收藏
      document.querySelectorAll('#like')[0].className = document.querySelectorAll('#like')[0].className.slice(0,20);
      // console.log('已收藏->未收藏： ',document.querySelectorAll('#like')[0].className);
      this.arr[0].like--;
    }
  }
}
