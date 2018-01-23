//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    wxSearchData:'',
    searchData:'',
    hisData:[],
    search_items: [
      { something: '老师', color: '#ff6d00' },
      { something: '机构', color: '' },
      { something: '直播课', color: '' },
      { something: '视频课', color: '' },
      { something: '1v1', color: '' }
    ],
    smth: '老师',
    inputValue: '',
    isclick:-1,
    hasarrow:true,
    isSubject:false,
    ishover:0,
    types:['在线授课','全部科目','全部区域','筛选'],
    subject: [
      [],
      [{ "全部": "" }, { "幼小": [{ "学前教育": ["全部", "早教", "幼儿园", "幼儿园"] }, { "小学": ["全部", "早教", "幼儿园"] }, { "小升初": ["全部", "早教", "幼儿园"] }, { "幼升小": ["全部", "早教", "幼儿园"] },] }, { "初中": "" }, { "高中": "" }, { "大学": "" }, { "艺术": "" }, { "生活": "" }, { "体育": "" }, { "出国": "" }],
      [{ "全部区域": "全部区域" }, { "沧浪区": "全部沧浪区" }, { "金阊区": "全部金阊区" }, { "平江区": "全部平江区" }, { "虎丘区": "全部虎丘区" }, { "吴中区": "全部吴中区" }, { "相城区": "全部相城区" }, { "常熟区": "全部常熟区" }, { "张家港市": "全部张家港市" }, { "吴江区": "全部吴江区" }, { "太仓市": "全部太仓市" }, { "昆山市": "全部昆山市" }],
      []
      ],
    searchdata:[],
    classic:'',
    eiji:[]
  },
  toindex: function () {
    wx.navigateBack()
  },
  //课程显示
  toon:function(e){
    var x = []
    var y = []
    var id = e.currentTarget.dataset.id
    var subject = this.data.subject
    var isclick = this.data.isclick
    for (var i = 0; i < subject[isclick].length;i++){
      if(i==id){
        this.setData({
          ishover:id
        })
      }
    }
    if (this.data.isclick != 4 && this.data.isclick != -1){
      for (var i = 0; i < subject[isclick].length; i++) {
        for (var keys in subject[isclick][i]) {
          console.log(subject[isclick][id])
          if(id==i){
            var erji = subject[isclick][id][keys]
            //课程具体的分类
            for (var b = 0; b < erji.length;b++){
              for (var key in erji[b]){
               console.log(key)
               y.push(key)
              }
            }
          }
          x.push(subject[isclick][i][keys])
        }
      }
      for (var a = 0; a < x.length; a++) {
        if (id == a) {
          this.setData({
            classic: x[a]
          })
        }
      }
      this.setData({
        erji: y
      })
    }
    
  },
  //模态框的控制按钮
  open_btn:function(){
    this.setData({
      isclick: 4,
      hasarrow: true
    })
  },
  //选择课程种类
  _type: function (e) {
    var x = []
    var id = e.currentTarget.dataset.index
    for (var i = 0; i < this.data.subject[id].length; i++) {
      for (var key in this.data.subject[id][i]) {
        x.push(key)
      }
    }
    this.setData({
      searchdata:x
    })
    for (var i = 0; i < this.data.types.length; i++) {
      if (i == id) {
        if (this.data.isclick != i){
          this.setData({
            isclick: i,
            hasarrow:false
          })
         }else{
          this.setData({
            isclick: 4,
            hasarrow: true
          })
         }
      }
    }
  },
  //选择
  choose_type: function (e) {
    var aa = e.currentTarget.dataset.num
    var search_items = [
      { something: '老师', color: '' },
      { something: '机构', color: '' },
      { something: '直播课', color: '' },
      { something: '视频课', color: '' },
      { something: '1v1', color: '' }
    ]
    //console.log(aa)
    for (var i = 0; i < this.data.search_items.length; i++) {
      if (i == aa) {
        var b = this.data.search_items
        search_items[i].color = "#ff6d00"
        this.setData({
          search_items: search_items,
          smth: b[i].something
        })
      }
    }
  },
  //搜索框输入监听
  wxSearchInput:function(e){
    this.setData({
      inputValue: e.detail.value
    })
  },
  //搜索框获取焦点
  wxSerchFocus:function(){

  },
  //搜索框失去焦点
  wxSearchBlur:function(){

  },
  //搜索时
  wxSearchFn:function(e){
    var value = e.detail.value
    var data=[];
    var localStorageValue = [];
    var inputValue = new RegExp(this.data.inputValue)
    
    for (var i = 0; i < this.data.wxSearchData.length;i++){
      var aa = this.data.wxSearchData[i]
      var searchData = aa.teacher + aa.title + aa.reg_number + 
                        aa.original_price + aa.now_price + aa.class_num + 
                        aa.banner + aa.start_time + aa.end_time;
      if (inputValue.test(searchData)){
        data.push(aa)
      }
    }
    app.globalData.teacher = data
    this.setData({
      searchData:data
    })
    this.data.hisData.push(value)
      wx.setStorage({
        key: 'hisData',
        data: {
          hisData: this.data.hisData
        }
      })
  },
  //跳转搜索到的详情界面
  todetail:function(e){
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/courseCategory/live/details?title=' + id,
    })
  },
  onLoad: function (optins) {
    var that = this
    wx.getStorage({
      key: 'hisData',
      success: function(res) {
        that.data.hisData=res.data.hisData
      }
    })
    wx.request({
      url: 'https://eaglefly.ltd/zxxx/index.php?s=/w16/Demotest/Demotest/swiper122',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          wxSearchData : res.data
        })
        wx.setStorage({
          key: 'wxSearchData',
          data: {
            wxSearchData: that.data.wxSearchData
          }
        })
      }
    })
  }
})