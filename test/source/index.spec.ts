import payw from '../../source/index'

const textCases = {
	camelCase: 'testCaseParseToValue',
	snakeCase: 'test_case_parse_to_value',
	kebabCase: 'test-case-parse-to-value',
	stringCase: 'Test case parse to value'
}

const {
	camelCase,
	snakeCase,
	kebabCase,
	stringCase
} = textCases


describe('payw should', () => {
	test('parse camelCase to string correctly', () => {
		const parseCamelToString = payw({from: 'camel', to: 'string'})
		expect(parseCamelToString(camelCase)).toEqual(stringCase)
	})
	test('parse camelCase to snake_case correctly', () => {
		const parseCamelToSnake = payw({from: 'camel', to: 'snake'})
		expect(parseCamelToSnake(camelCase)).toEqual(snakeCase)
	})
	test('parse camelCase to kebab correctly', () => {
		const parseCamelToKebab = payw({from: 'camel', to: 'kebab'})
		expect(parseCamelToKebab(camelCase)).toEqual(kebabCase)
	})
	test('parse String case to camel correctly', () => {
		const parseStringToCamel = payw({from: 'string', to: 'camel'})
		expect(parseStringToCamel(stringCase)).toEqual(camelCase)
		expect(parseStringToCamel('Test  Case Parse     to  Value')).toEqual(camelCase)
	})
	test('parse String case to snake correctly', () => {
		const parseStringToSnake = payw({from: 'string', to: 'snake'})
		expect(parseStringToSnake(stringCase)).toEqual(snakeCase)
	})
	test('parse String case to kebab correctly', () => {
		const parseStringToKebab = payw({from: 'string', to: 'kebab'})
		expect(parseStringToKebab(stringCase)).toEqual(kebabCase)
	})	
	test('parse snake_case to string correctly', () => {
		const parseSnakeToString = payw({from: 'snake', to: 'string'})
		expect(parseSnakeToString(snakeCase)).toEqual(stringCase)
	})	
	test('parse snake_case to camel correctly', () => {
		const parseSnakeToCamel = payw({from: 'snake', to: 'camel'})
		expect(parseSnakeToCamel(snakeCase)).toEqual(camelCase)
		expect(parseSnakeToCamel('Test__Case_Parse_______to__Value')).toEqual(camelCase)
	})	
	test('parse snake_case to kebab correctly', () => {
		const parseSnakeToKebab = payw({from: 'snake', to: 'kebab'})
		expect(parseSnakeToKebab(snakeCase)).toEqual(kebabCase)
	})	
	test('parse kebab-case to string correctly', () => {
		const parseKebabToString = payw({from: 'kebab', to: 'string'})
		expect(parseKebabToString(kebabCase)).toEqual(stringCase)
	})
	test('parse kebab-case to camel correctly', () => {
		const parseKebabToCamel = payw({from: 'kebab', to: 'camel'})
		expect(parseKebabToCamel(kebabCase)).toEqual(camelCase)
		expect(parseKebabToCamel('Test--Case-Parse--------to--Value')).toEqual(camelCase)
	})
	test('parse kebab-case to snake correctly', () => {
		const parseKebabToSnake = payw({from: 'kebab', to: 'snake'})
		expect(parseKebabToSnake(kebabCase)).toEqual(snakeCase)
	})
})