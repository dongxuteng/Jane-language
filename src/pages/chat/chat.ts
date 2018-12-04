import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { FormControl, FormBuilder } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  toUser = {
    _id: '534b8e5aaa5e7afc1b23e69b',
    pic: '../assets/imgs/icon.png',
    //username: 'Venkman',
  };

  user = {
    _id: '534b8fb2aa5e7afc1b23e69c',
    pic: '../assets/imgs/logo.png',
    //username: 'Marty',
  };

  doneLoading = false;

  messages = [
    {
      _id: 1,
      date: new Date(),
      userId: this.user._id,
      //username: this.user.username,
      pic: this.user.pic,
      text: '哈喽，你好'
    },
    {
      _id: 2,
      date: new Date(),
      userId: this.toUser._id,
      //username: this.toUser.username,
      pic: this.toUser.pic,
      text: '你好'
    },
    {
      _id: 3,
      date: new Date(),
      userId: this.toUser._id,
      //username: this.toUser.username,
      pic: this.toUser.pic,
      text: '感谢这么可爱的你私信我'
    },
    {
      _id: 4,
      date: new Date(),
      userId: this.user._id,
      //username: this.user.username,
      pic: this.user.pic,
      text: '可不嘛'
    },
    {
      _id: 5,
      date: new Date(),
      userId: this.user._id,
      //username: this.user.username,
      pic: this.user.pic,
      text: '你真棒'
    },
    {
      _id: 6,
      date: new Date(),
      userId: this.toUser._id,
      //username: this.toUser.username,
      pic: this.toUser.pic,
      text: '谢谢'
    }
  ];
  
  @ViewChild(Content) content: Content;
  
  public messageForm: any;
  chatBox: any;
  
  constructor(public navParams: NavParams,
    public navCtrl: NavController,
    public formBuilder: FormBuilder) {
      this.messageForm = formBuilder.group({
      message: new FormControl('')
    });
    this.chatBox = '';
  }

  ionViewDidLoad() {
    let modelData: string = '用户名：' + this.navParams.get('chatId');
    console.log(modelData);
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
       Object.keys(elements).map((key) => {
          elements[key].style.display = 'none';
      });
    }   
  }
  ionViewDidEnter(){
  }
  
  // 发送消息
  send(message) {
    if (message && message !== '') {
      // this.messageService.sendMessage(chatId, message);
      
      const messageData =
      {
        toId: this.toUser._id,
        _id: 6,
        date: new Date(),
        userId: this.user._id,
        //username: this.User.username,
        pic: this.toUser.pic,
        text: message
        };

      this.messages.push(messageData);
      this.scrollToBottom();

      setTimeout(() => {
        const replyData =
          {
            toId: this.toUser._id,
            _id: 6,
            date: new Date(),
            userId: this.toUser._id,
            //username: this.toUser.username,
            pic: this.toUser.pic,
            text: 'Just a quick reply'
          };
        this.messages.push(replyData);
        this.scrollToBottom();
      }, 1000);
    }
    this.chatBox = '';
  }

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 100);
  }

  viewProfile(message: string){
    console.log(message);
  }
  pushInfoPage(){
    this.navCtrl.pop();
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