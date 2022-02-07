export function compare(a, b) {
	const cleanA = a.replace(/[^\d.-]/g, '')
	const cleanB = b.replace(/[^\d.-]/g, '')

	console.log({ a, cleanA, b, cleanB })

	return cleanA > cleanB
}
