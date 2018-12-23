import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
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
  constructor(public navCtrl: NavController,public http:HttpClient) {
    //温度
    this.http.get(this.url).subscribe((data)=>{
    this.Temp=parseInt(data['main'].temp)-273
    console.log(this.Temp);
    return this.Temp;
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

  
  arr=[
    {title:'闯入者',name:'赫恩曼尼',
     msg:'她早该知道的，儿子有了女友，并且住在了一起，可还是自我麻烦，装傻充愣，在儿子的公寓赖了大半个月，看他心不在焉地陪自己。她装起胆，编造种种理由去看他，其实为的是暂时躲避另一个男人。',
     img:'assets/imgs/home.jpeg',
     tx:'../../assets/imgs/home.jpeg',
     num:50,
     like:30
   },
   {title:'闯入者2',name:'赫恩曼尼',
    msg:'她早该知道的，儿子有了女友，并且住在了一起，可还是自我麻烦，装傻充愣，在儿子的公寓赖了大半个月，看他心不在焉地陪自己。她装起胆，编造种种理由去看他，其实为的是暂时躲避另一个男人。',
    img:'assets/imgs/home2.jpg',
    tx:'assets/imgs/icon.png',
    num:50,
    like:30
  }
   
 ]

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
