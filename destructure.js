const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
	firstName,
	lastName,
	age,
};
console.log(person.lastName, person.age);

// Destructuring

const todo = {
	id: 1,
	title: 'Take out trash',
	user: {
		name: 'John',
	},
};

const {
	id: todoId, // renaming the ID key
	title,
	user: { name }, // destructure
} = todo;

console.log(todoId);

// Destructure array
const numbers = [23, 65, 49, 58, 75];
const [first, second, ...rest] = numbers;

console.log(first, second, rest);
