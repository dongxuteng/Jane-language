import { Component,ViewChild } from '@angular/core';
import { NavController,Slides} from 'ionic-angular';
import { HttpClient, HttpHeaders} from '@angular/common/http';
declare var BMap;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  url="http://api.openweathermap.org/data/2.5/weather?q="+localStorage.getItem('currentCity')+"&appid=d9d89c7f2152ca0906eb224667788da8";
  Mon:string;
  Dat: number;
  Year: number;
  localCityName: string;
  Temp: number;
  arr;
  useravatar;
  avatar;
  cityname='石家庄';
  lPosition: any = "";
  rPosition: any = "";
  formattedAddress: string = "";
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController,public http:HttpClient) {
    this.http.get(this.url).subscribe((data)=>{
      this.Temp=parseInt(data['main'].temp)-273
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
  
  // 获取推荐文章内容
  headers = new HttpHeaders({ 'Content-Type':'application/x-www-form-urlencoded'});
  ionViewDidEnter() {
    this.http.get('/api/home').subscribe((data)=>{
      this.arr = data;
      // this.arr.forEach((item) => {
      //   this.avatar = '../assets' + item.img;
      // });
      this.avatar = '../assets' + data[0].img;
      this.useravatar = '../assets' + data[0].imgavatar;
      console.log(this.arr);
    })
  }
  swipeleft(e){
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
    this.avatar = '../assets' + this.arr[currentIndex].img;
    this.useravatar = '../assets' + this.arr[currentIndex].imgavatar;
    
  }
  swiperight(e){
    if(this.slides.isBeginning()){
      console.log('asdasdas');
      this.avatar = '../assets' + this.arr[0].img;
      this.useravatar = '../assets' + this.arr[0].imgavatar;
      e.preventDefault();
    }else{
      let currentIndex = this.slides.getActiveIndex();
      console.log('Current index is', currentIndex);
      this.avatar = '../assets' + this.arr[currentIndex].img;
      this.useravatar = '../assets' + this.arr[currentIndex].imgavatar;
    }
    
  }
  slideChanged(){
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is asdasd', currentIndex);
  }
  
  // 跳转内容页
  Go_nr(i){
    this.navCtrl.push('NeirongPage',{
      id: this.arr[i].id,
      value: 'rec_article'
    }) ;
  }

  // 跳转发布页
  Go_fb(){
    this.navCtrl.push('FabuPage');
  }

  // 跳转个人主页
  Goperson(){
    this.navCtrl.push('PersonalPage')
  }

  //喜欢
  isLiked(i){
    console.log(this.arr[i]);
    // document.querySelectorAll('.star')[0].className += ' collected';
    var islike = document.querySelectorAll('#like')[i].className.indexOf(' love');
    // console.log(islike);
    if(islike === -1){  // 未收藏->已收藏
      document.querySelectorAll('#like')[i].className += ' love';
      this.arr[i].star++
      // console.log('未收藏->已收藏： ',document.querySelectorAll('#like')[0].className);
    }
    else{  // 已收藏->未收藏
      document.querySelectorAll('#like')[i].className = document.querySelectorAll('#like')[i].className.slice(0,20);
      // console.log('已收藏->未收藏： ',document.querySelectorAll('#like')[0].className);
      this.arr[i].star--;
    }
    this.http.post('/api/star',{"star": this.arr[i].star, "id":this.arr[i].id}).subscribe((data)=>{
      console.log(data);
    })
  }
}
