let x;

const person = {
	name: 'John Doe',
	age: 30,
	isAdmin: true,
	address: {
		street: '123 Main st',
		city: 'Boston',
		state: 'MA',
	},
	hobbies: ['music', 'sports'],
};

x = person.name;
x = person['age'];
x = person.address.state;
x = person.hobbies[0];
person.name = 'Junfel Velasco';
person['isAdmin'] = false;

delete person.age; // remove property from an object
person.hasChildren = true; // add property to an object

// person.greet = function () {
// 	console.log(`Hello, my name is ${this.name}`);
// };
// person.greet();

const person2 = {
	'first name': 'Junfel',
	lastName: 'Velasco',
};
x = person2['first name'] + ' ' + person2.lastName;

const info = {
	address: {
		coords: {
			lat: 42.9384,
			lng: -72.3256,
		},
	},
};
x = info.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 }; // obj3 = obj4
const obj4 = Object.assign({}, obj1, obj2);

const todos = [
	{ id: 1, name: 'Buy food' },
	{ id: 2, name: 'Take out trash' },
	{ id: 3, name: 'Study book' },
];
x = todos;
x = todos[0].name;

const todo = new Object();
todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

x = Object.keys(todo);
x = Object.keys(todo).length;
x = Object.values(todo); // display only the value of the object
x = Object.entries(todo); // display array with key-value-pairs
x = todo.hasOwnProperty('name'); // return boolean

console.log(x);
