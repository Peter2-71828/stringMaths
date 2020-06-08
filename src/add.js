function add(num1, num2, carry=0){
  var ans
  var length1 = num1.length
  var length2 = num2.length
  var value = Number(num1.charAt(length1-1))+Number(num2.charAt(length2-1))+carry
  if (length1 > 1 || length2 > 1){
    num1 = num1.slice(0, length1-1)
    num2 = num2.slice(0, length2-1)
    if (value>9){
      value = (value%10).toString()
      ans = add(num1, num2, 1).concat(value)
    }else{
      value = value.toString()
      ans = add(num1, num2, 0).concat(value)
    }
  }else{
    ans = value.toString()
  }return ans
}
module.exports = add;
