const app=getApp();
var navs = require('../JS/navs');
var url = "https://eaglefly.ltd/zxxx/index.php?s=/w16/Demotest/Demotest/swiper123";
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
        that.setData({
          hidden: true,
          iscontinue: false,
          more:true
        });
      } else {
        //展示每6个一次添加
        for (var i = 0; i < res.data.length; i++) {
          list.push(res.data[i]);
        }
        that.setData({
          list: list
        });
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
    wx.navigateTo({
      url: '/pages/nav/search/search_detail/search_detail',
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
    goTop_show: false,
    scrollTop: 0,
    scrollHeight: 0,
    iscontinue: true,
    more:false,
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
        classs: 'feiji',
        types: '出国',
        color: '#66b5f7'
      },
      {
        classs: 'shiyongyingyu',
        types: '实用英语',
        color: '#ff9000'
      },
      {
        classs: 'weibiaoti-1',
        types: '职场技能',
        color: '#66b5f7'
      },
      {
        classs: 'yishu',
        types: '艺术体育',
        color: '#ffb74e'
      },
      {
        classs: 'liren',
        types: '丽人生活',
        color: '#ff6d00'
      },
      {
        classs: 'weibiaoti-',
        types: '家庭教育',
        color: '#ff8e01'
      },
      {
        classs: 'yingyu',
        types: '少儿英语',
        color: '#ff574f'
      },]
  },
  navTo:function(e){
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/lists/lists?id=' + id,
    })
  },
  //跳转详情页
  todetails:function(e){
    var title = e.currentTarget.dataset.title
    wx.navigateTo({
      url: '/pages/courseCategory/live/details?title=' + title,
    })
  },
  //换一批
  changeContent:function(){
    var content = app.globalData.teacher
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
  bindDownLoad: function (e) {
    var that = this;
    page += 6
    if (this.data.iscontinue) {
      loadMore(that, page);
    }
  },
  scroll: function (e) {
  //该方法绑定了页面滚动时的事件，我这里记录了当前的position.y的值,为了请求数据之后把页面定位到这里来。
    this.setData({
      scrollTop: e.detail.scrollTop
    });
    if (e.detail.scrollTop > 1) {
      this.setData({
        goTop_show: true
      });
    } else {
      this.setData({
        goTop_show: false
      });
    }
  },
  goTopFun: function (e) {
    //发现设置scroll-top值不能和上一次的值一样，否则无效，所以这里加了个判断
    var _top = this.data.scrollTop;
    console.log("距离顶部：" + _top)
    if (_top == 1) {
      _top = 0;
    } else {
      _top = 1;
    }
    this.setData({
      scrollTop: _top
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
      url: 'https://eaglefly.ltd/zxxx/index.php?s=/w16/Demotest/Demotest/swiper122',
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