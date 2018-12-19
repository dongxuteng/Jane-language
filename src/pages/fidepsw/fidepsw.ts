import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import $ from "jquery";

/**
 * Generated class for the FidepswPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fidepsw',
  templateUrl: 'fidepsw.html',
})
export class FidepswPage {
  username: string;
  phonenum: number;
  phonepwd: number;
  password: string;
  repassword: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
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

  // 点击注册触发
  goLogin() {
    if(this.username == undefined || this.password == undefined){
      const alert = this.alertCtrl.create({
          title: '错误',
          subTitle: '请输入用户名或密码',
          buttons: ['好']
        });
        alert.present();
      }
    else if(this.username.length<6 || this.password.length<6){
      const alert = this.alertCtrl.create({
        title: '错误',
        subTitle: '用户名或密码长度小于6位',
        buttons: ['好']
        });
        alert.present();
      }
    else if(this.password != this.repassword){
      const alert = this.alertCtrl.create({
        title: '错误',
        subTitle: '两次密码不一致',
        buttons: ['好']
      });
      alert.present();
    }
    else{
      $.ajax({
        type: "post",
        url: "http://localhost:8100/api/signup",
        data: {
          phonenumber: this.phonenum,
          phonepwd: this.phonepwd,
          username: this.username,
          repassword: this.repassword
        },
        success: function(data) {
          if (data.status == 1) {
            console.log("重置成功！");
          }
        }
      });
    }
    this.navCtrl.pop();
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

