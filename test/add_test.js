var expect = require('chai').expect
var add = require('../src/add.js');

describe('#add', function(){
  describe('#basic tests', function(){
    it('0+0=0', function(){
      expect(add('0','0')).to.equal('0');
    })
  })
})
