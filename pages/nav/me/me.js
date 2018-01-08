// pages/nav/me/me.js
var navs = require('../../JS/navs');
const app=getApp();
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
  toinfo: function () {
    navs.navs.toinfo()
  },
  tostudy: function () {
    navs.navs.tostudy()
  },
  login_in:function(){
    wx.navigateTo({
      url: '../../admin/login/login',
    })
  },
  user_info: function () {
    wx.navigateTo({
      url: '../../admin/userinfo/userinfo',
    })
  },
  //帮助页面
  help:function(){
    wx.navigateTo({
      url: '/pages/helper/helper',
    })
  },
  data: {
    name:'',
    imgUrl:'',
    show:true,
    mobile:'',
    img_id:''
  },
  tocurse:function(){
    wx.redirectTo({
      url: '/pages/nav/study/study',
    })
  },
  //设置
  settings:function(){
    wx.navigateTo({
      url: '/pages/settings/settings',
    })
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
    var this_ = this
    wx.getStorage({
      key: 'userinfo',
      success: function (res) {
        this_.setData({
          show: false,
          name: res.data.nickName,
          mobile: res.data.mobile,
          imgUrl: res.data.avatarUrl,

        })
      },
    })
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