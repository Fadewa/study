// pages/helper/helper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  formSubmit: function (e) {
    var mobile = e.detail.value.mobile
    var advice = e.detail.value.advice
    
    if (mobile!='' && advice!=''){
      wx.showLoading({
        title: '提交中...',
      })
      wx.request({
        url: 'https://eaglefly.ltd/ZXXX/index.php?s=/w16/Demotest/Demotest/getAdvice',
        header: {
          'content-type': 'application/json' // 默认值
        },
        data:{
          mobile: e.detail.value.mobile,
          advice: e.detail.value.advice
        },
        success: function (res) {
          wx.hideLoading()
          wx.showToast({
            title: '提交成功',
          })
        }
      })
    }else{
      if (advice == ''){
        wx.showToast({
          title: '建议不能为空',
        })
      }
      if (mobile == '') {
        wx.showToast({
          title: '手机号不能为空',
        })
      }
      if (advice == '' && mobile == '') {
        wx.showToast({
          title: '输入不能为空',
        })
      }
    }
  },
  //电话
  makecall:function(){
    wx.makePhoneCall({
      phoneNumber: '123456',
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