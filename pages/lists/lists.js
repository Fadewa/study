// pages/lists/lists.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [],
    indicatorDots: true,
    autoplay: true,
    autoplay2: false,
    interval: 5000,
    duration: 1000,
    //课程
    lists: ["全部", "语文", "数学", "英语", "物理", "化学", "历史", "生物", "政治", "地理"],
    all: ["公开课", "视频课", "直播课"],
    activeIndex: 0,
    onIndex:0,
    teacher:[],
    list1: ["小学", "初中", "高中", "出国", "实用英语", "职场技能", "艺术体育", "丽人生活", "家庭教育", "少儿英语"]
  },
  //跳转详情页
  todetails: function (e) {
    var title = e.currentTarget.dataset.title
    wx.navigateTo({
      url: '/pages/courseCategory/live/details?title=' + title,
    })
  },
  tabClick:function(e){
    this.setData({
      activeIndex:e.currentTarget.dataset.nummber
    })
  },
  click:function(e){
    this.setData({
      onIndex: e.currentTarget.dataset.count
    })
  },
  //跳转详情页
  todetails: function (e) {
    var title = e.currentTarget.dataset.title
    wx.navigateTo({
      url: '/pages/courseCategory/live/details?title=' + title,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id
    this.setData({
      items: app.globalData.teacher.slice(0, 5),
      teacher: app.globalData.teacher,
    })
    for(var i = 0;i<this.data.list1.length;i++){
      if(i==id){
        wx.setNavigationBarTitle({
          title: this.data.list1[i] 
        })
      }
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