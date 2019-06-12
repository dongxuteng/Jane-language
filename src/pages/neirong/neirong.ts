import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, AlertController } from "ionic-angular";
import { HttpClient } from "@angular/common/http";

@IonicPage()
@Component({
  selector: "page-neirong",
  templateUrl: "neirong.html"
})
export class NeirongPage {
  pid;
  title;
  articles;
  comments;
  commentList;
  comment;
  username;
  time:string;
  userId;
  id: number;
  value: string;
  star1;
  flag:string;
  flag1='true';
  arr: Array<1> = [1];

  constructor(public navCtrl: NavController,public navParams: NavParams,public alertCtrl: AlertController, public http: HttpClient) {
    // 获取主页传的内容id和value
    this.id = navParams.get('id');
    this.value = navParams.get('value');
  }
  ionViewDidEnter() {
   // var date = new Date();
    //this.time = date.getMonth()+1 + '月' + date.getDate() + '日';
    //获取用户信息
    this.username = window.localStorage.getItem('username');
    this.userId = window.localStorage.getItem('userId');
    let elements = document.querySelectorAll(".tabbar");
    this.http.post('/api/comment',{"id":this.id,"value":this.value}).subscribe((data)=>{
      this.commentList=data;
      console.log(this.commentList);
    })
    // this.http.get('/api/sight').subscribe((data)=>{
    //   this.articles = data;});
    //   console.log(this.articles);
    if (elements != null) {
      Object.keys(elements).map(key => {
        elements[key].style.display = "none";
      });
    }
    // 获取内容
    if(this.value == 'rec_article'){
      this.value='rec_article';
      this.http.get('/api/home/neirong').subscribe((data)=>{
        this.arr[0] = data[this.id-1];
      })
    }
    else if(this.value == 'sight') {
      this.value='sight';
      this.http.get('/api/sight/neirong').subscribe((data)=>{
        this.arr[0] = data[this.id-1];
      })
    }
    else if(this.value == 'emotion'){
      this.http.get('/api/emotions').subscribe((data)=>{
        this.arr[0] = data[this.id];
      })
    }
    else if(this.value == 'encouragements'){
      this.http.get('/api/encouragements').subscribe((data)=>{
        this.arr[0] = data[this.id];
      })
    }
    else if(this.value == 'foods') {
      this.http.get('/api/foods').subscribe((data)=>{
        this.arr[0] = data[this.id];
      })
    }
    else if(this.value == 'essay'){
      this.http.get('/api/essay').subscribe((data)=>{
        this.arr[0] = data[this.id];
      })
    }
  }
  
  return() {
    this.navCtrl.pop();
  }
  alert(){
    const alert = this.alertCtrl.create({
      title: '错误',
      subTitle: '评论不能为空，请重新输入！',
      buttons: ['OK']
    });
    alert.present(); 
  };
  // 发布评论
  release(i) {
    this.comments=this.arr[i]['comments'];
    this.title=this.arr[i]['title'];
    //this.comment=this.arr[i]['comment'];
    var date = new Date();
    this.time = date.getMonth()+1 + '月' + date.getDate() + '日'+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    
        var oTxt = document.getElementById("txt");
        var oBtn = document.getElementById("btn1");
        var oUl1 = document.getElementById("ul1");
        var oBox = document.createElement("div");
        oBox.className = "box";
        if(oTxt['value']==''){
          this.alert();
        }
        else{    
        //创建头像
        var oDivTouxiang = document.createElement("div");
        oDivTouxiang.className = "touxiang";
        oBox.appendChild(oDivTouxiang);
        
        var oDivName = document.createElement("div");
        oDivName.className = "nicheng";
        oDivName.innerHTML = this.username;
        var oDivTime = document.createElement("div");
        oDivTime.className = "shijian";
        oDivTime.innerHTML = this.time;
        oBox.appendChild(oDivTime);
        oBox.appendChild(oDivName);
        
        var oDivComment = document.createElement("div");
        oDivComment.className = "pinglun";
        oDivComment.innerHTML = oTxt['value'];
        oBox.appendChild(oDivComment);
        oUl1.appendChild(oBox);
        this.comment=oTxt['value'];
        oTxt['value']=null;
        this.comments++;
        this.http.post('/api/release',{"username": this.username,"comment":this.comment, "value": this.value, "time":this.time, "comments": this.comments, "id":this.id, "userId":this.userId,"title":this.title}).subscribe((data)=>{
          console.log(data);
        });
        }
        /*oBox.insertBefore(oUl1,oDiv[0]);*/
        
        // var aA = oDiv.getElementsByTagName("a");
        
        // for(var i = 0;i<aA.length;i++){
        //     aA[i].onclick=function(){
        //       // console.log(oDiv.parentNode)
        //         var x=oDiv.parentNode.parentNode.removeChild(oDiv.parentNode);
        //         x=null;
        //     }
        // }
    }

  //关注
  show1() {
    var btn = document.getElementById("follow");
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
  isCollect(i) {
    // var iscollect = document
    // .querySelectorAll("#star")[0]
    // .className.indexOf(" collected");
    // console.log(iscollect);
    var star=document.getElementById('star');
   // this.flag1='t'
    if (this.flag1== 'true') {
      this.pid=this.arr[i]['Uid'];
      console.log(this.pid);
      this.flag1='false';
      star.style.backgroundColor="lightgoldenrodyellow";
      // 未收藏->已收藏
      //document.querySelectorAll("#star")[0].className += " collected";
      this.http.post('/api/collect',{"Uid":this.userId,"id":this.id,"value":this.value,"pid":this.pid,"flag":this.flag1}).subscribe((data)=>{
        console.log(data);
      })
      // console.log('未收藏->已收藏： ',document.querySelectorAll('.star')[0].className);
    } else {
      // 已收藏->未收藏
      // document.querySelectorAll(
      //   "#star"
      //   )[0].className = document
      //   .querySelectorAll("#star")[0]
      //   .className.slice(0, 37);
      // console.log('已收藏->未收藏： ',document.querySelectorAll('.star')[0].className);
      //this.pid=this.arr[i]['Uid'];
     // console.log(this.pid);
      this.flag1='true';
      star.style.backgroundColor="whitesmoke";
      this.http.post('/api/unCollect',{"Uid":this.userId,"value":this.value,"id":this.id}).subscribe((data)=>{
        console.log(data);
      })
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
