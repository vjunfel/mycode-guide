let names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

for (let i = 0; i < names.length; i++) {
	// if (names[i] === 'Sara') {
	// 	names[i] = names[i] + ' is Awesome!';
	// }

	names[i] === 'Sara' ? (names[i] = names[i] + ' is Awesome!') : null;

	names[i] === 'Sara' && (names[i] = names[i] + ' is Awesome!');

	// console.log(names[i]);
}
// ---------------------------------------------
// let i = 0;

// while (i <= 10) {
// 	if (i % 2 === 0) {
// 		console.log('Number = ' + i + ' Even');
// 	} else {
// 		console.log(`Number = ${i} Odd`);
// 	}
// 	i++;
// }
// ---------------------------------------------
// let i = 1;
// const arr = [10, 20, 30, 40];

// while (i < arr.length) {
// 	console.log(arr[i]);
// 	i++;
// }
// ---------------------------------------------
// let i = 1;

// while (i <= 5) {
// 	console.log('Number ' + i);

// 	let j = 1;
// 	while (j <= 5) {
// 		console.log(`${i} * ${j} = ${i * j}`);
// 		j++;
// 	}
// 	i++;
// }
// ------------FizzBuzz Challenge----------------
// let a = 1;
// while (a <= 20) {
// 	if (a % 3 === 0 && a % 5 === 0) {
// 		console.log('FizzBuzz');
// 	} else if (a % 3 === 0) {
// 		console.log('Fizz');
// 	} else if (a % 5 === 0) {
// 		console.log('Buzz');
// 	} else {
// 		console.log(a);
// 	}
// 	a++;
// }
// ------------------- Filter Arrays ---------------------
const companies = [
	{ name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
	{ name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
	{ name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
	{ name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
	{ name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
	{ name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
	{ name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
	{ name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
	{ name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];
// Get only retail companies
const retail = companies.filter((comp) => {
	if (comp.category === 'Retail') {
		// console.log(comp.name, comp.category);
		return comp;
	}
});
// console.log(retail);

// Get companies that started in or after 1980 and ended in or before 2005
const earlyCompany = companies.filter(
	(comp) => comp.start >= 1980 && comp.end <= 2005
);
// console.log(earlyCompany);

// Get companies that lasted 10 years or more
const longTermCompany = companies.filter((comp) => comp.end - comp.start >= 10);
// console.log(longTermCompany);

// ------------------- Map Arrays ---------------------
const numbers = [1, 2, 3, 4, 5];

const doubleNum = [];
numbers.forEach((num) => {
	doubleNum.push(num * 2);
});
// console.log(doubleNum);

const tripleNum = numbers.map((num) => num * 3);
// console.log(tripleNum);

// Create an array of company names
const companyNames = companies.map((comp) => comp.name);
// console.log(companyNames);

// Create an array with just company and category
const compCategory = companies.map((comp) => {
	return {
		name: comp.name,
		category: comp.category,
	};
});
// console.log(compCategory);

// Create an array of the length of each company in years
const companyInYears = companies.map((comp) => {
	const years = comp.end - comp.start;
	const name = comp.name;
	return {
		name: name,
		length: years + ' yrs',
	};
});
// console.log(companyInYears);

// ------------------- Reduce Arrays ---------------------
const newNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = newNum.reduce((acc, cur) => acc + cur, 0);
// console.log(sum);

const cart = [
	{ id: 1, name: 'Product 1', price: 130 },
	{ id: 2, name: 'Product 2', price: 150 },
	{ id: 3, name: 'Product 3', price: 175 },
];

const total = cart.reduce((acc, product) => acc + product.price, 0);
// console.log(total);

// ------------------- Challenges---------------------
// Take the `people` array and create an array called `youngPeople` that stores objects with ONLY `name` and `email` properties of all the people that are 25 and under. The `name` property should have their first and last name.
const people = [
	{
		firstName: 'John',
		lastName: 'Doe',
		email: 'john@gmail.com',
		phone: '111-111-1111',
		age: 30,
	},
	{
		firstName: 'Jane',
		lastName: 'Poe',
		email: 'jane@gmail.com',
		phone: '222-222-2222',
		age: 25,
	},
	{
		firstName: 'Bob',
		lastName: 'Foe',
		email: 'bob@gmail.com',
		phone: '333-333-3333',
		age: 45,
	},
	{
		firstName: 'Sara',
		lastName: 'Soe',
		email: 'Sara@gmail.com',
		phone: '444-444-4444',
		age: 19,
	},
	{
		firstName: 'Jose',
		lastName: 'Koe',
		email: 'jose@gmail.com',
		phone: '555-555-5555',
		age: 23,
	},
];

// Challenge 1
const youngPeople = people
	.filter((person) => person.age <= 25)
	.map((person) => ({
		name: person.firstName + ' ' + person.lastName,
		email: person.email,
	}));
// console.log(youngPeople);

// Challenge 2
// Add all of the positive numbers in the array.

const mynumbers = [2, -30, 50, 20, -12, -9, 7];

const positiveNum = mynumbers
	.filter((num) => num > 0)
	.reduce((acc, cur) => acc + cur, 0);
// console.log(positiveNum);

// Challenge 3
// Create a new array called `capitalizedWords` with the words from the `words` array with the first letter of each word capitalized.

const words = ['coder', 'programmer', 'developer'];

const capitalizedWords = words.map(
	(word) => word.slice(0, 1).toUpperCase() + word.slice(1)
);
console.log(capitalizedWords);
