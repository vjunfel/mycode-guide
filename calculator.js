// CALCULATOR FUNCTION
function calculator(num1, num2, opr) {
	let result;
	if (opr === '+') {
		result = num1 + num2;
	} else if (opr === '-') {
		result = num1 - num2;
	} else if (opr === '*') {
		result = num1 * num2;
	} else if (opr === '/') {
		result = num1 / num2;
	} else if (opr === '%') {
		result = num1 % num2;
	} else {
		result = 'Wrong Operator';
	}
	return console.log('Result = ' + result);
}
calculator(10, 2, '-');

// ---------------------------------------------
const calculator2 = (n1, n2, operator) => {
	let result;
	switch (operator) {
		case '+':
			result = n1 + n2;
			break;
		case '-':
			result = n1 - n2;
			break;
		case '*':
			result = n1 * n2;
			break;
		case '/':
			result = n1 / n2;
			break;
		case '%':
			result = n1 % n2;
			break;
		default:
			result = 'Invalid Operator';
	}
	return console.log(result);
};
calculator2(5, 2, '$');
