'use strict'

var chai = require('jasmine');
// var assert = chai.assert;
var expect = chai.expect;
// var should = chai.should();
var myApp = require('../app/library.js');

describe("Test for proper arithmetic functionality", function() {
  it("should return [3,17] as [min,max] for [3,6,9,17]", function() {
    expect((myApp.getMaxAndMin([3,6,9,17]))).toBe([3,17]);
  })
  it("should return [3,9] as [min,max] for [3, 7, 5,9]", function() {
    expect(myApp.getMaxAndMin([3, 7, 5,9])).toBe([3,9]);
  })
  it("should return [4,101] as [min,max] for [3, 7, 5,9]", function() {
    expect(myApp.getMaxAndMin([100,4,7,101])).toBe([4,101]);
  })
  it("should return [1,210] as [min,max] for  [210,19,1,17]", function(){
    expect(myApp.getMaxAndMin([210,19,1,7])).toBe([1,210]);
  })
  it("should return [7,20] as [min,max] for  [20,19,7,17]", function(){
    expect(myApp.getMaxAndMin([20,19,7,7])).toBe([7,20]);
  })
  it("should return [7,15] as [min,max] for  [13,11,7,15]", function(){
    expect(myApp.getMaxAndMin([13,11,7,15])).toBe([7,15]);
  })
})