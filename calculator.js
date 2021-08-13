class Calculator {

	_simplify(arr) {
		const index = arr.findIndex(val => val.match(/[*\/]/));
		if (index == -1)
			index = arr.findIndex(val => val.match(/[\+-]/));
	}

	calculate(str) {
		let arr = str.trim().split(' ');
		while (arr.length > 1)
			arr = this._simplify(arr);
		return arr[0]
	}
}