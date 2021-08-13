class Calculator {

	_simplify(arr) {

	}

	calculate(str) {
		let arr = str.trim().split(' ');
		while (arr.length > 1)
			arr = this._simplify(arr);
		return arr[0]
	}
}