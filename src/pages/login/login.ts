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
import { HttpClient, HttpHeaders } from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string;
  pwd: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public alertCtrl: AlertController, public http: HttpClient) {}

  
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
  
  // 账号密码错误弹窗
  validateErr(){
    const alert = this.alertCtrl.create({
      title: '错误',
      subTitle: '用户名或密码错误',
      buttons:['好']
    });
    alert.present();
  }
  
  // 登录验证,返回首页
  headers = new HttpHeaders({ 'Content-Type':'application/x-www-form-urlencoded' });
  login() {
    if(this.username == undefined || this.pwd == undefined){
      const alert = this.alertCtrl.create({
        title: '错误',
        subTitle: '请输入用户名或密码',
        buttons: ['好']
      });
      alert.present();
    }
    else {
        this.http.post('/api/login',{"username":this.username,"password":this.pwd},{headers:this.headers}).subscribe((data)=>{
          if(!data[0]) {
            this.alert();
          }
          else{
            if(data[0].password == this.pwd ){
              console.log('登陆成功');
              this.app.getRootNav().setRoot(TabsPage);
            }else{
              this.alert();
            }
          }
        })
    }
  }

  alert(){
    const alert = this.alertCtrl.create({
      title: '错误',
      subTitle: '请输入正确的用户名和密码',
      buttons: ['好']
    });
    alert.present(); 
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