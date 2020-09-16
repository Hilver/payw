import checkError from '../../lib/checkError'
import options from '../../source/options'

describe('checkError should', () => {
	test('return undefined if there are no errors', () => {
		expect(checkError(options, 'camel', 'error')).toBeUndefined()
		expect(checkError(options, 'kebab', 'error')).toBeUndefined()
		expect(checkError(options, 'snake', 'error')).toBeUndefined()
		expect(checkError(options, 'string', 'error')).toBeUndefined()				
	})
})