// File bejeweled-spec.js for mocha testing bejeweled.js Bejeweled class

const { expect} = require('chai');
const Screen = require("../class/screen");
const Bejeweled = require("../class/bejeweled.js");

describe ('Bejeweled', function () {
  describe('swapping fruit', function() {
    let grid;

    context('if horizontal match', () => {
        it('should swapLeft', function() {
            grid = [
                [ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
                [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ]
            ];
            expect(Bejeweled.swapLeft(grid, 4, 5)).to.be.true;
            expect(grid).to.deep.equal([
                [ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                [ '🍓', '🍓', '🍊', '🍊', '🍊', '🥥', '🥝', '🥝' ],
                [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ]
            ]);
        });
    });

    context('if vertical match', () => {
        it('should swapLeft', function() {
            grid = [
                [ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
                [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ]
            ];
            expect(Bejeweled.swapLeft(grid, 2, 2)).to.be.true;
            expect(grid).to.deep.equal([
                [ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                [ '🥝', '🍊', '🥝', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
                [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ]
            ]);
        });
    });

    context('if horizontal match', () => {
        it('should swapRight', function() {
            grid = [
                [ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                [ '🥝', '🍇', '🥝', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
                [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ]
        ];
            expect(Bejeweled.swapRight(grid, 2, 1)).to.be.true;
            expect(grid).to.deep.equal([
                [ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                [ '🥝', '🥝', '🍇', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
                [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ]
            ]);
        });
    });

    context('if vertical match', () => {
        it('should swapRight', function() {
            grid = [
                [ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
                [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ]
                ];
            expect(Bejeweled.swapRight(grid, 2, 1)).to.be.true;
            expect(grid).to.deep.equal([
                [ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                [ '🥝', '🍊', '🥝', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
                [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ]
            ]);
        });

        it('should swapUp', function() {
            grid = [
                [ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
                [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ]
            ];
            expect(Bejeweled.swapUp(grid, 7, 6)).to.be.true;
            expect(grid).to.deep.equal([
                [ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
                [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🥝', '🍊' ],
                [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🍇', '🍇' ]
            ]);
        });
    });

    context('if horizontal match', () => {
        it('should swapUp', function() {
            grid = [
                [ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
                [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ]
            ];
            expect(Bejeweled.swapUp(grid, 2, 1)).to.be.true;
            expect(grid).to.deep.equal([
                [ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                [ '🍊', '🥝', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                [ '🥝', '🍊', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
                [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ]
            ]);
          });
        });

    context('if vertical match', () => {
        it('should swapDown', function() {
            grid = [
                [ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
                [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ]
            ];
            expect(Bejeweled.swapDown(grid, 0, 5)).to.be.true;
            expect(grid).to.deep.equal([
                [ '🥝', '🍇', '🥥', '🍓', '🍊', '🥥', '🍇', '🍇' ],
                [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥝', '🍓', '🍊' ],
                [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
                [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ]
            ]);
        });
    });

    context('if horizontal match', () => {
        it('should swapDown', function() {
            grid = [
                [ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
                [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ]
            ];
            expect(Bejeweled.swapDown(grid, 3, 5)).to.be.true;
            expect(grid).to.deep.equal([
                [ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                [ '🍊', '🍊', '🍇', '🍓', '🍓', '🍊', '🍊', '🥥' ],
                [ '🍓', '🍓', '🍊', '🍊', '🥥', '🥝', '🥝', '🥝' ],
                [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ] ]);
        });
      });
    });

    context('if there is no row above selection', () => {
        it('should not swapUp', function() {
            grid = [
                [ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
                [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ]
            ];
            expect(Bejeweled.swapUp(grid, 0, 6)).to.be.false;
            expect(grid).to.deep.equal([
                [ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
                [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ]
            ]);
        });
    });

    context('if there is no row below selection', () => {
        it('should not swapDown', function() {
            grid = [
                [ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
                [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ]
            ];
            expect(Bejeweled.swapDown(grid, grid.length - 1, 6)).to.be.false;
            expect(grid).to.deep.equal([
                [ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
                [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ]
            ]);
        });
    });

    context('if there is no column to the left of selection', () => {
        it('should not swapLeft', function() {
            grid = [
                [ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
                [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ]
            ];
            expect(Bejeweled.swapLeft(grid, 2, 0)).to.be.false;
            expect(grid).to.deep.equal([
                [ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
                [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ]
            ]);
        });
    });

    context('if there is no row to the right of selection', () => {
        it('should not swapRight', function() {
            grid = [
                [ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
                [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ]
            ];
            expect(Bejeweled.swapRight(grid, 2, grid[0].length - 1)).to.be.false;
            expect(grid).to.deep.equal([
                [ '🥝', '🍇', '🥥', '🍓', '🍊', '🥝', '🍇', '🍇' ],
                [ '🍊', '🍊', '🥝', '🥝', '🍇', '🥥', '🍓', '🍊' ],
                [ '🥝', '🥝', '🍊', '🍇', '🍇', '🥝', '🍊', '🍓' ],
                [ '🍊', '🍊', '🍇', '🍓', '🍓', '🥝', '🍊', '🥥' ],
                [ '🍓', '🍓', '🍊', '🍊', '🥥', '🍊', '🥝', '🥝' ],
                [ '🍊', '🍊', '🍇', '🥝', '🍊', '🍓', '🥝', '🍓' ],
                [ '🥥', '🍇', '🥥', '🍓', '🍇', '🥝', '🍇', '🍊' ],
                [ '🥝', '🥥', '🥥', '🍇', '🍊', '🥥', '🥝', '🍇' ]
            ]);
        });
    });

    context('swap to remove combos', () => {
        it('should delete if matching more than 3 in a row', function() {
            grid = [
                [ '🥝', '🍇', '🥥', '🍓', '🍊' ],
                [ '🍊', '🍊', '🥝', '🥝', '🍇' ],
                [ '🥝', '🥝', '🥝', '🍇', '🍇' ],
                [ '🍊', '🍊', '🍇', '🍓', '🍓' ],
                [ '🍓', '🍓', '🍊', '🍊', '🥥' ]
            ];
            Bejeweled.removeFruit(grid);
            expect(grid).to.deep.equal([
                [ '🥝', '🍇', '🥥', '🍓', '🍊' ],
                [ '🍊', '🍊', '🥝', '🥝', '🍇' ],
                [ '  ', '  ', '  ', '🍇', '🍇' ],
                [ '🍊', '🍊', '🍇', '🍓', '🍓' ],
                [ '🍓', '🍓', '🍊', '🍊', '🥥' ]
            ]);
        });

        it('should delete if matching more than 3 in a col', function() {
            grid = [
                [ '🥝', '🍇', '🥥', '🍓', '🍊' ],
                [ '🍊', '🍊', '🥝', '🥝', '🍇' ],
                [ '🍇', '🥝', '🥝', '🥝', '🍇' ],
                [ '🍊', '🍊', '🥝', '🍓', '🍓' ],
                [ '🍓', '🍓', '🍊', '🍊', '🥥' ]
            ];
            Bejeweled.removeFruit(grid);
            expect(grid).to.deep.equal([
                [ '🥝', '🍇', '🥥', '🍓', '🍊' ],
                [ '🍊', '🍊', '  ', '🥝', '🍇' ],
                [ '🍇', '  ', '  ', '  ', '🍇' ],
                [ '🍊', '🍊', '  ', '🍓', '🍓' ],
                [ '🍓', '🍓', '🍊', '🍊', '🥥' ]
            ]);
        });
    });

    context('when fruit are removed', () => {
        it('should drop down fruits into empty lower spaces', function() {
            grid = [
                [ '🥝', '🍇', '🥥', '🍓', '🍊' ],
                [ '🍊', '🍊', '🥝', '🥝', '🍇' ],
                [ '🍇', '🥝', '🥝', '🥝', '🍇' ],
                [ '🍊', '🍊', '🥝', '🍓', '🍓' ],
                [ '🍓', '🍓', '🍊', '🍊', '🥥' ]
            ];
            Bejeweled.removeFruit(grid);
            Bejeweled.dropDown(grid);
            expect(grid).to.deep.equal([
                [ '🥝', '  ', '  ', '  ', '🍊' ],
                [ '🍊', '🍇', '  ', '🍓', '🍇' ],
                [ '🍇', '🍊', '  ', '🥝', '🍇' ],
                [ '🍊', '🍊', '🥥', '🍓', '🍓' ],
                [ '🍓', '🍓', '🍊', '🍊', '🥥' ]
            ]);
        });
    });
    // Add tests to check if there are no possible valid moves
    context('no possible valid moves', function() {
        it('should not change the grid as no matching', function() {
            grid = [
                [ '🥝', '🍇', '🥥', '🍓'],
                [ '🍊', '🍊', '🍓', '🥝'],
                [ '🍇', '🥝', '🍇', '🥝'],
                [ '🍊', '🍊', '🍓', '🍓']
            ];
            let combo = Bejeweled.removeFruit(grid);
            expect(combo).to.equal(0);
            expect(grid).to.deep.equal([
                [ '🥝', '🍇', '🥥', '🍓'],
                [ '🍊', '🍊', '🍓', '🥝'],
                [ '🍇', '🥝', '🍇', '🥝'],
                [ '🍊', '🍊', '🍓', '🍓']
            ]);
        });
    });
});
