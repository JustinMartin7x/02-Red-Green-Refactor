const { copyAndPush } = require('./copyAndPush')

const numbers = [1, 2, 3]

describe('copyAndPush', () => {
    it('should copy inputted array and return a new array with all the original ites and a new item pushed to the end', () => {

        const newArr = copyAndPush(numbers, 4);
        expect(newArr)
            .toEqual([1, 2, 3, 4])

    });
    it('shoule return a new array and original array should not be mutated', () => {

        expect(numbers)
            .toEqual([1, 2, 3])
    })

});