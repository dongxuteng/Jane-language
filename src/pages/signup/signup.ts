import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import $ from "jquery";

@IonicPage()
@Component({
  selector: "page-signup",
  templateUrl: "signup.html"
})
export class SignupPage {

  username: string;
  phonenum: number;
  phonepwd: number;
  password: string;
  repassword: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

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
    if(this.username != undefined && this.password == this.repassword){
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
            alert("注册成功！");
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
