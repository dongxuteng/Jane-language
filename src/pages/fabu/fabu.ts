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
  Uid;
  i=0;
  username;
  txt;
  title;
  star1=0;
  comments=0;
  flag:string='true';
  content;
  imgs = "/imgs/fj3.jpg";
  cityname='石家庄';
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
    this.Uid = window.localStorage.getItem('userId');
    this.name = this.Uid + "_" + (++this.i) + ".jpg";
  }
  alert(msg){
    const alert = this.alertCtrl.create({
      title: '提示',
      subTitle: msg,
      buttons: [{
        text:'确定',
        handler:()=>{
          this.navCtrl.pop();
        }
      }]
    });
    alert.present(); 
  }

  save(){
    this.username = window.localStorage.getItem('username');
    this.Uid = window.localStorage.getItem('userId');
    console.log(this.username);
    this.http.post('/api/home/save',{"Uid":this.Uid,"title":this.title,"content":this.content,"date":this.fabuDate,'imgs':this.imgs}).subscribe((data)=>{
      console.log(2);
      if(data){
        this.alert('保存成功');
      }
      
    })
  }

  fabu(){
    this.username = window.localStorage.getItem('username');
    this.Uid = window.localStorage.getItem('userId');
    console.log(this.username);
    console.log(this.Uid);
    this.http.post('/api/home/fabu', {"username":this.username,"title":this.title,"sort":this.txt,"content":this.content,"date":this.fabuDate,"Uid":this.Uid,'img':this.imgs,"star1":this.star1,"comments":this.comments,"flag":this.flag},{headers:this.headers}).subscribe((data)=>{
      console.log("1",data[0]);
      if(data['code'] === 1){
        console.log("2",data['message']);
      }else{
        this.arr=data;
        // this.name=data[0].name;
        console.log("3",this.arr);
        this.alert('发布成功');
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
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: 2
  };

  this.camera.getPicture(options).then((image) => {
    // 获取成功
    let base64Image = 'data:image/jpeg;base64,' + image;
    console.log(base64Image);
    this.http.post('/api/home/tupian',{"images":image,"name":this.name}).subscribe(data=>{});
    this.imgs=base64Image;
    }, (err) => {
      console.log('获取图片失败');
      console.log(err);
    });
}


chooseFromAlbum() {
  const options: ImagePickerOptions = {
    maximumImagesCount: 1,
    width: 200,
    height: 200,
    quality : 100 
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

//   for (var i = 0; i < results.length; i++) {  
//     console.log('Image URI: ' + results[i]);  
//     // 保存图片到html控件  
//     var imgUrl = "<img src=" +results[i] +" width=\"60px\" height=\"60px\">  ";  
//     this.data=this.data+imgUrl;  
//     // 转64字节  
//     this.base64.encodeFile(results[i]).then((base64File: string) => {  
//     this.imageBase64.push(base64File);  
//     }, (err) => {  
//       console.log(err);  
//     });  
// }  
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

  

