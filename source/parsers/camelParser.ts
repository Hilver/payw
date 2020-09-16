import options from '../options'

export default (input: string, from: keyof Options): string => {
	const reg = options[from]
	return input.split(reg).filter(el => el !== "").map((el, i) => {
		if(i === 0) return el[0].toLowerCase() + el.substring(1)
		else return el[0].toUpperCase() + el.substring(1)
	}).join('')
}