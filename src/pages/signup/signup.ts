import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams, AlertController } from "ionic-angular";
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

  back(){
    this.navCtrl.pop();
  }
  
  // 点击注册触发
  goLogin() {
    // username需要大于6位
    if(this.username == undefined || this.username.length < 6){
      this.alert('用户名需要大于六位')
    }
    // password需要大于6位
    else if(this.password == undefined || this.password.length < 6){
      this.alert('密码需要大于六位')
    }
    // repassword需要与password相同
    else if(this.repassword !== this.password){
      this.alert('两次输入的密码不相同')
    }
    // phonenum需要符合手机号格式
    else if(!(/^1(3|4|5|7|8)\d{9}$/.test(this.phonenum))){
      this.alert('手机号输入有误')
    }
    else if(this.username != undefined && this.password == this.repassword){
      // 注册验证
      this.http.post('/api/signup',{"username":this.username,"password":this.password,"phonenum":this.phonenum,"phonepwd":this.phonepwd},{headers:this.headers}).subscribe((data)=>{
        console.log(data);
        if(data['code'] == 2){
          this.alert('用户名已存在');
        }
        else if(data['code'] == 1){
          this.alert('发生了一个错误，请重试');
        }
        else if(data['code'] == 0){
          this.alert('注册成功');
        }
      })
    }
  }
  
  // 错误弹窗
  alert(message){
    const alert = this.alertCtrl.create({
      title: '错误',
      subTitle: message,
      buttons: ['好']
    });
    alert.present();
  }
  
  
  ionViewDidLoad() {
    console.log("ionViewDidLoad SignupPage");
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map(key => {
        elements[key].style.display = "none";
      });
    }
  }
  ionViewWillLeave() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map(key => {
        elements[key].style.display = "flex";
      });
    }
  }
}
