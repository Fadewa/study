// pages/nav/study/study.js

var date = require('../../JS/date.js');
var navs = require('../../JS/navs');


Page({

  /**
   * 页面的初始数据
   */
  toonline: function(){
    navs.navs.toonline()
  },
  toteacher: function(){
    navs.navs.toteacher()
  },
  toinfo: function(){
    navs.navs.toinfo()
  },
  tome: function(){
    navs.navs.tome()
  },
  data: {
    subject:true,
    table:false,
    over:false,
    sub_1:true,
    sub_2: false,
    sub_3: false,
    sub_4: false,
    summary:[],
    summary_1:[
      {
        teacher_photo:'../../image/t3.jpg',
        teacher_name: 'Jordan',
        title: '身体的智慧',
        lesson: '2',
        duration: '20:00-20:45',
      },
      {
        teacher_photo: '../../image/t5.jpg',
        teacher_name: 'Jordan',
        title: '身体的智慧',
        lesson: '2',
        duration: '20:00-20:45',
      }
    ],
    summary_2: [
      {
        teacher_photo: '../../image/t4.jpg',
        teacher_name: 'Jordan',
        title: '身体的智慧',
        lesson: '2',
        duration: '20:00-20:45',
      },
      {
        teacher_photo: '../../image/t2.jpg',
        teacher_name: 'Jordan',
        title: '身体的智慧',
        lesson: '2',
        duration: '20:00-20:45',
      }
    ],
    summary_3: [
      {
        teacher_photo: '../../image/t1.jpg',
        teacher_name: 'Jordan',
        title: '身体的智慧',
        lesson: '2',
        duration: '20:00-20:45',
      }
    ],
    summary_4: [
      {
        teacher_photo: '../../image/t5.jpg',
        teacher_name: 'Jordan',
        title: '身体的智慧',
        lesson: '2',
        duration: '20:00-20:45',
      }
    ],
    summary_over:[],
    summary_over_1: [
      {
        teacher_photo: '../../image/t1.jpg',
        teacher_name: 'Jordan',
        title: '身体的智慧',
        lesson: '2',
        duration: '20:00-20:45',
      },
      {
        teacher_photo: '../../image/t2.jpg',
        teacher_name: 'Jordan',
        title: '身体的智慧',
        lesson: '2',
        duration: '20:00-20:45',
      }],
    summary_over_2: [
      {
        teacher_photo: '../../image/t1.jpg',
        teacher_name: 'Jordan',
        title: '身体的智慧',
        lesson: '2',
        duration: '20:00-20:45',
      }],
    summary_over_3: [
      {
        teacher_photo: '../../image/t2.jpg',
        teacher_name: 'Jordan',
        title: '身体的智慧',
        lesson: '2',
        duration: '20:00-20:45',
      }],
    summary_over_4: [],
  },
  //
  //顶部开关控制
  subject:function(){
    this.setData({
      subject: true,
      table: false
    })
  },
  table: function () {
    console.log(date.date)
    this.setData({
      subject: false,
      table: true
    })
  },
  sub_1:function(){
    this.setData({
      sub_1: true,
      sub_2: false,
      sub_3: false,
      sub_4: false,
      summary: this.data.summary_1,
      summary_over: this.data.summary_over_1
    })
    console.log(this.data.summary_over.length)
    //完结课程的显示与消失
    if (this.data.summary_over.length == 0) {
      this.setData({
        over: false
      })
    } else { 
      this.setData({
        over: true
      })
    }
  },
  sub_2: function () {
    this.setData({
      sub_1: false,
      sub_2: true,
      sub_3: false,
      sub_4: false,
      summary: this.data.summary_2,
      summary_over: this.data.summary_over_2
    })
    //完结课程的显示与消失
    if (this.data.summary_over.length == 0) {
      this.setData({
        over: false
      })
    } else {
      this.setData({
        over: true
      })
    }
  },
  sub_3: function () {
    this.setData({
      sub_1: false,
      sub_2: false,
      sub_3: true,
      sub_4: false,
      summary: this.data.summary_3,
      summary_over: this.data.summary_over_3
    })
    //完结课程的显示与消失
    if (this.data.summary_over.length == 0) {
      this.setData({
        over: false
      })
    } else {
      this.setData({
        over: true
      })
    }
  },
  sub_4: function () {
    this.setData({
      sub_1: false,
      sub_2: false,
      sub_3: false,
      sub_4: true,
      summary: this.data.summary_4,
      summary_over: this.data.summary_over_4
    })
    //完结课程的显示与消失
    if (this.data.summary_over.length == 0) {
      this.setData({
        over: false
      })
    } else {
      this.setData({
        over: true
      })
    }
  },
  //课程表日期选择
  bindDateChange_s: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date_s: e.detail.value
    })
  },
  bindDateChange_e: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date_e: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      summary: this.data.summary_1,
      summary_over: this.data.summary_over_1,
      date_s: date.date,
      date_e: date.date
    })
    //完结课程的显示与消失
    if (this.data.summary_over.length != 0) {
      this.setData({
        over: true
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})