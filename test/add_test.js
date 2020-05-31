var expect = require('chai').expect
var add = require('../src/add.js');

describe('#add', function(){
  describe('#basic tests', function(){
    it('0+0=0', function(){
      expect(add('0','0')).to.equal('0');
    })
    it('0+1=1', function(){
      expect(add('0','1')).to.equal('1');
    })
    it('10+12=22', function(){
      expect(add('10','12')).to.equal('22');
    })
    it('97+15=112', function(){
      expect(add('97','15')).to.equal('112');
    })
  })
  describe('1000 test, input 0 to 999', function(){
    it('1000 test, input 0 to 999', function(){
      var count = 0
      while(count<1000) {
        var num1 = Math.floor(Math.random()*1000)
        var num2 = Math.floor(Math.random()*1000)
        var ans = (num1+num2).toString()
        expect(add(num1.toString(), num2.toString())).to.equal(ans);
        count++
      }
    })
  })
  describe('#non positve integer cases', function(){
    it('-5-7=-12', function(){
      expect(add('-5','-7')).to.equal('-12');
    })
    it('5-2=3', function(){
      expect(add('5','-2')).to.equal('3');
    })
    it('-24+4=3', function(){
      expect(add('-24','4')).to.equal('-20');
    })
  })
})
