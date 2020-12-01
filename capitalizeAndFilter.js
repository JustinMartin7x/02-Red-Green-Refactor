const capitalize = arr => {
    return arr.map(word => word.toUpperCase())
}

const capitalizeAndFilter = array => {
    const newArr = capitalize(array)
    return newArr.filter(word => word[0] !== 'F')

}
module.exports = {
    capitalizeAndFilter
};