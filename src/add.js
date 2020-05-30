function add(num1, num2) {
  var ans = ""
  for (i=0; i<1; i++){
    var value = (Number(num1[i]) + Number(num2[i])).toString()
    ans = ans.concat(value)
  }
  return ans
}
module.exports = add;
