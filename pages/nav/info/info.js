// pages/nav/info/info.js
var navs = require('../../JS/navs');
Page({

  /**
   * 页面的初始数据
   */
  toonline: function () {
    navs.navs.toonline()
  },
  toteacher: function () {
    navs.navs.toteacher()
  },
  tostudy: function () {
    navs.navs.tostudy()
  },
  tome: function () {
    navs.navs.tome()
  },
  data: {
    messageitems:[
      {
        title:'身体的智慧：根基与顺位-01月09日',
        image:'../../image/t1.jpg',
        time:'12月09日',
        people:'郑晓慧',
        talk:'有没有资料可以下载的'
      },
      {
        title: '身体的智慧：根基与顺位-01月09日',
        image: '../../image/t2.jpg',
        time: '12月09日',
        people: '郑晓慧',
        talk: '有没有资料可以下载的'
      },
      {
        title: '身体的智慧：根基与顺位-01月09日',
        image: '../../image/t3.jpg',
        time: '12月09日',
        people: '郑晓慧',
        talk: '有没有资料可以下载的'
      },
      {
        title: '身体的智慧：根基与顺位-01月09日',
        image: '../../image/t4.jpg',
        time: '12月09日',
        people: '郑晓慧',
        talk: '有没有资料可以下载的'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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