const fibonacci = function (n) {
	let num = Number(n);
	if (num < 0) {
		return "OOPS";
	}
	else if (num <= 1) {
		return num;
	}
	return fibonacci(num - 1) + fibonacci(num - 2);
};

module.exports = fibonacci;
