<div style="text-align: center;">
	<img src="https://github.com/Hilver/payw/raw/master/media/payw_logo.png" />
</div>

# payw ![](https://badgen.net/github/last-commit/Hilver/payw) ![](https://badgen.net/npm/v/payw) ![](https://badgen.net/github/license/Hilver/payw) [![Build Status](https://travis-ci.com/Hilver/payw.svg?token=4zszxMxi3d59NTKgjQtC&branch=master)]()

> payw is an acronym of Parse As You Want. It's a multiple way parser for parsing camelCase, kebab-case, snake_case and strings.

## Install

```
$ npm install -D payw
```

## Usage

```js
const payw = require('payw');

const parseCamelToKebab = payw({from: 'camel', to: 'kebab'})
parseCamelToKebab('fooBar')
//=>  'foo-bar'

const parseCamelToSnake = payw({from: 'camel', to: 'snake'})
parseCamelToSnake('fooBar')
//=> 'foo_bar'

const parseCamelToString = payw({from: 'camel', to: 'string'})
parseCamelToString('fooBar')
//=> 'Foo bar'

const parseKebabToCamel = payw({from: 'kebab', to: 'camel'})
parseKebabToCamel('foo-bar')
//=> 'fooBar'

const parseKebabToSnake = payw({from: 'kebab', to: 'snake'})
parseKebabToSnake('foo-bar')
//=> 'foo_bar'

const parseKebabToString = payw({from: 'kebab', to: 'string'})
parseKebabToSnake('foo-bar')
//=> 'Foo bar'

const parseSnakeToCamel = payw({from: 'snake', to: 'camel'})
parseSnakeToCamel('foo_bar')
//=> 'fooBar'

const parseSnakeToKebab = payw({from: 'snake', to: 'kebab'})
parseSnakeToKebab('foo_bar')
//=> 'foo-bar'

const parseSnakeToString = payw({from: 'snake', to: 'string'})
parseSnakeToString('foo_bar')
//=> 'Foo bar'

const parseStringToCamel = payw({from: 'string', to: 'camel'})
parseStringToCamel('Foo bar')
//=> 'fooBar'

const parseStringToKebab = payw({from: 'string', to: 'kebab'})
parseStringToKebab('Foo bar')
//=> 'foo-bar'

const parseStringToSnake = payw({from: 'string', to: 'snake'})
parseStringToSnake('Foo bar')
//=> 'foo_bar'
```

## API

### payw(from, to) → parser(input)

#### from

Type: `string`

Available: `camel, kebab, snake, string`

#### to

Type: `string`

Available: `camel, kebab, snake, string`

#### input

Type: `string`

String to convert to selected case.

## License

MIT © [Paweł Pęczkowski](https://github.com/Hilver)