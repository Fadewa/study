const app=getApp();
var navs = require('../JS/navs');
var url = "https://app.lovejia.net/zxxx/index.php?s=/w16/Demotest/Demotest/swiper123";
var page = 0;
// 请求数据
var loadMore = function (that, pages) {
  that.setData({
    hidden: false
  });
  wx.request({
    url: url,
    data: {
      page: pages,
    },
    success: function (res) {
      var list = that.data.list;
      //加载完全部课程后
      if (res.data == null) {
        wx.showToast({
          title: '已经是全部课程'
        })
        that.setData({
          hidden: true,
          iscontinue: false
        });
      } else {
        //展示每6个一次添加
        for (var i = 0; i < res.data.length; i++) {
          list.push(res.data[i]);
        }
        that.setData({
          list: list
        });
        page++;
        that.setData({
          hidden: true
        });
      }

    }
  });
}
Page({
  /**
   * 页面的初始数据
   */
  tostudy: function () {
    navs.navs.tostudy()
  },
  toteacher: function () {
    navs.navs.toteacher()
  },
  toinfo: function () {
    navs.navs.toinfo()
  },
  tome: function () {
    navs.navs.tome()
  },
  //跳转搜索页面
  tosearch:function(){
    wx.redirectTo({
      url: '../nav/search/search',
    })
  },
  //跳转来师1v1
  toteacher:function(){
    wx.redirectTo({
      url: '../nav/teacher/teacher',
    })
  },
  data: {
    hidden: true,
    list: [],
    scrollTop: 0,
    scrollHeight: 0,
    iscontinue: true,
    x:0,
    y:6,
    items:[],
    items_recommand:[],
    items_public:[],
    indicatorDots: true,
    autoplay: true,
    autoplay2: false,
    interval: 5000,
    duration: 1000,
    //导航部分
    navitems:[{
      classs:'shu',
      types:'小学',
      color:'#fd5a55'
    }, {
      classs: 'chuzhong',
      types: '初中',
      color:'#65b4f6'
      },{
        classs: 'gaozhong',
        types: '高中',
        color:'#ff5353'
      },
      {
        classs: 'gaozhong',
        types: '高中',
        color: '#ff5353'
      },
      {
        classs: 'gaozhong',
        types: '高中',
        color: '#ff5353'
      },
      {
        classs: 'gaozhong',
        types: '高中',
        color: '#ff5353'
      },
      {
        classs: 'gaozhong',
        types: '高中',
        color: '#ff5353'
      },
      {
        classs: 'gaozhong',
        types: '高中',
        color: '#ff5353'
      },
      {
        classs: 'gaozhong',
        types: '高中',
        color: '#ff5353'
      },
      {
        classs: 'gaozhong',
        types: '高中',
        color: '#ff5353'
      },]
  },
  //跳转详情页
  todetails:function(e){
    var title = e.currentTarget.dataset.title
    console.log(title)
    wx.navigateTo({
      url: '/pages/details/details?title=' + title,
    })
  },
  //换一批
  changeContent:function(){
    var content = app.globalData.teacher
    console.log(content)
    var x = this.data.x + 6
    var y = this.data.y + 6
    if(y>(content.length+5)){
      x=0;
      y=6
    }
    this.setData({
      x: x,
      y: y,
      items_public: content.slice(x,y)
    })
  },
  //页面滑动到底部
  bindDownLoad: function () {
    var that = this;
    page += 6
    if (this.data.iscontinue) {
      loadMore(that, page);
      console.log("lower");
    }
  },
  scroll: function (event) {
    //该方法绑定了页面滚动时的事件，我这里记录了当前的position.y的值,为了请求数据之后把页面定位到这里来。
    this.setData({
      scrollTop: event.detail.scrollTop
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
//这里要注意，微信的scroll-view必须要设置高度才能监听滚动事件，所以，需要在页面的onLoad事件中给scroll-view的高度赋值
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          scrollHeight: res.windowHeight
        })
      }
    })
    loadMore(that, 0);
    wx.request({
      url: 'https://app.lovejia.net/zxxx/index.php?s=/w16/Demotest/Demotest/swiper122',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        app.globalData.teacher = res.data
        that.setData({
          items: res.data.slice(0, 5),
          items_public: res.data.slice(0, 6)
        })

      }
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