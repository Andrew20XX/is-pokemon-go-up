import test from 'ava'
import fn from './'

test('main', async t => {
  const time = await fn()

  t.truthy(time)
  t.is(typeof time, 'string')
})

test('judge', t => {
  const judge = fn.judge

  t.is(judge(-1), 'Error! Probably not a good sign, but try again.')
  t.is(judge(300), 'Yep. Go outside and catch some!')
  t.is(judge(1000), 'Yep, but the servers are struggling :-(')
  t.is(judge(5000), 'Nope, servers are down! Go back to work.')
})

