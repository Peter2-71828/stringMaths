function add(num1, num2) {
  var ans = ""
  var max;
  var carry = 0;

  var length1 = num1.length
  var length2 = num2.length
  if (length1 < length2){
    max = length2
  }else {
    max = length1
  }

  for (i=1; i<=max; i++){
    var value = Number(num1.charAt(length1-i)) + Number(num2.charAt(length2-i)) + carry
    if (value>9){
      value = (value%10).toString()
      carry = 1
    }else {
      value = value.toString()
      carry = 0
    }
    ans = value.concat(ans)
  }
  if (carry!=0){
    ans = '1'.concat(ans)
  }
  return ans
}
module.exports = add;
