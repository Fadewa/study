// pages/nav/teacher/teacher.js
var footer = require('../../moban/footer/footer.js')
var navs = require('../../JS/navs');
Page({

  /**
   * 页面的初始数据
   */
  //跳转在线好课
  toonline: function () {
    navs.navs.toonline()
  },
  tostudy: function () {
    navs.navs.tostudy()
  },
  toinfo: function () {
    navs.navs.toinfo()
  },
  tome: function () {
    navs.navs.tome()
  },
  data: {
    forfree:[],
    promises:[
      {
        icon:'fuwuchengnuoicon',
        title:'师资承诺',
        content:'跟谁学所以老师均通过实名认证和教学水平认证，一线名师更有多项荣誉认证，保证老师高质量教学水平'
      },
      {
        icon: 'fuwuchengnuotubiao',
        title: '服务承诺',
        content: '跟谁学所以老师均通过实名认证和教学水平认证，一线名师更有多项荣誉认证，保证老师高质量教学水平'
      },
      {
        icon: 'llrefundmessageicon',
        title: '退款承诺',
        content: '跟谁学所以老师均通过实名认证和教学水平认证，一线名师更有多项荣誉认证，保证老师高质量教学水平'
      },
      {
        icon: 'pinpai',
        title: '品牌承诺',
        content: '跟谁学所以老师均通过实名认证和教学水平认证，一线名师更有多项荣誉认证，保证老师高质量教学水平'
      },
      ],
    //回到顶部
    scrollTop: {
      scroll_top: 0,
      mobile:false,
      goTop_show: false,
    }
  },
  scrollTopFun: function (e) {
    //console.log(e.detail.scrollTop);
    if (e.detail.scrollTop > 640) {//触发gotop的显示条件  
      this.setData({
        'scrollTop.goTop_show': true,
        'scrollTop.mobile':false
      });
      //console.log(this.data.scrollTop)
    } else {
      this.setData({
        'scrollTop.goTop_show': false,
        'scrollTop.mobile': true
      });
    }
  },
  goTopFun: function (e) {
    //发现设置scroll-top值不能和上一次的值一样，否则无效，所以这里加了个判断  
    var _top = this.data.scrollTop.scroll_top;
    if (_top == 1) {
      _top = 0;
    } else {
      _top = 1;
    }
    this.setData({
      'scrollTop.scroll_top': _top
    });
  },
  makecall:function(){
    wx.makePhoneCall({
      phoneNumber: '1234567890',
    })
  },
  //领取免费课程
  formSubmit:function(e){
    console.log(e.detail.value)
    var detail = e.detail.value
    if (detail.name == '' || detail.subject == ''||detail.mobile == ''){
      wx.showToast({
        title: '请完善您的信息',
        icon:'loading'
      })
    }else{
      wx.request({
        url: "https://eaglefly.ltd/zxxx/index.php?s=/w16/Demotest/Demotest/forfree",
        data:{
          mobile: detail.mobile,
          name: detail.name,
          subject: detail.subject
        },
        success:function(res){
          wx.showModal({
            title: '恭喜您成功领取免费课程',
            content: '【来师1v1】恭喜您成功预约价值200元免费试听课，您的专属顾问老师会尽快与您联系，请注意接听新的来电',
          })
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getStorage({
      key: 'userinfo',
      success: function(res) {
        var aa=res.data
        that.setData({
          'forfree.name':aa.realName,
          'forfree.mobile': aa.mobile
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