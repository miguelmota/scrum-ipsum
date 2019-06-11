const meow = require('meow')
const ipsum = require('./index')

const cli = meow(`
    Usage
      $ scrum_ipsum [word_count]
    Examples
      $ scrum_ipsum
      $ scrum_ipsum 200
`, {
  flags: {

  }
})

console.log(ipsum.generate(cli.input[0]))
