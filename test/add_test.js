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
  })
})
