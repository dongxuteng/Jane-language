import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EssaymorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-essaymore',
  templateUrl: 'essaymore.html',
})
export class EssaymorePage {

  arr = [
    {
      title: '【生活感悟】时间面前，一切终将释怀',
      //img: '../../assets/imgs/lizhi.jpg',
      tx: '../../assets/imgs/icon.png',
      username: '春暖花开',
      likes: 555,
      date:'2018.12.6',
      msg:'常想时间是一味良药，能让人自渡，再难忘的人或事，在时间面前终将释怀。光阴的巷口，谁没有过年少唇红齿白的时光，谁不曾走过青春的迷茫，谁没有过年少轻狂，谁没有经过命运的起起落落？生命中，总有那么一个人陪你看过风景，总有一双手温暖你前行的路，总有一首歌让你听着就泪流满面，总有一段文字让你不忍触碰，埋藏在心底。当有一天，站在岁月的彼岸回望，那些纯真的年月，那些沧桑的磨砺，都变成泛黄的记忆，终是感动了时光，也感动了自己。'
    }
    
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
//收藏
isCollect(){

  var iscollect = document.querySelectorAll('#star')[0].className.indexOf(' collected');
  // console.log(iscollect);
  if(iscollect === -1){  // 未收藏->已收藏
    document.querySelectorAll('#star')[0].className += ' collected';
    // console.log('未收藏->已收藏： ',document.querySelectorAll('.star')[0].className);
  }
  else{  // 已收藏->未收藏
    document.querySelectorAll('#star')[0].className = document.querySelectorAll('#star')[0].className.slice(0,37);
    // console.log('已收藏->未收藏： ',document.querySelectorAll('.star')[0].className);
  }
}
//喜欢
  isLike(){
      // document.querySelectorAll('.star')[0].className += ' collected';
      var islike = document.querySelectorAll('.like')[0].className.indexOf(' liked');
      console.log(islike);
      if(islike === -1){  // 未收藏->已收藏
        document.querySelectorAll('.like')[0].className += ' liked';
        this.arr[0].likes++;
        console.log(this.arr[0].likes)
        // console.log('未收藏->已收藏： ',document.querySelectorAll('.like')[0].className);
      }
      else{  // 已收藏->未收藏
        this.arr[0].likes--;
        document.querySelectorAll('.like')[0].className = document.querySelectorAll('.like')[0].className.slice(0,38);
        // console.log('已收藏->未收藏： ',document.querySelectorAll('.like')[0].className);
      }
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
    // ionViewDidLoad() {
    // }
  goPersonal(){
    this.navCtrl.push('PersonalPage')
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
ionViewDidEnter() {
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

}
