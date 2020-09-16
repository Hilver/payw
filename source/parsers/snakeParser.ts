import options from '../options'

export default (input: string, from: keyof Options): string => {
	const reg = options[from]
	return input.split(reg).join('_').toLowerCase()
}