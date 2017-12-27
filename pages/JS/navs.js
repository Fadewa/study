var navs = {
  //跳转来师1v1
  toteacher: function () {
    wx.redirectTo({
      url: '/pages/nav/teacher/teacher'
    })
  },

  toonline: function () {
    wx.redirectTo({
      url: '/pages/index/index'
    })
  },

  tostudy: function () {
    wx.redirectTo({
      url: '/pages/nav/study/study'
    })
  },

  toinfo: function () {
    wx.redirectTo({
      url: '/pages/nav/info/info'
    })
  },

  tome: function () {
    wx.redirectTo({
      url: '/pages/nav/me/me'
    })
  },
}
module.exports = {
  navs: navs
}