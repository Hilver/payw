import options from './options'

export default (string: string, from: keyof Options): string => {
	const reg = options[from]
	return string.split(reg).map(el => el[0].toUpperCase() + el.substring(1)).join('')
}