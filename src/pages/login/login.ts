import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  App,
  AlertController
} from 'ionic-angular';
import {
  TabsPage
} from '../tabs/tabs';
import $ from 'jquery'


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string;
  pwd: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'none';
      });
    }
  }

  goSignup() {
    this.navCtrl.push('SignupPage');
  }


  // 登录验证,返回首页
  login() {
    console.log(this.username);
    console.log(this.pwd);
    if(this.username == undefined || this.pwd == undefined){
      const alert = this.alertCtrl.create({
          title: '错误',
          subTitle: '请输入用户名或密码',
          buttons: ['好']
        });
        alert.present();
      }
    else if (this.pwd.length > 6 && this.username.length > 6) {
      $.ajax({
        type: 'post',
        url: 'http://localhost:8100/api/login',
        data: {
          username: this.username,
          password: this.pwd
        },
        success: function (data) {
          console.log('success');
          if (data.id == 6) {
            alert(data.status);
          } else if (data.id == 1) {
            console.log(data.status);
            alert(data.me);
          }
        },
        error: function(err) {
          console.error(err);
        }
      });
    }
        else {
          const alert = this.alertCtrl.create({
            title: '错误',
            subTitle: '请输入正确的用户名和密码',
            buttons: ['好']
          });
          alert.present(); 
        }
        this.app.getRootNav().setRoot(TabsPage);
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
  Findpsw(){
    this.navCtrl.push('FidepswPage')
  }

}