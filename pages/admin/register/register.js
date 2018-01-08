const app = getApp();
// var step = 1 // 当前操作的step
var maxTime = 60
var currentTime = maxTime //倒计时的事件（单位：s）
var interval = null
var hintMsg = null // 提示

var check = require("../../../utils/check.js")
var webUtils = require("../../../utils/registerWebUtil.js")
var step_g = 1

var phoneNum = null, identifyCode = null, password = null, rePassword = null;

Page({
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  data: {
    index:14,
    array: ['马来西亚', '印度尼西亚', '菲律宾', '新加坡', '泰国', '文莱', '日本', '韩国', '越南', '朝鲜', '香港', '澳门', '柬埔寨', '老挝', '中国', '台湾', '孟加拉国', '土耳其', '印度', '巴基斯坦', '阿富汗', '斯里兰卡', '缅甸', '马尔代夫', '黎巴嫩', '约旦', '叙利亚', '伊拉克', '科威特', '沙特阿拉伯', '阿曼', '以色列', '巴林', '卡塔尔', '不丹', '蒙古', '尼泊尔', '伊朗', '俄罗斯', '希腊', '荷兰', '比利时', '法国', '西班牙', '直布罗陀', '葡萄牙', '卢森堡', '爱尔兰', '冰岛', '阿尔巴尼亚', '马耳他', '塞浦路斯', '芬兰', '保加利亚', '匈牙利', '德国', '南斯拉夫', '意大利', '圣马力诺', '梵蒂冈', '罗马尼亚', '瑞士', '列支敦士登', '奥地利', '英国', '丹麦', '瑞典', '挪威', '波兰', '埃及', '摩洛哥', '阿尔及利亚', '突尼斯', '利比亚', '冈比亚', '塞内加尔', '毛里塔尼亚', '马里', '几内亚', '科特迪瓦', '布基拉法索', '尼日尔', '多哥', '贝宁', '毛里求斯', '利比里亚', '塞拉利昂', '加纳', '尼日利亚', '乍得', '中非', '喀麦隆', '佛得角', '圣多美', '普林西比', '赤道几内亚', '加蓬', '刚果', '扎伊尔', '安哥拉', '几内亚比绍', '阿森松', '塞舌尔', '苏丹', '卢旺达', '埃塞俄比亚', '索马里', '吉布提', '肯尼亚', '坦桑尼亚', '乌干达', '布隆迪', '莫桑比克', '赞比亚', '马达加斯加', '留尼旺岛', '津巴布韦', '纳米比亚', '马拉维', '莱索托', '博茨瓦纳', '斯威士兰', '科摩罗', '南非', '圣赫勒拿', '阿鲁巴岛', '法罗群岛', '美国', '加拿大', '中途岛', '夏威夷', '威克岛', '安圭拉岛', '维尔京群岛', '圣卢西亚', '波多黎各', '牙买加', '巴哈马', '巴巴多斯', '阿拉斯加', '格陵兰岛', '福克兰群岛', '伯利兹', '危地马拉', '萨尔瓦多', '洪都拉斯', '尼加拉瓜', '哥斯达黎加', '巴拿马', '海地', '秘鲁', '墨西哥', '古巴', '阿根廷', '巴西', '智利', '哥伦比亚', '委内瑞拉', '玻利维亚', '圭亚那', '厄瓜多尔', '法属圭亚那', '巴拉圭', '马提尼克', '苏里南', '乌拉圭', '澳大利亚', '新西兰', '关岛', '科科斯岛', '诺福克岛', '圣诞岛', '瑙鲁', '汤加', '所罗门群岛', '瓦努阿图', '斐济', '科克群岛', '纽埃岛', '东萨摩亚', '西萨摩亚', '基里巴斯', '图瓦卢'],
    array2: [
      '0060', '0062', '0063', '0065 ', '0066', '00673', '0081', '0082', '0084', '00850', '00852', '00853', '00855', '00856', '0086', '00886', '00880', '0090', '0091', '0092', '0093', '0094', '0095', '00960', '00961', '00962', '00963', '00964', '00965', '00966', '00968', '00972', '00973', '00974', '00975', '00976', '00977', '0098', '007', '0030', '0031', '0032', '0033', '0034'
      , '00350', '00351', '00352', '00353', '00354', '00355', '00356', '00357', '00358', '00359', '00336', '00349', '00338', '0039', '00223', '00396', '0040', '0041', '004175', '0043', '0044', '0045', '0046', '0047', '0048', '0020', '00210', '00213', '00216', '00218', '00220', '00221', '00222', '00223', '00224', '00225', '00226', '00227', '00228', '00229', '00230', '00231', '00232', '00233', '00234', '00235', '00236', '00237', '00238', '00239', '00239', '00240', '00241', '00242', '00243', '00244', '00245', '00247', '00248', '00249', '00250', '00251', '00252', '00253', '00254', '00255', '00256', '00257', '00258', '00260', '00261', '00262', '00263', '00264', '00265', '00266', '00267', '00268', '00269', '0027', '00290', '00297', '00298', '001', '001', '001808', '001808', '001808', '001809', '001809', '001809', '001809', '001809', '001809', '001809', '001907', '00299', '00500', '00501', '00502', '00503', '00504', '00505', '00506', '00507', '00509', '0051', '0052', '0053', '0054', '0055', '0056', '0057', '0058', '00591', '00592', '00593', '00594', '00595', '00596', '00597', '00598', '0061', '0064', '00671', '006722', '006723', '006724', '00674', '00676', '00677', '00678', '00679', '00682', '00683', '00684', '00685', '00686', '00688'],
    windowWidth: 0,
    windoeHeight: 0,
    icon_phone: "../../image/icon_phone.png",
    input_icon: "../../image/input_icon.png",
    icon_password: "../../image/icon_password.png",
    nextButtonWidth: 0,
    step: step_g,
    time: currentTime,
    mobile: '',
    password: '',
    nickName: '',
    avatarUrl: '',
    realName: '',
    sex: '',
    birthDate: '',
    homeLand: '',
    next:''
  },
  onLoad: function () {
    step_g = 1
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowWidth: res.windowWidth,
          windowHeight: res.windowHeight,
          nextButtonWidth: res.windowWidth - 20
        })
      }
    })
  },
  onUnload: function () {
    currentTime = maxTime
    if (interval != null) {
      clearInterval(interval)
    }
  },
  nextStep: function () {
    var that = this
    if (step_g == 1) {
      if (this.firstStep()) {
        step_g = 2
        interval = setInterval(function () {
          currentTime--;
          that.setData({
            time: currentTime
          })

          if (currentTime <= 0) {
            clearInterval(interval)
            currentTime = -1
          }
        }, 1000)
      }
    } else if (step_g == 2) {
      if (secondStep()) {
        step_g = 3
        clearInterval(interval)
      }
    } else {
      if (thirdStep()) {
        var this_ = this
        // 完成注册获取用户信息
        wx.getUserInfo({
          success: function (res) {
            var userinfo = res.userInfo
            app.globalData.userInfo = res.userInfo
            //下载图片
            wx.downloadFile({
              url: userinfo.avatarUrl,
              success: function (res) {
                //上传图片
                wx.uploadFile({
                  url: app.url + 'Api/Api/upload&PHPSESSID=' + wx.getStorageSync('PHPSESSID'),
                  filePath: res.tempFilePath,
                  name: 'download',
                  header: { "Content-Type": "multipart/form-data" },
                  success: function (res) {
                    var data = JSON.parse(res.data)
                    console.log(data)
                    this_.setData({
                      img_id: data.id
                    })
                    //缓存数据
                    wx.setStorage({
                      key: 'userinfo',
                      data: {
                        mobile: this_.data.mobile,
                        password: this_.data.password,
                        nickName: userinfo.nickName,
                        avatarUrl: userinfo.avatarUrl,
                        realName: '',
                        sex: '',
                        birthDate: '',
                        homeLand: ''
                      }
                    })
                    wx.request({
                      url: 'https://app.lovejia.net/zxxx/index.php?s=/w16/Demotest/Demotest/loadImg',
                      data: {
                        mobile: this_.data.mobile,
                        password: this_.data.password,
                        nickName: userinfo.nickName,
                        avatarUrl: this_.data.img_id,
                        realName: '',
                        sex: '',
                        birthDate: '',
                        homeLand: ''
                      },
                      header: {
                        'Content-Type': 'application/json'
                      },
                      success: function (res) {

                      }
                    })
                  },
                  fail: function (res) {
                    console.log('上传图片到服务器失败')
                  }
                })
              }
            })
            wx.navigateBack()
          },
          //取消授权让用户再次授权
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
          }
        })
      }
    }

    if (hintMsg != null) {
      wx.showToast({
        title: hintMsg,
        icon: 'loading',
        duration: 700
      })
    }

    this.setData({
      step: step_g
    })
  },
  //
  firstStep:function () { // 提交电话号码，获取［验证码］
      
      if (!check.checkPhoneNum(phoneNum)) {
      hintMsg = "请输入正确的电话号码!"
      return false
    }
    if (webUtils.submitPhoneNum(phoneNum)) {
      
      if (this.data.next) {
        hintMsg = null
        return true
      } else {
        wx.showModal({
          title: '注册信息',
          content: '此号码已经注册过请更换号码',
        })
        return false
      }
    }
    hintMsg = "提交错误，请稍后重试!"
    return false
    },
  //注册手机号
  input_phoneNum: function (e) {
    phoneNum = e.detail.value
    app.globalData.mobile_id = e.detail.value
    this.setData({
      mobile: e.detail.value
    })
    var that = this
    wx.request({
      url: 'https://app.lovejia.net/zxxx/index.php?s=/w16/Demotest/Demotest/getUserinfo',
      data: {
        mobile: this.data.mobile
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          next: res.data.callback
        })
      }
    })
  },
  //验证码
  input_identifyCode: function (e) {
    identifyCode = e.detail.value
  },
  //用户密码
  input_password: function (e) {
    password = e.detail.value
  },
  input_rePassword: function (e) {
    rePassword = e.detail.value
  },
  reSendPhoneNum: function () {
    if (currentTime < 0) {
      var that = this
      currentTime = maxTime
      interval = setInterval(function () {
        currentTime--
        that.setData({
          time: currentTime
        })

        if (currentTime <= 0) {
          currentTime = -1
          clearInterval(interval)
        }
      }, 1000)
    } else {
      wx.showToast({
        title: '短信已发到您的手机，请稍后重试!',
        icon: 'loading',
        duration: 700
      })
    }
  }
})


function secondStep() { // 提交［验证码］
  if (!check.checkIsNotNull(identifyCode)) {
    hintMsg = "请输入验证码!"
    return false
  }

  if (webUtils.submitIdentifyCode(identifyCode)) {
    hintMsg = null
    return true
  }
  hintMsg = "提交错误，请稍后重试!"
  return false
}

function thirdStep() { // 提交［密码］和［重新密码］

  //console.log(password + "===" + rePassword)

  if (!check.isContentEqual(password, rePassword)) {
    hintMsg = "两次密码不一致！"
    return false
  }

  if (webUtils.submitPassword(password)) {
    //console.log(password)
    //向后台传密码和手机号
    var this_ = this
    wx.request({
      url: 'https://app.lovejia.net/zxxx/index.php?s=/w16/Demotest/Demotest/storepassword', 
      data: {
        password: password,
        mobile: app.globalData.mobile_id
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
       
      }
    })
    hintMsg = "注册成功"
    return true
  }
  hintMsg = "提交错误，请稍后重试!"
  return false
}