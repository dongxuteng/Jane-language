import { Component } from '@angular/core';
import { IonicPage, NavController,  NavParams,  App,  AlertController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
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
  Alert(data){
    const alert = this.alertCtrl.create({
      title: '错误',
      subTitle: data,
      buttons: ['OK']
    });
    alert.present();
  }
  // 登录验证,返回首页
  headers = new HttpHeaders({ 'Content-Type':'application/x-www-form-urlencoded' });
  alert(){
    const alert = this.alertCtrl.create({
      title: '错误',
      subTitle: '用户名或密码输入有误，请重新输入！',
      buttons: ['OK']
    });
    alert.present(); 
  }
  login() {
    // 用户名或密码不能为空
    if(this.username == undefined || this.username.length < 6){
      this.Alert('用户名需要大于6位');
    }
    else if(this.pwd == undefined || this.pwd.length < 6){
      this.Alert('密码需要大于6位');
    }
    // 输入用户名密码后,post发送请求
    else {
        this.http.post('/api/login',{"username":this.username,"password":this.pwd},{headers:this.headers}).subscribe((data)=>{
          // console.log(data);
          if( data['code'] == 1 ) {
            this.Alert(data['message']);
            console.log('用户名或者密码错误！')
          }
          else{
            if( data['code'] == 0 ){
              console.log('登陆成功');
              console.log(data);
              window.localStorage.setItem('username',data['result'].username);
              window.localStorage.setItem('password',data['result'].password);
              window.localStorage.setItem('userId',data['result'].Uid);
              console.log(window.localStorage.getItem('username'));
              this.app.getRootNavs()[0].setRoot(TabsPage);
              console.log(1);
              
            }
          }
        })
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
  Findpsw(){
    this.navCtrl.push('FidepswPage')
  }

}