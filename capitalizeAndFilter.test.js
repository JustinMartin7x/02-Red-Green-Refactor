const { capitalizeAndFilter } = require('./capitalizeAndFilter')

const arr = ['spot', 'rover', 'bingo', 'fred']

describe('capitalizeAndFilter', () => {
    it('should take in an array of strings and capitalize all strings and filter any string taht starts with letter f', () => {

        capitalizeAndFilter(arr)

        expect(arr)
            .toEqual(['SPOT', 'ROVER', 'BINGO'])
    });

});