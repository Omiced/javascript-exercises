const palindromes = function (word) {
	const wordWithoutSigns = word.replace(/[!,.]/g, "");
	const wordClean = wordWithoutSigns.replace(/ /g, "").toLowerCase();
	let wordReverse = "";
	for (x = wordClean.length - 1; x >= 0; x--) {
		wordReverse += wordClean[x];
	}
	return wordReverse === wordClean;
};

module.exports = palindromes;
