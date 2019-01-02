import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { IonicPage, NavController, NavParams,ActionSheetController, AlertController } from 'ionic-angular';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import {ImagePicker, ImagePickerOptions} from "@ionic-native/image-picker";
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
  img;
  arr;
  name;
  username;
  txt;
  title;
  content;
  fabuDate=new Date(+new Date() + 8 * 3600 * 1000).toISOString().slice(0,10)+" "+new Date(+new Date() + 8 * 3600 * 1000).toISOString().slice(11,19);
  localCityName: string;
  headers = new HttpHeaders({ 'Content-Type':'application/x-www-form-urlencoded'});
  constructor(public navCtrl: NavController, public http: HttpClient,public navParams: NavParams,public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController, public imagePicker: ImagePicker, public camera: Camera) {
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
  alert(){
    const alert = this.alertCtrl.create({
      title: '提示',
      subTitle: '发布成功！',
      buttons: ['OK']
    });
    alert.present(); 
  }
  fabu(){
    this.username = window.localStorage.getItem('username');
    console.log(this.username);
    // console.log(this.title);
    // console.log(this.txt);
    // console.log(this.fabuDate);
    // console.log(this.content);
    this.http.post('/api/home/fabu', {"username":this.username,"title":this.title,"sort":this.txt,"content":this.content,"date":this.fabuDate},{headers:this.headers}).subscribe((data)=>{
      console.log("1",data[0]);
      if(data['code'] === 1){
        console.log("2",data['message']);
      }else{
        this.arr=data;
        // this.name=data[0].name;
        console.log("3",this.arr);
        this.alert();
      }
      
    })
    console.log(this.arr);
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
  switchType() {
    console.log(this.txt);
  }
shangchuan(){
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
  //返回主页
  fanhui() {
    this.navCtrl.pop();
  }
}

  

