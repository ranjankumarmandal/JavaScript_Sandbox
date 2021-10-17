const numbers = [11, 22, 33, 44, 55, 66, 12, 8, 91];
const numbers2 = new Array(11, 22, 33, 44, 55, 66, 12, 8, 91);
const fruit = ['banana', 'apple', 'orange', 'pear'];
const mixed = [22, 'hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// length
val = numbers.length;

// Array.isArray();
val = Array.isArray(numbers);

// get single values from an array
val = numbers[3];

// insert into arrays
numbers[2] = 100;

// find index of value
val = numbers.indexOf(12);

// MUTATING ARRAYS  
numbers.push(250); /* add new value at last index */
numbers.unshift(120); /* add new value at first index */

numbers.pop(); /* remove value at last index */
numbers.shift(); /* remove value at first index */
numbers.splice(1, 3); /* delete a value (starting index, number of values need to delete) */

// reverse
numbers.reverse();


// CONCATE ARRAYS
val = numbers.concat(numbers2);

// SORT ARRAYS
val = fruit.sort(); /* for string values */
val = numbers.sort((x, y) => x - y); /* for numbers */
val = numbers.sort((x, y) => y - x); /* for reverse sorting */

// find()
val = numbers.find((num) => num < 50); /* first value in array under 50 */ 
val = numbers.find((num) => num > 50); /* first value in array over 50 */

console.log(numbers);
console.log(val);