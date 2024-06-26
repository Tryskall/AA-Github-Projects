// File: cursor-spec.js for mocha testing Cursor class E5S syntax

const { expect } = require('chai');

const Cursor = require("../class/cursor.js");
const Screen = require("../class/screen.js");

describe ('Cursor', function () {
  let cursor;

  beforeEach(function() {
    cursor = new Cursor(3, 3);
  });


  it('initializes for a 8x8 grid', function () {
    expect(cursor.row).to.equal(0);
    expect(cursor.col).to.equal(0);
  });

  it('correctly processes up inputs', function () {
    cursor.up();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 0]);
    cursor.down();
    expect([cursor.row, cursor.col]).to.deep.equal([1, 0]);
    cursor.up();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 0]);
  });

  it('correctly processes down inputs', function () {
    cursor.down();
    expect([cursor.row, cursor.col]).to.deep.equal([1, 0]);
    cursor.down();
    expect([cursor.row, cursor.col]).to.deep.equal([2, 0]);
    cursor.down();
    expect([cursor.row, cursor.col]).to.deep.equal([2, 0]);
  });

  it('correctly processes left inputs', function () {
    cursor.left();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 0]);
    cursor.right();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 1]);
    cursor.left();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 0]);
  });

  it('correctly processes right inputs', function () {
    cursor.right();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 1]);
    cursor.right();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 2]);
    cursor.right();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 2]);
  });

});
