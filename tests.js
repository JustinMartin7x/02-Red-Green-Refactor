
const spot = { name: 'spot', age: 5, weight: '20 lbs' }


describe('findName', () => {
    it('should take in an object and return the name property', () => {
        const name = findName(spot);

        expect(name)
            .toEqual('spot')
    });
});
