import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import $ from 'jquery';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  @ViewChild('#username') username;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  // 点击注册触发
  goLogin(){
    console.log(this.username);
    $.ajax({
      type: 'post',
      url: 'http://localhost:8100/#/signup',
      data: {
        phonenumber: $('#phonenumber').val(),
        phonepwd: $('#phonepwd').val(),
        username: $('#username').val(),
        password: $('#password').val()
      },
      success: function(data){
        if(data.status == 1){
          alert('注册成功！');
        }
      }
    })
    this.navCtrl.pop();
  }

  ionViewDidEnter(){
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
