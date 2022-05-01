function createEnum(values) {
	const enumObject = {};
	for (const val of values) {
		enumObject[val] = val.toUpperCase();
	}
	return Object.freeze(enumObject);
}

module.exports = createEnum;
