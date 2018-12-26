import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";

@IonicPage()
@Component({
  selector: "page-neirong",
  templateUrl: "neirong.html"
})
export class NeirongPage {
  
  id: number;
  arr: Array<1> = [1];
  constructor(public navCtrl: NavController,public navParams: NavParams,public http: HttpClient) {
    // 获取主页传的内容id
    this.id = navParams.get('id');
  }
  ionViewDidEnter() {
    // 获取内容
    this.http.get('/api/home/neirong').subscribe((data)=>{
      this.arr[0] = data[this.id-1];
      console.log(this.arr[0]);
    })
  }

  return() {
    this.navCtrl.pop();
  }
  
  //关注
  show1() {
    var aTrue = document.getElementById("true");
    var aFalse = document.getElementById("false");
    if (aTrue.style.display != "none") {
      aTrue.style.display = "none";
      aFalse.style.display = "inline";
    } else {
      aTrue.style.display = "inline";
      aFalse.style.display = "none";
    }
  }
  //收藏
  isCollect() {
    var iscollect = document
    .querySelectorAll("#star")[0]
    .className.indexOf(" collected");
    // console.log(iscollect);
    if (iscollect === -1) {
      // 未收藏->已收藏
      document.querySelectorAll("#star")[0].className += " collected";
      // console.log('未收藏->已收藏： ',document.querySelectorAll('.star')[0].className);
    } else {
      // 已收藏->未收藏
      document.querySelectorAll(
        "#star"
        )[0].className = document
        .querySelectorAll("#star")[0]
        .className.slice(0, 37);
      // console.log('已收藏->未收藏： ',document.querySelectorAll('.star')[0].className);
    }
  }
  
  //喜欢
  isLike() {
    // document.querySelectorAll('.star')[0].className += ' collected';
    var islike = document
    .querySelectorAll(".like")[0]
    .className.indexOf(" liked");
    // console.log(islike);
    if (islike === -1) {
      // 未收藏->已收藏
      document.querySelectorAll(".like")[0].className += " liked";
      // this.arr[0].likes++;
      // console.log(this.arr[0].likes);
      // console.log('未收藏->已收藏： ',document.querySelectorAll('.like')[0].className);
    } else {
      // 已收藏->未收藏
      // this.arr[0].likes--;
      document.querySelectorAll(".like")[0].className = document
      .querySelectorAll(".like")[0]
      .className.slice(0, 38);
      // console.log('已收藏->未收藏： ',document.querySelectorAll('.like')[0].className);
    }
  }
  
  
  ionViewDidLoad() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map(key => {
        elements[key].style.display = "none";
      });
    }
  }
  //ionic当退出页面的时候触发的方法
  ionViewWillLeave() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map(key => {
        elements[key].style.display = "flex";
      });
    }
  }
  goPersonal() {
    this.navCtrl.push("PersonalPage");
  }
}
