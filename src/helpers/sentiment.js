const unirest = require('unirest')

/*
  Get a new API key at https://market.mashape.com/vivekn/sentiment-3
*/



// Sentiment 3 Mashape API key


var sentiment = {}

sentiment.init = function () {
  return unirest.post('https://twinword-sentiment-analysis.p.rapidapi.com/analyze/')
  .header('x-rapidapi-host', 'twinword-sentiment-analysis.p.rapidapi.com')
  .header('x-rapidapi-key', '70fbaac2d3msh4b098fcf0c079e8p192409jsn67a81f80c7e9')
  .header('content-type', 'application/x-www-form-urlencoded')
  .header('useQueryString', true)
}

module.exports = sentiment
