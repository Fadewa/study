//日期格式
var date = (function() {
  //补充完整  时间格式都是两位数 不足两位添加0作为补充
  var myDate = new Date();
  var y = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
  var m1 = function () {
    return myDate.getMonth() + 1 < 10 ? '0' + (myDate.getMonth() + 1) : '' + (myDate.getMonth() + 1)
  };       //获取当前月份(0-11,0代表1月)
  var m = m1();

  var d1 = function () {
    return myDate.getDate() < 10 ? '0' + myDate.getDate() : '' + myDate.getDate()
  };        //获取当前日(1-31)
  var d = d1();

  
  var mytime = y + '-' + m + '-' + d 
  return mytime;
})();
module.exports = {
  date: date
}