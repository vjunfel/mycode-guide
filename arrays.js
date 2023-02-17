let x;

// ---------- Array Literal ----------
const numbers = [12, 45, 33, 29, 39];
const mixed = [12, 'Hello', true, null];

// ---------- Array Constructor -----------
const fruits = new Array('apple', 'grape', 'orange');

x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favorite fruit is an ${fruits[2]}`;

x = numbers.length;

fruits[2] = 'pear';

//fruits.lenght = 2;

fruits[3] = 'strawberry';

fruits[fruits.lenght] = 'blueberry';
fruits[fruits.lenght] = 'peach';

x = fruits;

// console.log(x);

// -----------------------------------------------------
const arr = [34, 55, 95, 20, 15, 62];

// arr.push(100);

// arr.pop();

// arr.unshift(99);

// arr.shift();

// arr.reverse();

x = arr.includes(200); // return boolean

x = arr.indexOf(15);

x = arr.indexOf(359); // if the value is not in the array will return -1

x = arr.slice(1, 4); // will not mutate the array

// x = arr.splice(2, 3); // mutate the original array

// ---------- chain an array ---------------
x = arr.splice(1, 4).reverse().toString().charAt(1);

const prutas = ['apples', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// prutas.push(berries);

// x = prutas[3][1];

// const allFruits = [prutas, berries];
// x = allFruits[1][0];

x = prutas.concat(berries);

//---------- Spread Operator (...) ---------------
x = [...prutas, ...berries];

//---------- Flatten Arrays ---------------
const newArr = [1, 2, [3, 4], 5, [6, 7], 8];
x = newArr.flat();

//---------- Static Method on Array Object ---------------
x = Array.isArray(prutas); // checking if is it an array

x = Array.from('12345'); // Convert string to an array

const a = 1;
const b = 2;
const c = 3;
x = Array.of(a, b, c);

// console.log(x);

//---------- Challenge ---------------
// Challenge 1 - Result: [6, 5, 4, 3, 2, 1, 0]
const myArr = [1, 2, 3, 4, 5];
myArr.push(6);
myArr.unshift(0);
myArr.reverse();
// console.log(myArr);

// Challenge 1 - Result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Solution 1:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
const arr3 = arr1.concat(arr2.slice(1));
console.log(arr3);

// Sulotion 2:
const arr4 = [...arr1, ...arr2];
arr4.splice(4, 1);
console.log(arr4);
