import options from '../options'

export default (input: string, from: keyof Options): string => {
	const reg = options[from],
	[firstSentence, ...rest] = input.split(reg)
	return `${firstSentence[0].toUpperCase() + firstSentence.substring(1)} ${rest.join(' ').toLowerCase()}`
}