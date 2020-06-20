const path = require('path')
const add = require(path.join(__dirname,'add.js'))
const minus = require(path.join(__dirname,'minus.js'))
const rmLeadingZeros = require(path.join(__dirname,'rmLeadingZeros.js'))

function sum(num1, num2){
  var ans;
  if (num1.includes('-') & num2.includes('-')){
    num1 = num1.replace('-', '')
    num2 = num2.replace('-', '')
    ans = '-'.concat(add(num1, num2))
  }else if (num1.includes('-') ^ num2.includes('-')){
    if (num1.includes('-')){
      num1 = num1.replace('-', '')
      ans = minus(num2, num1)
      ans = negativeCarry(ans)
    }else {
      num2 = num2.replace('-', '')
      ans = minus(num1, num2)
      ans = negativeCarry(ans)
    }
  }else{
    ans = add(num1, num2)
  }
  ans = rmLeadingZeros(ans)
  return ans
}

function negativeCarry(ans){
  if (ans.charAt(0)=='-'){
    var newAns = '-'
    for (var i=1; i<ans.length-1; i++){
      newAns = newAns.concat((9-Number(ans.charAt(i))).toString())
    }
    if (ans.charAt(ans.length-1)==0){
      ans = sum(newAns.concat('0'), '-10')
    }else {
        ans = newAns.concat((10-Number(ans.charAt(ans.length-1))).toString())
    }
  }return ans
}

module.exports = sum;

// Multiplication signing
// function add(num1, num2){
//   var sign = ''
//   if (num1.includes('-') ^ num2.includes('-')){
//     sign = '-'
//   }
//   num1 = num1.replace('-', '')
//   num2 = num2.replace('-', '')
//   return sign.concat(basicAdd(num1, num2))
// }

// function add(num1, num2) {
//   var ans = ""
//   var max;
//   var carry = 0;
//
//   var length1 = num1.length
//   var length2 = num2.length
//   if (length1 < length2){
//     max = length2
//   }else {
//     max = length1
//   }
//
//   for (i=1; i<=max; i++){
//     var value = Number(num1.charAt(length1-i)) + Number(num2.charAt(length2-i)) + carry
//     if (value>9){
//       value = (value%10).toString()
//       carry = 1
//     }else {
//       value = value.toString()
//       carry = 0
//     }
//     ans = value.concat(ans)
//   }
//   if (carry!=0){
//     ans = '1'.concat(ans)
//   }
//   return ans
// }
