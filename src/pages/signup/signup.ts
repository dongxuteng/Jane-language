import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams, AlertController,App } from "ionic-angular";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoginPage } from "../login/login";

@IonicPage()
@Component({
  selector: "page-signup",
  templateUrl: "signup.html"
})
export class SignupPage {

  username: string;
  phonenum: string;
  phonepwd: number;
  phoneCode:number;
  password: string;
  repassword: string;
  time:any;
  regDate=new Date(+new Date() + 8 * 3600 * 1000).toISOString().slice(0,10)+" "+new Date(+new Date() + 8 * 3600 * 1000).toISOString().slice(11,19);;
  headers = new HttpHeaders({ 'Content-Type':'application/x-www-form-urlencoded'});
  constructor(public navCtrl: NavController, public app:App ,public navParams: NavParams, public alertCtrl: AlertController, public http: HttpClient) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad SignupPage");
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map(key => {
        elements[key].style.display = "none";
      });
    }
  }
  back(){
      this.navCtrl.pop();
  }
  Alert(data){
    const alert = this.alertCtrl.create({
      title: '提示',
      subTitle: data,
      buttons: ['OK']
    });
    alert.present();
  }

  //获取验证码
  yanzheng(){
    console.log(1111);
    if(!(/^[1][3,4,5,7,8][0-9]{9}$/.test(this.phonenum))){
      this.Alert('手机号输入有误');
    }else{
      console.log(this.phonenum);
      this.http.post('/api/identify',{"phonenum":this.phonenum}).subscribe((data) =>{
        console.log(data);
        if(data['code'] !== 0){
          console.log(data['message']);
          this.Alert(data['message']);
        }else{
          this.getTime();
          this.phoneCode=data['phoneCode'];
        }
        
      },error =>{
        this.Alert('服务器内部的错误');
        console.log('Error:',error);
      })
    }
  }
  // 点击注册触发
  goLogin() {
    // username需要大于6位
     if(this.username == undefined || this.username.length < 6){
      this.Alert('用户名需要大于6位');
    }
    // password需要大于6位
    else if(this.password == undefined || this.password.length < 6){
      this.Alert('密码需要大于6位');
    }
    // repassword需要与password相同
    else if(this.repassword !== this.password){
      this.Alert('两次输入的密码不相同');
    }
    // phonenum需要符合手机号的格式
    else if(!(/^[1][3,4,5,7,8][0-9]{9}$/.test(this.phonenum))){
      this.Alert('手机号输入有误');
    }
    //验证码是否相同
    else if(this.phonepwd !== this.phoneCode || this.phonepwd == undefined){
      this.Alert('验证码输入不正确！');
    }
    
    else if(this.username != undefined && this.password == this.repassword ){
      console.log(11);
      
      this.http.post('/api/signup',{"username":this.username,"password":this.password,"phonenum":this.phonenum,"phonepwd":this.phonepwd,"regtime":this.regDate},{headers:this.headers}).subscribe((data)=>{
        console.log(data);
        console.log(this.regDate);
        if(data['code'] == 0){
          this.Alert('注册成功！');
          setTimeout(()=>{
            //this.navCtrl.push(LoginPage);
            this.app.getRootNavs()[0].setRoot(LoginPage);
          },1500)
          
        }else{
          this.Alert(data["message"]);
          clearTimeout(this.time);
          this.identifyCode.identifyCodeTips = "获取验证码";
          this.identifyCode.disable = false;
        }
      },err => {
        this.Alert('服务器内部错误');
        console.log(err);
      })
    }
  }
  identifyCode: any = {
    identifyCodeTips: "获取验证码",
    count: 60,
    disable: false
  }
  settime() {
    if (this.identifyCode.count == 1) {
      this.identifyCode.count = 60;
      this.identifyCode.identifyCodeTips = "获取验证码";
      this.identifyCode.disable = false;
      return;
    } else {
      this.identifyCode.count--;
    }

    this.identifyCode.identifyCodeTips = "重新获取(" + this.identifyCode.count + ")";
    this.time= setTimeout(() => {
      this.identifyCode.identifyCodeTips = "重新获取(" + this.identifyCode.count + ")";
      this.settime();
    }, 1000);
  }
  getTime() {
    //发送验证码成功后开始倒计时
    this.identifyCode.disable = true;
    this.settime();

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
