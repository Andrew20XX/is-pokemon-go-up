# is-pokemon-go-up [![Build Status](https://travis-ci.org/sotojuan/is-pokemon-go-up.svg?branch=master)](https://travis-ci.org/sotojuan/is-pokemon-go-up)

> Check if Pokémon GO is up

[Inspiration](https://mobile.twitter.com/contrahacks/status/752564651485962240).

## Install

```
$ npm install --save is-pokemon-go-up
```

## Usage

```js
const isPokemonGoUp = require('is-pokemon-go-up')

isPokemonGoUp()
  .then(console.log)
// => 'Yep. Go outside and catch some!'
```

## API

### isPokemonGoUp()

Returns a string telling you if Pokémon GO is up.

## Related

- [is-pokemon-go-up-cli](https://github.com/sotojuan/is-pokemon-go-up-cli) - CLI version of this

## License

MIT © [Juan Soto](http://juansoto.me)
