// pages/nav/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search_items:[
      { something: '老师', color:'#ff6d00'},
      { something: '机构', color: ''},
      { something: '直播课', color: ''},
      { something: '视频课', color: ''},
      { something: '1v1', color: '' }
    ],
    smth:'老师',
    hotitems:[{title:'高中'},
      { title: '初中' },
      { title: '高中物理' },
      { title: '钢琴' },
      { title: '英语' },
      { title: '小学' },
      { title: '瑜伽' },
      { title: '高中数学' },
      { title: '舞蹈' }],
    historyitems:[],
    showhis:true,
    x:[]
  },
  //回到主页
  toindex:function(){
    wx.redirectTo({
      url: '../../index/index',
    })
  },
  choose_type:function(e){
    var aa=e.currentTarget.dataset.num
    var search_items = [
      { something: '老师', color:''},
      { something: '机构', color: ''},
      { something: '直播课', color: ''},
      { something: '视频课', color: ''},
      { something: '1v1', color: '' }
    ]
    //console.log(aa)
    for (var i = 0; i < this.data.search_items.length;i++){
      if(i==aa){
        var b=this.data.search_items
        search_items[i].color ="#ff6d00"
        this.setData({
          search_items: search_items,
          smth: b[i].something
        })
      }
    }
  },
  //缓存搜索记录
  storage:function(e){
    var aa = e.currentTarget.dataset.hotlink
    var diff=false
    //console.log(aa)
    for (var i = 0; i < this.data.hotitems.length;i++){
      if (i == aa){
        if (this.data.x.length==0){
          this.data.x.push(this.data.hotitems[i])
        }else{
          for (var a = 0; a < this.data.x.length;a++){
            if (this.data.x[a].title == this.data.hotitems[i].title){
                diff=true
            }
          }
          if(!diff){
            this.data.x.push(this.data.hotitems[i])
          }
        }
      }
    }
    wx.setStorage({
      key: "hot",
      data: this.data.x
    })
  },
  //清除缓存记录
  clearstorage:function(){
    wx.removeStorage({
      key: 'hot',
      success: function (res) {
        wx.redirectTo({
          url: '../../nav/search/search',
        })
      }
    })
  },
  //输入框获取焦点
  searchFocus:function(){
    wx.navigateTo({
      url: '../../nav/search/search_detail/search_detail',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var this_=this
    var historyitems = this.data.historyitems
    //获取缓存
    wx.getStorage({
      key: 'hot',
      success: function (res) {
        //console.log(res.data)
        historyitems = res.data
        //console.log(historyitems)
        this_.setData({
          historyitems: historyitems,
          x: historyitems
        })
        if (historyitems != []) {
          this_.setData({
            showhis: false,
          })
        }
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