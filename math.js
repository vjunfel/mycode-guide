let a;

a = Math.sqrt(9);

a = Math.abs(-5);

a = Math.round(4.2);

a = Math.ceil(4.3);

a = Math.floor(4.9);

a = Math.pow(2, 3);

a = Math.min(4, 5, 3);

a = Math.max(4, 5, 3);

a = Math.random();
a = Math.floor(Math.random() * 100);

// console.log(a);

// ------------- Challenge ------------------
const x = Math.ceil(Math.random() * 100);
const y = Math.ceil(Math.random() * 50);
console.log('x = ' + x + ', y = ' + y);

const sumOutput = `${x} + ${y} = ${x + y}`.toString();
console.log('sumOutput: ' + sumOutput);

const differenceOutput = `${x} - ${y} = ${x - y}`.toString();
console.log('differenceOutput: ' + differenceOutput);

const productOutput = `${x} * ${y} = ${x * y}`.toString();
console.log('productOutput: ' + productOutput);

const quotientOutput = `${x} / ${y} = ${x / y}`.toString();
console.log('quotientOutput: ' + quotientOutput);

const remaindertOutput = `${x} % ${y} = ${x % y}`;
console.log(
	'remaindertOutput: ',
	remaindertOutput.toString(),
	typeof sumOutput
);
