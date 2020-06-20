function rmLeadingZeros(num){
  if (num == '-0'){
    return '0'
  }else if (num.charAt(0)=='-'){
    while (num.charAt(1)=='0'){
      num = '-'.concat(num.slice(2))
    }
  }else {
    while (num.charAt(0)=='0'&&num.length>1){
      num = num.slice(1)
    }
  }return num
}
module.exports = rmLeadingZeros;
