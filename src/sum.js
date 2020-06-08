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

function minus(num1, num2, carry=0){
  var ans
  var length1 = num1.length
  var length2 = num2.length
  var value = Number(num1.charAt(length1-1))-Number(num2.charAt(length2-1))-carry
  if (length1 > 1 || length2 > 1){
    num1 = num1.slice(0, length1-1)
    num2 = num2.slice(0, length2-1)
    if (value<0){
      value = (value%0.1).toString()
      ans = minus(num1, num2, 1).concat(value)
    }else{
      value = value.toString()
      ans = minus(num1, num2, 0).concat(value)
    }
  }else{
    ans = value.toString()
  }return ans
}

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
    }else {
      num2 = num2.replace('-', '')
      ans = minus(num1, num2)
    }
  }else{
    ans = add(num1, num2)
  }
  return ans
}

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
module.exports = sum;
