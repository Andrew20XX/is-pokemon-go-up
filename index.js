'use strict'

const fetch = require('node-fetch')
const timeout = require('promise.timeout')
const time = require('promise-time')

const url = 'https://pgorelease.nianticlabs.com/plfe/'

// Returns a promise that resolves to the time a `fetch` to `url` took or `-1`
// on any error
function getfetchPromise () {
  const timePromise = time(fetch)(url)

  return timePromise.then(() => timePromise.time).catch(() => -1)
}

// Runs `getfetchPromise` but resolve with `-1` if it takes longer than 3500ms
function getTimePromise () {
  return timeout(getfetchPromise, 3500, true)().catch(() => -1)
}

// Returns an appropiate string based on the time given
function judge (time) {
  if (time === -1) return 'Error! Probably not a good sign, but try again.'
  if (time < 800) return 'Yep. Go outside and catch some!'
  if (time >= 800 && time < 3000) return 'Yep, but the servers are struggling :-('
  if (time >= 3000) return 'Nope, servers are down! Go back to work.'
}

// Helper function to abstract calling `fn` on `promise` resolution and error
function always (promise, fn) {
  return promise.then(fn, fn)
}

function isPokemonGoUp () {
  const p = getTimePromise()

  return always(p, judge)
}

module.exports = isPokemonGoUp
module.exports.judge = judge

