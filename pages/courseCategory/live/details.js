// pages/details/details.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    c:'',
    header:'',
    fix:false,
    teacher:[],
    subject_detail:[
      { subject: '课程详情', click: false},
      { subject: '课程安排', click: false},
      { subject: '课程评价', click: false},
    ],
    scrollTop: {
      scroll_top: 0,
      goTop_show: false
    },

    evaluation:[
      {
        avatar:'../../image/t2.jpg',
        content:'老师很认真，讲的也好，就是语速有点快了',
        name:'匿名用户',
        time:'2017-12-17'
      },
      {
        avatar: '../../image/t1.jpg',
        content: '老师很认真，讲的也好，就是语速有点快了',
        name: '小红',
        time: '2017-12-17'
      },
      {
        avatar: '../../image/t3.jpg',
        content: '老师很认真，讲的也好，就是语速有点快了',
        name: '李四',
        time: '2017-12-17'
      }
    ]
  },
  //咨询电话
  makecall:function(){
    wx.makePhoneCall({
      phoneNumber: '400-400-400',
    })
  },
  click: function (e) {
    var aa = e.currentTarget.dataset.detail;
    var c = this.data.c
    if (aa == 0) {
      this.setData({
        'scrollTop.scroll_top': 631 * c
      })
    } else if (aa == 1) {
      this.setData({
        'scrollTop.scroll_top': 4725 * c
      })
    } else {
      this.setData({
        'scrollTop.scroll_top': 5085 * c
      })
    }
    //console.log(aa);
    
  },
  //回到顶部
  scrollTopFun: function (e) {
    var c = this.data.c
    //触发gotop的显示条件
    if (e.detail.scrollTop > (141*c) ){  
      this.setData({
        'scrollTop.goTop_show': true
      });
      //console.log(this.data.scrollTop)
    } else {
      this.setData({
        'scrollTop.goTop_show': false
      });
    }
    if (e.detail.scrollTop > (553*c)) {
      this.setData({
        fix:true
      });
    }else{
      this.setData({
        fix: false
      });
    }
    if (e.detail.scrollTop < (4720 * c) && e.detail.scrollTop >= (630 * c)) {
      this.setData({
        'subject_detail[0].click': true,
        'subject_detail[1].click': false,
        'subject_detail[2].click': false,
      });
    } else if (e.detail.scrollTop >= (4720*c) && e.detail.scrollTop<(5080*c)){
      this.setData({
        'subject_detail[1].click': true,
        'subject_detail[0].click': false,
        'subject_detail[2].click': false,
      });
    } else if (e.detail.scrollTop >= (5080 * c)){
      this.setData({
        'subject_detail[2].click': true,
        'subject_detail[1].click': false,
        'subject_detail[0].click': false,
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var this_=this
    wx.getSystemInfo({
      success: function(res) {
        var c = res.windowWidth/750;
        this_.setData({
          c:c
        })
      },
    })
    //console.log(options)
    wx.showLoading({
      title: '加载中',
    })
    var title = options.title
    for (var i = 0; i < app.globalData.teacher.length; i++) {
      if (title == app.globalData.teacher[i].id) {
        wx.setNavigationBarTitle({
          title: app.globalData.teacher[i].title ,
        })
        this.setData({
          teacher: app.globalData.teacher[i],
        })
      }
    }
    
    wx.hideLoading()
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