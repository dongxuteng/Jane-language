import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  chatPage;
  info:string = '通知';
  chats = [{
    id: '001',
    imageUrl:"../assets/imgs/icon.png",
    title: 'Amy',
    lastMessage: '期待你的下一篇文章~',
    timestamp: new Date()
  },
    {
      id: '002',
      imageUrl:"../assets/imgs/icon.png",
      title: 'Tony',
      lastMessage: '你的文章写的太棒了！',
      timestamp: new Date()
    },
    {
      id: '003',
      imageUrl: "../assets/imgs/icon.png",
      title: 'Steve',
      lastMessage: '你好帅！',
      timestamp: new Date()
    }];
  hour:number;
  minute:number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chatPage = ChatPage;
    }

  // clickItem(item){
  //   console.log(item);
  // }
 //下拉刷新
 doRefresh(refresher) {//请求数据的请求方法可以写在这个函数里面
  console.log('Begin async operation', refresher);
  setTimeout(() => {
    console.log('刷新成功');
    refresher.complete();
  }, 2000);
}
  // ionViewDidLoad() {
  //   function checkTime(i){
  //       if (i<10) 
  //            {i="0" + i}
  //        return i
  //     }
  //   var d=new Date();
  //   this.hour =checkTime(d.getHours());
  //   this.minute = checkTime(d.getMinutes());
  //   return this.hour + this.minute;
  // }
  // viewMessages(chat) {
  //   this.navCtrl.push('ChatPage', {chatId: chat.id});
  // }
  pushChatPage(){
    console.log("代码方式跳转");
    //跳转到指定页面， 后面的集合是一个参数
    this.navCtrl.push(ChatPage);
  }

}