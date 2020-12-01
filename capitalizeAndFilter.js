const capitalizeAndFilter = array => {
    const newArr = []
    for (let i = 0; i < array.length; i++) {
        const str = array[i].toUpperCase()
        if (str[0] !== 'F')
            newArr.push(str)
    }
    return newArr
}
module.exports = {
    capitalizeAndFilter
};