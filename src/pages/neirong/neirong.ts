import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-neirong',
  templateUrl: 'neirong.html',
})
export class NeirongPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'none';
      });
    }
  }
  arr = [
    {
      title: '闯入者', name: '赫恩曼尼',
      msg: `她早该知道的，儿子有了女友，并且住在了一起，可还是自我麻痹，装傻充愣，在儿子的公寓赖了大半个月，看他心不在焉地陪自己。
      她壮起胆，编造种种理由去看他，其实为的是暂时躲避另一个男人，她还想亲口问问儿子，到底该怎么办。虽然她不确定他知道答案。
      从新西兰回国，躺在自家床上，孙淑兰才慢慢回忆起那些几乎不可见的细节。房间里似有似无的香水味，淡淡的，水果甜；卫生间洗手池旁边的柜子里，被落在洗漱用品中间的小耳坠；还有睡觉前频繁响起的短信提示音，儿子上撇的嘴角，不是普通朋友那么简单。她替自己的偷窥欲害臊，鼻根和喉咙口里涌上来的，却是酸，牙疼似的，隔了好些天，怎么都摆脱不掉。
      三年前的秋天，正是满城落叶的时节，家里院门口铺满卷皱的枯叶，踩上去酥酥软软。她送儿子到新西兰留学，看着儿子穿着松垮的黑风衣，耸耷肩膀，挎个双肩包，消失在人群，头也不回，孙淑兰劝自己：该来的总会来，孩子翅膀硬了是好事。回到家，一间空房，看电视都带点回声，她削好了苹果，捏在手里，看着它氧化成铁锈色。她拿起电话，拨通物业号码：院门口那儿叶子太多了，碍脚，什么时候来个人清扫一下？
      晚饭时间到了，她盯着钟表，心里盘算吃什么好。打开冰箱，里面都是儿子爱吃的菜，太多年了，她差不多快要忘记自己爱吃什么。跑到楼下的超市，买了颗小时候最爱吃的榨菜头，放到砧板上，用菜刀一片一片削开，橙红色的酱汁滴落。`,
      img: 'assets/imgs/2.jpg',
      tx: 'assets/imgs/icon.png',
      num: '50',
      date: '2018/11/11',
      likes: '999'
    }
  ]

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
