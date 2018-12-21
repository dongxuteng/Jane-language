import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams, AlertController } from "ionic-angular";
import $ from "jquery";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@IonicPage()
@Component({
  selector: "page-signup",
  templateUrl: "signup.html"
})
export class SignupPage {

  username: string;
  phonenum: string;
  phonepwd: number;
  password: string;
  repassword: string;
  headers = new HttpHeaders({ 'Content-Type':'application/x-www-form-urlencoded'});
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public http: HttpClient) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad SignupPage");
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map(key => {
        elements[key].style.display = "none";
      });
    }
  }

  // 点击注册触发
  goLogin() {
    // username需要大于6位
     if(this.username == undefined || this.username.length < 6){
      const alert = this.alertCtrl.create({
        title: '错误',
        subTitle: '用户名需要大于6位',
        buttons: ['好']
      });
      alert.present();
    }
    // password需要大于6位
    else if(this.password == undefined || this.password.length < 6){
      const alert = this.alertCtrl.create({
        title: '错误',
        subTitle: '密码需要大于6位',
        buttons: ['好']
      });
      alert.present();
    }
    // repassword需要与password相同
    else if(this.repassword !== this.password){
      const alert = this.alertCtrl.create({
        title: '错误',
        subTitle: '两次输入的密码不相同',
        buttons: ['好']
      });
      alert.present();
    }
    // phonenum需要符合手机号格式
    else if(!(/^1(3|4|5|7|8)\d{9}$/.test(this.phonenum))){
      const alert = this.alertCtrl.create({
        title: '错误',
        subTitle: '手机号输入有误',
        buttons: ['好']
      });
      alert.present();
    }
    else if(this.username != undefined && this.password == this.repassword){
      console.log(11);
      this.http.post('/api/signup',{"username":this.username,"password":this.password,"phonenum":this.phonenum,"phonepwd":this.phonepwd},{headers:this.headers}).subscribe((data)=>{
        console.log(1);
      })
    }
  }

  ionViewDidEnter() {}
  //ionic当退出页面的时候触发的方法
  ionViewWillLeave() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map(key => {
        elements[key].style.display = "flex";
      });
    }
  }
}
