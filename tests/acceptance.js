var plugin = require('../')
var assert = require('assert')
var stuff = {config:{self_path:__dirname+'/config'},logger:{}}

describe('acc', function() {
  it('should have plugin interface', function() {
    assert.equal(typeof plugin, 'function')
    var p = plugin({}, stuff)
    assert.equal(typeof p.authenticate, 'function')
  }) 

  it('should not authenticate random user', function(cb) {
    var p = plugin({}, stuff)
    p.authenticate('blah', 'blah', function(err, groups) {
      assert(!err)
      assert(!groups)
      cb()
    })
  }) 
})

