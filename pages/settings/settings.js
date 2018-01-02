// pages/settings/settings.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    storage:''
  },
  //修改密码
  modify:function(){
    wx.navigateTo({
      url: '/pages/settings/modify/modify',
    })
  },
  //清除缓存
  clearStorage:function(){
    wx.showLoading({
      title: '清理中...',
    })
    wx.clearStorage({
      success:function(){
        wx.hideLoading()
        wx.showToast({
          title: '清理成功',
        })
      }
    })
  },
  //关于我们
  about:function(){
    wx.navigateTo({
      url: '',
    })
  },
  makecall:function(){
    wx.makePhoneCall({
      phoneNumber: '123456',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    // 获取缓存大小
    wx.getStorageInfo({
      success: function (res) {
        that.setData({
          storage: res.currentSize
        })
      },
    })
    wx.getStorage({
      key: 'password',
      success: function (res) {
        that.setData({
          show: true
        })
      },
    })
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