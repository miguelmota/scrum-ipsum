const fs = require('fs')
const markov = require('markov')
const m = markov(1)

const s = fs.readFileSync(__dirname + '/data/combined.txt').toString('utf8')
m.seed(s)

module.exports.generate = (wordCount=100) => {
  return m.respond(s, wordCount).join(' ')
}
