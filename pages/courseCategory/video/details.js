// pages/courseCategory/video/details.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
const app=getApp();

function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}


Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '',
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }],
    tabs: ["课程详情", "课程目录", "课程评价"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    stars:[
      { src: "../../image/star.png" },
      { src: "../../image/star.png" },
      { src: "../../image/star.png" },
      { src: "../../image/star.png" },
      { src: "../../image/star.png" },
      ],
    comments:[
      {
        src:"../../image/t4.jpg",
        userName:"匿名用户",
        comment:"老师很给力，希望能多学习你的一些课程",
        time:"2017-05-11 01:47"
      },{ 
        src: "../../image/t4.jpg",
        userName: "1234656", 
        comment: "老师很给力，希望能多学习你的一些课程",
        time:"2017-05-11 01:47"
     },{ 
        src: "../../image/t4.jpg", 
        userName: "2136547890", 
        comment: "老师很给力，希望能多学习你的一些课程", 
        time: "2017-05-11 01:47"
      },
    ]
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  bindInputBlur: function (e) {
    this.inputValue = e.detail.value
  },
  bindButtonTap: function () {
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success: function (res) {
        console.log(1)
        that.setData({
          src: res.tempFilePath
        })
      },fail:function(){
        console.log("获取失败")
      }
    })
  },
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
    wx.showLoading({
      title: '加载中',
    })
    var title = options.title
    for (var i = 0; i < app.globalData.teacher.length; i++) {
      if (title == app.globalData.teacher[i].id) {
        wx.setNavigationBarTitle({
          title: app.globalData.teacher[i].title,
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
    this.videoContext = wx.createVideoContext('myVideo')
  },
  inputValue: '',
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