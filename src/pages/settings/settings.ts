import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController,ActionSheetController ,NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { HttpClient } from '@angular/common/http';
import {ImagePicker, ImagePickerOptions} from "@ionic-native/image-picker";
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  sex:string;
  constellation:string;
  geqian:string;
  nicheng:string;
  myDate:string;
  Uid:number=1;
  username;
  arr;
  img;
  back(){
    this.navCtrl.pop();
  }
  constructor(public navCtrl: NavController,public http: HttpClient,public alertCtrl: AlertController ,public navParams: NavParams,private camera: Camera ,public actionSheetCtrl: ActionSheetController,public imagePicker: ImagePicker) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  // arr=[{
  //   id:'赫恩曼尼',
  //   sex:'Boy',
  //   p:'666 skr skr',
  //   constellation:'狮子座',
  //   birthday:'1997/8/21'
  // }]
  items = [
    '白羊座',
    '金牛座',
    '双子座',
    '巨蟹座',
    '狮子座',
    '处女座',
    '天秤座',
    '天蝎座',
    '射手座',
    '摩羯座',
    '水瓶座',
    '双鱼座',
  ];
  Alert(){
    const alert = this.alertCtrl.create({
      title: '提示',
      subTitle: "修改成功",
      buttons: ['OK']
    });
    alert.present();
  }
  change(){
    this.username=window.localStorage.getItem('username');
    this.http.post('api/change',{'username':this.username,"sex":this.sex,"constellation":this.constellation,"geqian":this.geqian,"nicheng":this.nicheng,"myDate":this.myDate}).subscribe((data)=>{
      
      this.arr = data;
      this.Alert();
    });
    console.log(1);
  } 
  touxiang(){
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [{
        text: '拍照',
        role: 'takePhoto',
        handler: () => {
          this.takePhoto();
        }
      }, {
        text: '从相册选择',
        role: 'chooseFromAlbum',
        handler: () => {
          this.chooseFromAlbum();
        }
      }, {
        text: '取消',
        role: 'cancel',
        handler: () => {
          console.log("cancel");
        }
      }]
    });
  
    actionSheet.present().then(value => {
      return value;
    });
  }
  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      allowEdit: true,
      targetWidth: 200,
      targetHeight: 200,
      saveToPhotoAlbum: true,
    };
  
    this.camera.getPicture(options).then(image => {
      console.log('Image URI: ' + image);
      this.img = image.slice(7);
    }, error => {
      console.log('Error: ' + error);
    });
  }
  
  chooseFromAlbum() {
    const options: ImagePickerOptions = {
      maximumImagesCount: 1,
      width: 200,
      height: 200
    };
    this.imagePicker.getPictures(options).then(images => {
      if (images.length > 1) {
        this.presentAlert();
      } else if (images.length === 1) {
        console.log('Image URI: ' + images[0]);
        this.img = images[0].slice(7);
      }
    }, error => {
      console.log('Error: ' + error);
    });
  }
  
  presentAlert() {
    let alert = this.alertCtrl.create({title: "上传失败", message: "只能选择一张图片作为头像哦", buttons: ["确定"]});
    alert.present().then(value => {
      return value;
    });
  
  
}

  
  
  ionViewDidEnter(){
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
       Object.keys(elements).map((key) => {
          elements[key].style.display = 'none';
         });
       }   
    // this.http.get('/api/setting').subscribe((data)=>{
    //   this.arr=data[0];
    // })
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
