import options from './options'
import checkError from '../lib/checkError'
import kebabParser from './kebabParser'
import snakeParser from './snakeParser'
import stringParser from './stringParser'
import camelParser from './camelParser'

const parse = {
	kebab: kebabParser,
	snake: snakeParser,
	string: stringParser,
	camel: camelParser
}

interface Settings {
	from: keyof Options,
	to: keyof Options,
	value: string
}

const payw = (settings: Settings): string => {
	const {from, to, value } = settings
	checkError(options, from, `Incorrect option in the 'from' field. ${from} doesn't exist.`)
	checkError(options, to, `Incorrect option in the 'to' field. ${to} doesn't exist.`)
	return parse[to](value, from)
}

export default payw