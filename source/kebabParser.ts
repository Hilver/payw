import options from './options'

export default (string: string, from: keyof Options): string => {
	const reg = options[from]
	return string.split(reg).join('-')
}