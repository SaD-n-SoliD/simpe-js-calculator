class Calculator {

	options = {
		'+': (a, b) => +a + +b + '',
		'-': (a, b) => a - b + '',
		'*': (a, b) => a * b + '',
		'/': (a, b) => a / b + '',
	}

	_simplify(arr) {
		let index = arr.findIndex(val => val.match(/[*\/]/));
		if (index == -1)
			index = arr.findIndex(val => val.match(/[\+-]/));
		const [a, op, b] = arr.slice(index - 1, index + 2);
		const newArr = [...arr];
		newArr.splice(index - 1, 3, this.options[op](a, b));
		return newArr;
	}

	calculate(str) {
		let arr = str.trim().split(' ');
		while (arr.length > 1)
			arr = this._simplify(arr);
		return arr[0]
	}
}

const calculator = new Calculator();
console.log(calculator.calculate('1 + 2 / 2 / 1.7e-9'));