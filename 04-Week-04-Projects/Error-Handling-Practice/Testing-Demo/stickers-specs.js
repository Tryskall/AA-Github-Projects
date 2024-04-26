
describe ('Stickers', function () {
    it('should return 0 wity an empty array', function () {
        const stickers = countStickers([]);
        expect(stickers).to.equal(0);
    });
    it('should handle a single student', function () {
        const stickers = countStickers([1]);
        expect(sticker).to.equal(1);
    });
    it('should give 10 stickers to students ranked [1,2,3,4])', function () {
        const stickers = countStickers([1,2,3,4]);
        expect(stickers).to.equal(10);
    });
    it('should give the lower-ranked student 1 sticker', function () {
        const stickers = countStickers([1,2,3,4,3]);
        expect(stickers.to.equal(11));
    });
    it('should raise the sticker count if lower than its neighbor', function () {
        const stickers = countStickers([1,2,3,4,5,3,1]);
        expect(stickers).to.equal(18);
    });
    it('should raise adjust the sticker count to the students before accordingly', function () {
        const stickers = countStickers([1,3,5,4,3,2,1]);
        expect(stickers).to.equal(18);
    });
    it('should return `undefined` with improper inputs', function () {
        const stickers = countStickers(['one', 'two', 'three']);
        expect(stickers).to.equal(undefined);
    })
    it ('should work with 100 students', function () {
        let largeRankings = [];
        total = 0;
        for (let i = 1; i <= 100; i++) {
            largeRankings.push(i);
            total += 1;
        }
        const stickers = countStickers(largeRankings);
        expect(stickers).to.equal(total);
    })
});