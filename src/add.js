function add(num1, num2) {
  var ans = ""
  var max;

  var length1 = num1.length
  var length2 = num2.length
  if (length1 < length2){
    max = length2
  }else {
    max = length1
  }

  for (i=1; i<=max; i++){
    var value = (Number(num1[max-i]) + Number(num2[max-i])).toString()
    ans = ans.concat(value)
  }
  return ans
}
module.exports = add;
