export default <T extends Options, U extends keyof T>(options: T, key: U, msg: string): void => {
	if(options[key] === undefined) throw Error(msg)
}