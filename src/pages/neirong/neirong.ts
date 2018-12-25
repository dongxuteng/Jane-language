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

  constructor(public navCtrl: NavController,public navParams: NavParams,public http: HttpClient) {

    this.id = navParams.get('id');

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
  sLike() {
    // document.querySelectorAll('.star')[0].className += ' collected';
    var islike = document
    .querySelectorAll(".like")[0]
    .className.indexOf(" liked");
    console.log(islike);
    if (islike === -1) {
      // 未收藏->已收藏
      document.querySelectorAll(".like")[0].className += " liked";
      this.arr[0].likes++;
      console.log(this.arr[0].likes);
      // console.log('未收藏->已收藏： ',document.querySelectorAll('.like')[0].className);
    } else {
      // 已收藏->未收藏
      this.arr[0].likes--;
      document.querySelectorAll(".like")[0].className = document
      .querySelectorAll(".like")[0]
      .className.slice(0, 38);
      // console.log('已收藏->未收藏： ',document.querySelectorAll('.like')[0].className);
    }
  }
  
  arr = [
    {
      title: "闯入者",
      name: "赫恩曼尼",
      msg:
      "她早该知道的，儿子有了女友，并且住在了一起，可还是自我麻烦，装傻充愣，在儿子的公寓赖了大半个月，看他心不在焉地陪自己。她装起胆，编造种种理由去看他，其实为的是暂时躲避另一个男人。她早该知道的，儿子有了女友，并且住在了一起，可还是自我麻烦，装傻充愣，在儿子的公寓赖了大半个月，看他心不在焉地陪自己。她装起胆，编造种种理由去看他，其实为的是暂时躲避另一个男人",
      img: "assets/imgs/home.jpeg",
      tx: "assets/imgs/home.jpeg",
      num: 50,
      date: "2018/11/11",
      likes: 999
    }
  ];
  
  ionViewDidEnter() {
    console.log(this.id);
    // 获取内容
    this.http.get('/api/home/neirong').subscribe((data)=>{
      console.log(data);
    })
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
  Fabu(){
    var oTxt = document.getElementById("txt");
    var oBtn = document.getElementById("btn1");
    var oUl1 = document.getElementById("ul1");
    var oBox = document.createElement("div");
    oBox.className = "box";
                
    //创建头像
    var oDiv = document.createElement("div");
    oDiv.className = "touxiang";
    oBox.appendChild(oDiv);
    
    var oDiv = document.createElement("div");
    oDiv.className = "nicheng";
    oDiv.innerHTML = "赫恩曼尼";
    oBox.appendChild(oDiv);
    
    var oDiv = document.createElement("div");
    oDiv.className = "pinglun";
    oDiv.innerHTML = oTxt['value'];
    oTxt['value']=null;
    oBox.appendChild(oDiv);
    
    var oDiv = document.createElement("div");
    oDiv.className = "shijian";
    var oDate = new Date();
    //oDate.getFullYear
    
    oDiv.innerHTML =oDate.getFullYear()+"/"+(oDate.getMonth()+1)+"/"+oDate.getDate()+"<a class='clean' href='javascript:;'>删除</a>";
    
    oBox.appendChild(oDiv);
    
    oUl1.appendChild(oBox);
    
    /*oBox.insertBefore(oUl1,oDiv[0]);*/
    
    var aA = oDiv.getElementsByTagName("a");
    
    for(var i = 0;i<aA.length;i++){
        aA[i].onclick=function(){
          // console.log(oDiv.parentNode)
            var x=oDiv.parentNode.parentNode.removeChild(oDiv.parentNode);
            x=null;
        }
    }
}
}
