import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TravelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-travel',
  templateUrl: 'travel.html',
})
export class TravelPage {
  arr=[{
    tx:'assets/imgs/fj.jpg',
    name:"花颜",
    img:'assets/imgs/fj.jpg',
    msg:'真正的旅行，从来不是一堆照片的堆砌和满足内心小小的虚荣，正因如此，旅行并不仅仅是去看风景，更难得的是旅行之前的期待、旅行进行时的感动和旅行归来时的回味无穷。'
  },{
    tx:'assets/imgs/6.jpg',
    name:"勒布朗",
    img:'assets/imgs/4.jpg',
    msg:'真正的旅行，从来不是一堆照片的堆砌和满足内心小小的虚荣，正因如此，旅行并不仅仅是去看风景，更难得的是旅行之前的期待、旅行进行时的感动和旅行归来时的回味无穷。'
  },{
    tx:'assets/imgs/5.jpg',
    name:"赫赫",
    img:'assets/imgs/fj3.jpg',
    msg:'真正的旅行，从来不是一堆照片的堆砌和满足内心小小的虚荣，正因如此，旅行并不仅仅是去看风景，更难得的是旅行之前的期待、旅行进行时的感动和旅行归来时的回味无穷。'
  },{
    tx:'assets/imgs/4.jpg',
    name:"赫赫",
    img:'assets/imgs/fj1.jpg',
    msg:'真正的旅行，从来不是一堆照片的堆砌和满足内心小小的虚荣，正因如此，旅行并不仅仅是去看风景，更难得的是旅行之前的期待、旅行进行时的感动和旅行归来时的回味无穷。'
  },
  {
    tx:'assets/imgs/2.jpg',
    name:"赫赫",
    img:'assets/imgs/10.jpg',
    msg:'真正的旅行，从来不是一堆照片的堆砌和满足内心小小的虚荣，正因如此，旅行并不仅仅是去看风景，更难得的是旅行之前的期待、旅行进行时的感动和旅行归来时的回味无穷。'
  }
]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'none';
      });
    }
  }
  ionViewDidEnter() {
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
  //喜欢
  isLiked(i){
    // document.querySelectorAll('.star')[0].className += ' collected';
    var islike = document.querySelectorAll('.like')[i].className.indexOf(' love');
    console.log(islike);
    if(islike === -1){  // 未收藏->已收藏
      document.querySelectorAll('.like')[i].className += ' love';
      // console.log('未收藏->已收藏： ',document.querySelectorAll('#like')[0].className);
    }
    else{  // 已收藏->未收藏
      document.querySelectorAll('.like')[i].className = document.querySelectorAll('.like')[i].className.slice(0,38);
      // console.log('已收藏->未收藏： ',document.querySelectorAll('#like')[0].className);
    }
  }

  ionViewWillEnter() {
    this.getNode();
  }
  getNode() {
    let parentNode = document.getElementById("container");
    let childNodeArray: any = parentNode.getElementsByClassName("box");
    let screenWidth = document.documentElement.clientWidth;
    let childWidth = childNodeArray[0].offsetWidth;
    let num = Math.floor(screenWidth / childWidth); //获得一排摆的个数 用Math.floor()转换为整数
    parentNode.style.cssText = "width:" + childWidth * num + "px; margin:0 auto"; //固定container的宽并设置居中
    this.setImagePosition(num, childNodeArray);
  }

  setImagePosition(num, childArray) {
    var imgHeightArray = [];//定义数组用于存放所有图片的高度
    for (var i = 0; i < childArray.length; i++) { //遍历所有图片
      if (i < num) {
        imgHeightArray[i] = childArray[i].offsetHeight; //取得第一排图片的高度
      } else {
        var minHeight = Math.min.apply(null, imgHeightArray); //获取第一排图片中高度最小的图片
        var minIndex = this.getMinHeight(imgHeightArray, minHeight); //函数获得高度最小的图片的位置
        childArray[i].style.position = "absolute"; //绝对定位图片
        childArray[i].style.top = minHeight + "px"; //图片距顶部像素
        childArray[i].style.left = childArray[minIndex].offsetLeft + "px"; //图片距左的像素
        imgHeightArray[minIndex] = imgHeightArray[minIndex] + childArray[i].offsetHeight; //将最低高度的box的高度加上它下方的box高度
      }
    }
  }

  getMinHeight(imgHeightArray, minHeight) {
    for (var i in imgHeightArray) {
      if (imgHeightArray[i] == minHeight) { //循环所有数组的高度 让它等于最小图片的高度 返回i值
        return i;
      }
    }
  }
//这里是借助ionic的上拉加载代替网页的滚动监听实现加载更多
  doInfinite(infiniteScroll) {
    let parentNode = document.getElementById("container");
    for (var i = 0; i < this.arr.length; i++) {
      let divNode = document.createElement("div"); //创建div节点
      divNode.className = "box";//为节点添加box类名
      parentNode.appendChild(divNode);//添加根元素
      let subDivNode = document.createElement("div");//创建节点
      subDivNode.className = "box_img";//为节点添加类名
      divNode.appendChild(subDivNode);//添加根元素
      var img = document.createElement("img");//创建节点
      var msg = document.createElement("p");
      var name = document.createElement("name");
      name.innerHTML=this.arr[i].name;
      msg.innerHTML=this.arr[i].msg;
      img.src = this.arr[i].img;//图片加载路径
      subDivNode.appendChild(img);//添加根元素
      subDivNode.appendChild(msg);//添加根元素
      subDivNode.appendChild(name);//添加根元素
    }
    this.getNode();
    setTimeout(() => { infiniteScroll.complete() }, 1000);
  }
goTravelmore(){
  this.navCtrl.push("TravelmorePage")
}
}
