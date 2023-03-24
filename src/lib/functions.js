function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min
}

export function generateString(everyValuesArr, minLengthResult) {
	let result = ""
	while (result.length < minLengthResult) {
		const arbitraryIndex = parseInt(
			getRandomArbitrary(0, everyValuesArr.length)
		)
		result = result.concat("", everyValuesArr[arbitraryIndex])
	}
	return result
}
