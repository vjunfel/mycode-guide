const s = new String('Hello World');
z = typeof s;

z = s.length;

// Access value by key
z = s[0];

z = s.toUpperCase();

z = s.toLowerCase();

z = s.charAt(0); // return letter of index value

z = s.indexOf('d'); // return number of index value

z = s.substring(1, 8);

z = s.slice(-8, -1); // Same as substring but can used negative numbers

z = '   Hello World   ';
z = s.trim(); // remove the white space of the string

z = s.replace('World', 'John'); // replace the value of the first params

z = s.includes('Hello'); // return true or false

z = s.split(''); // return array depends on parameter

console.log(z);

// ------------- Challenge ------------------

const myString = 'developer';
const newString = myString.charAt(0).toUpperCase() + myString.slice(1);
console.log(newString);
