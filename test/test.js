const test = require('tape')
const ipsum = require('../')

test('ipsum', t => {
  t.plan(3)

  const t1 = ipsum.generate()
  t.equal(t1.split(' ').length, 100)

  const t2 = ipsum.generate(100)
  t.equal(t2.split(' ').length, 100)

  const t3 = ipsum.generate(500)
  t.equal(t3.split(' ').length, 500)
})
