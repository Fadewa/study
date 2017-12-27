// pages/admin/userinfo/userinfo.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:['男','女'],
    index:0,
    date: '1995-09-01',
    defaults:true,
    img_id:'',
    person:
    [
      { avatarUrl:'',sex:'',birthDate:''}
    ]
  },
  bindSexChange: function (e) {
    this.setData({
      'person.sex': this.data.array[e.detail.value]
    })
  },
  bindBirthChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      'person.birthDate': e.detail.value
    })
  },
  //上传图片
  chooseImg: function () {
    var that = this;
    wx.chooseImage({
      count: 1,// 默认最多上传9张
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: app.url + 'Api/Api/upload&PHPSESSID=' + wx.getStorageSync('PHPSESSID'),
          filePath: tempFilePaths[0],
          name: 'download',
          header: { "Content-Type": "multipart/form-data" },
          success: function (res) {
            var data = JSON.parse(res.data)
            wx.request({
              url: 'https://app.lovejia.net/zxxx/index.php?s=/w16/Demotest/Demotest/updateImg', 
              data: {
                id: data.id,
                mobile: that.data.person.mobile
              },
              header: {
                'content-type': 'application/json' // 默认值
              },
              success: function (res) {
                //console.log(res.data)
              }
            })

          },
          fail: function (res) {
            console.log('上传图片到服务器失败')
          },
          complete: function (res) {
            //console.log(res)
          }
        })
        that.setData({
          'person.avatarUrl': tempFilePaths,
          defaults:false
        })
        //存储在本地
        wx.setStorage({
          key: "img",
          data: {
            'person.avatarUrl': tempFilePaths
          }
        })
        that.sendPhotos(tempFilePaths)
      }
    })
  },
  //发图片发送给后端服务器
  sendPhotos: function (tempFilePaths) {
    var that = this
    if (tempFilePaths.length != 0) {
      
    }
  },
  //用户保存信息
  formSubmit: function (e) {
    //console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var that = this;
    var formData = e.detail.value;
    wx.request({
      url: 'https://app.lovejia.net/zxxx/index.php?s=/w16/Demotest/Demotest/saveinfo',
      data: {
        homeLand: formData.homeLand,
        birthDate: formData.birthDate,
        sex: formData.sex,
        mobile: formData.mobile,
        realName: formData.realName,
        nickName: formData.nickName
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        wx.navigateTo({
          url: '../login/login',
        })
      }
    })  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(app.globalData.userInfo)
    var that = this
    //获取用户信息
    wx.getStorage({
      key: 'userinfo',
      success: function(res) {
        if (res.data.mobile != ''){
          that.setData({
            person: res.data,
            defaults: false
          })
        }
        wx.request({
          url: 'https://app.lovejia.net/zxxx/index.php?s=/w16/Demotest/Demotest/getUserinfo',
          data: {
            mobile: res.data.mobile
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function (res) {
            that.setData({
              person: res.data
            })
          }
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