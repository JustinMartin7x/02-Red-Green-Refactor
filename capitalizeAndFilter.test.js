const { capitalizeAndFilter } = require('./capitalizeAndFilter')

let arr = ['spot', 'rover', 'bingo', 'fred']

describe('capitalizeAndFilter', () => {
    it('should take in an array of strings and capitalize all strings and filter any string taht starts with letter f', () => {

        const newArr = capitalizeAndFilter(arr)

        expect(newArr)
            .toEqual(['SPOT', 'ROVER', 'BINGO'])
    });

});