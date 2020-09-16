import camelParser from './camelParser'
import kebabParser from './kebabParser'
import snakeParser from './snakeParser'
import stringParser from './stringParser'

export default {
	kebab: kebabParser,
	snake: snakeParser,
	string: stringParser,
	camel: camelParser
}