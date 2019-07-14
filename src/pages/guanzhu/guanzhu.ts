import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
/**
 * Generated class for the GuanzhuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guanzhu',
  templateUrl: 'guanzhu.html',
})
export class GuanzhuPage {
  tag;
  Uid;
  arr;
  pid=[];
  imgavatar=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
    this.Uid = window.localStorage.getItem('userId');
  }

  ionViewDidLoad() {
    this.http.post('/api/me/guanzhu',{'Uid':this.Uid}).subscribe((data)=>{
      console.log('aaaa',data);
      this.arr = data;
      this.arr.forEach(e => {
        this.imgavatar.push('../assets' + e.imgavatar);
        this.pid.push(e.pid);
      });
      
    })
    console.log('ionViewDidLoad GuanzhuPage');

  }

  function1(){
    this.navCtrl.pop();
  }
   show1(i){
    console.log(i);
    console.log(this.pid);
    console.log(this.pid[i]);
    
    var btn = document.getElementById('follow');
    if(this.tag == null){
      this.tag=this.arr[i].tag;
      console.log(this.tag);
      if(this.tag === "false"){
        btn.innerText = "关注";
        this.tag = "true";
        this.http.post('/api/neirong/quguan',{"pid":this.pid[i],"Uid":this.Uid}).subscribe((data)=>{
          console.log('取消关注',data);
          // this.arr[0] = data[0];
        })
      }else if(this.tag === "true"){
        btn.innerText = "取消关注";
        this.tag = "false";
        this.http.post('/api/neirong/guanzhu',{"Uid":this.Uid,"pid":this.pid[i],"tag":this.tag}).subscribe((data)=>{
          console.log('关注成功',data);
          // this.arr[0] = data[0];
        })
      }
    }
    else if(this.tag === "false"){
      btn.innerText = "关注";
      this.tag = "true";
      this.http.post('/api/neirong/quguan',{"pid":this.pid[i],"Uid":this.Uid}).subscribe((data)=>{
        console.log('取消关注',data);
        // this.arr[0] = data[0];
      })
    }else if(this.tag === "true"){
      btn.innerText = "取消关注";
      this.tag = "false";
      this.http.post('/api/neirong/guanzhu',{"Uid":this.Uid,"pid":this.pid[i],"tag":this.tag}).subscribe((data)=>{
        console.log('关注成功',data);
        // this.arr[0] = data[0];
      })
    }
  } 

}
