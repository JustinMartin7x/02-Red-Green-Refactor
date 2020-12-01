const { request } = require('superagent')

const fetchQuotes = async () => {
    const result = await request.get('futuramaapi.herokuapp.com/api/quotes?')
    return result.results.body[0]

}