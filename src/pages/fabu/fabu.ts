import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http'
/**
 * Generated class for the FabuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var BMap;
@IonicPage()
@Component({
  selector: 'page-fabu',
  templateUrl: 'fabu.html',
})
export class FabuPage {
  localCityName: string;
  arr = {
    name: '赫恩曼尼'
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera) {
  }


  ionViewDidLoad() {

    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'none';
      });
    }
    var myCity = new BMap.LocalCity();
    myCity.get(function(result) {
      var cityName = result.name;
      localStorage.setItem('currentCity', cityName);
      return cityName;
    });

    //延迟500毫秒取存储在localStorage中的 cityName
    setTimeout(() => {
      this.localCityName = localStorage.getItem('currentCity');
    }, 500);
  }

  ionViewDidEnter() {
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
shangchuan(){
    // 设置选项
    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
  }
  
  // 获取图片
    this.camera.getPicture(options).then((imageData) => {
  // 获取成功
    let base64Image = 'data:image/jpeg;base64,' + imageData;
  
    },(err) => {
    console.log('获取图片失败');
    });
}

  //返回主页
  return() {
    this.navCtrl.pop();
  }
}
