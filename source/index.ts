import options from './options'
import checkError from '../lib/checkError'
import parse from './parsers/index'

interface Settings {
	from: keyof Options,
	to: keyof Options,
}

class Payw {
	from: keyof Options
	to: keyof Options
	constructor(settings: Settings) {
		this.from = settings.from
		this.to = settings.to
	}

	public parse(value: string): string {
		const {from, to} = this
		if (typeof value !== 'string') {
			value = JSON.stringify(value)
		}
		checkError(options, from, `Incorrect option in the 'from' field. ${from} doesn't exist.`)
		checkError(options, to, `Incorrect option in the 'to' field. ${to} doesn't exist.`)
		return parse[to](value, from)
	}
}

export default (settings: Settings) => (value: string): string => new Payw(settings).parse(value)