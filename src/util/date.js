export function getDate (date) {
  var n = date.substring(0, 4)
  var y = date.substring(4, 6)
  var r = date.substring(6, 8)
  var s = date.substring(8, 10)
  var f = date.substring(10, 12)
  var m = date.substring(12, 14)
  var result = n + '年' + y + '月' + r + '日' + ' ' + s + ':' + f + ':' + m
  return result
}

export default {
  getDate
}
