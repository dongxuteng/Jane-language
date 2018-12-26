import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EmotionmorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-emotionmore',
  templateUrl: 'emotionmore.html',
})
export class EmotionmorePage {

  arr = [
    {
      title: '【亲情感悟】	岁月，请温柔以待',
      img: '../../assets/imgs/qinqing.jpg',
      tx: '../../assets/imgs/icon.png',
      username: '彭凌',
      likes: 222,
      date:'2018.12.5',
      msg:'人生路上，亲情是最持久动力，予无私帮助依靠；在最寂寞路上，亲情是最真陪伴，让心感受温馨安慰；在最无奈十字路口，亲情是清晰路标，指引成功方向。当生命第一声号角吹响，亲情是荡漾在母亲眼眶中泪水，是绽放在父亲脸上笑痕。亲情，是父母额上增多白发，是父母眼中无限关怀盼望。亲情，是父亲扬起的手掌，颤动的双唇和恨铁不成钢怒容；亲情，是母亲灼灼泪水，柔情呼唤和温暖舒适怀抱；亲情简简单单，是一个由几根树枝搭起小巢，没有杂质、距离、虚伪，仅是相通血脉间彼此默默相互关怀'
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

}
