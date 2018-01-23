// pages/login/login.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobile:'',
    password:'',
    nickName:'',
    avatarUrl:'',
    realName:'',
    sex:'',
    birthDate:'',
    homeLand:'',
    img_id:''
  },
  usernameInput:function(e){
    this.setData({
      mobile: e.detail.value
    })
    if (e.detail.value==''){
      wx.showToast({
        title: '手机号不能为空',
        icon:'loading'
      })
    }
  },
  passwordInput:function(e) {
    this.setData({
      password: e.detail.value
    })
    if (e.detail.value == '') {
      wx.showToast({
        title: '密码不能为空',
        icon:'loading'
      })
    }
  },
  loginBtnClick:function(){
    var this_ = this
    if (this.data.mobile != '' && this.data.password!=''){
      wx.request({
        url: 'https://eaglefly.ltd/zxxx/index.php?s=/w16/Demotest/Demotest/getpassword',
        data: {
          mobile: this_.data.mobile,
          password: this_.data.password
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          var aa = res.data
          if (aa) {
            wx.getUserInfo({
              success: function (res) {
                //登陆成功向后台请求个人信息
                wx.request({
                  url: 'https://eaglefly.ltd/zxxx/index.php?s=/w16/Demotest/Demotest/getUserinfo',
                  data: {
                    mobile: this_.data.mobile
                  },
                  header: {
                    'content-type': 'application/json' // 默认值
                  },
                  success: function (res) {
                    wx.setStorage({
                      key: 'userinfo',
                      data: {
                        mobile: res.data.mobile,
                        password: res.data.password,
                        nickName: res.data.nickName,
                        avatarUrl: res.data.avatarUrl,
                        realName: res.data.realName,
                        sex: res.data.sex,
                        birthDate: res.data.birthDate,
                        homeLand: res.data.homeLand
                      },
                    })
                    setTimeout(function () {
                      wx.navigateBack()
                      app.globalData.log_success = true
                    }, 1000)
                    wx.showToast({
                      title: '登陆成功',
                      icon: 'success',
                      duration: 1000,
                    })
                  }
                })
              },
              fail: function (res) {
                wx.showModal({
                  title: '请授权',
                  content: '再次授权否则无法登陆',
                  success: function (res) {
                    if (res.confirm) {
                      wx.openSetting()
                    } else if (res.cancel) {
                      wx.showModal({
                        title: '请授权',
                        content: '您将无法使用该小程序的部分功能，请授权后再次登陆',
                        success: function (res) {
                          if (res.confirm) {
                            wx.openSetting()
                          } else if (res.cancel) {
                            wx.navigateBack()
                          }
                        }
                      })
                    }
                  }
                })
              },
            })
          } else {
            wx.showModal({
              title: '登陆信息',
              content: '手机号或密码输入有误'
            })
          }
          wx.setStorage({
            key: 'password',
            data: {
              mobile: this_.data.mobile,
              password: this_.data.password
            },
          })
        },
        
      })
    }else{
      wx.showToast({
        title: '手机号密码不能为空',
      })
    }
    
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var this_ = this
    wx.getStorage({
      key: 'password',
      success: function(res) {
      this_.setData({
        mobile:res.data.mobile,
        password: res.data.password
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