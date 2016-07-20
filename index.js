'use strict'

const fetch = require('node-fetch')
const delay = require('delay')
const time = require('promise-time')

const url = 'https://pgorelease.nianticlabs.com/plfe/'
// Resolve after 3500 seconds with the value `3500`
const timeout = delay(3500, 3500)

// Returns a promise that resolves to the time a `fetch` to `url` took
function getfetchPromise () {
  const fetchPromise = time(fetch)(url)

  return fetchPromise.then(() => fetchPromise.time)
}

// Returns the return value of `getfetchPromise` or `timeout`, whichever
// resolves first
function getTimePromise () {
  return Promise.race([getfetchPromise(), timeout])
}

function judge (time) {
  if (time === -1) return 'Error! Probably not a good sign, but try again.'
  if (time < 800) return 'Yep. Go outside and catch some!'
  if (time >= 800 && time < 3000) return 'Yep, but the servers are struggling :-('
  if (time >= 3000) return 'Nope, servers are down! Go back to work.'
}

function isPokemonGoUp () {
  const p = getTimePromise()

  return p.then(judge).catch(() => judge(-1))
}

module.exports = isPokemonGoUp
module.exports.judge = judge

