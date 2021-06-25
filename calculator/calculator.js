const add = function (a, b) {
	return a + b;
};

const subtract = function (a, b) {
	return a - b;
};

const sum = function (arr) {
	if (arr.length == 0) {
		return 0;
	}
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	return arr.reduce(reducer);
};

const multiply = function (arr) {
	const reducer = (accumulator, currentValue) => accumulator * currentValue;
	return arr.reduce(reducer);
};

const power = function (base, exponente) {
	let total = 1;
	while (exponente > 0) {
		exponente--;
		total *= base;
	}
	return total;
};

const factorial = function (n) {
	if (n == 0) {
		return 1;
	}
	else {
		return n * factorial(n - 1);
	};
}

	module.exports = {
		add,
		subtract,
		sum,
		multiply,
		power,
		factorial
	};
