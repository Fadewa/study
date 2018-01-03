// 检测是否有输入  
function checkIsNotNull(content) {
  return (content && content != null)
}

// 检测输入内容  
function checkPhoneNum(phoneNum) {
  if (phoneNum.length == 0) {
    wx.showToast({
      title: '请输入手机号！',
      icon: 'success',
      duration: 1500
    })
    return false;
  }
  if (phoneNum.length != 11) {
    wx.showToast({
      title: '手机号长度有误！',
      icon: 'success',
      duration: 1500
    })
    return false;
  }
  var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
  if (!myreg.test(phoneNum)) {
    wx.showToast({
      title: '手机号有误！',
      icon: 'success',
      duration: 1500
    })
    return false;
  }
  return true;
}

// 比较两个内容是否相等  
function isContentEqual(content_1, content_2) {
  if (!checkIsNotNull(content_1)) {
    return false
  }

  if (content_1 === content_2) {
    return true
  }

  return false
}

module.exports = {
  checkIsNotNull: checkIsNotNull,
  checkPhoneNum: checkPhoneNum,
  isContentEqual: isContentEqual
}  