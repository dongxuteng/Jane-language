import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import $ from 'jquery';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  ionViewDidLoad() {
  }

  goSignup(){
    this.navCtrl.push('SignupPage');
  }
  
  // 返回首页
  login(){
    $.ajax({
      type: 'post',
      url: 'http://localhost:8100/#/login',
      data: {
        username: $('#username').val(),
        password: $('#password').val()
      },
      success: function(data){
        // 验证成功
        if(data.status == 1){
          alert(data.message);
          this.app.getRootNavs()[0].setRoot(TabsPage);
        }
      },
      error: function(){
        alert(404);
      }
    })

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
