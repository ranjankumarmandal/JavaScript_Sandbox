const firstName = 'Ranjan';
const lastName = 'Mandal';
const age = 23;
const str = 'Hello there my name is Ranjan';
const tags = 'web development,react,node,js';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;
val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Append
val = 'Satya ';
val += 'Nadella';

// Escaping
val = 'That\'s awesome, I can\'t wait';

// length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// toUpperCase(), toLowerCase()
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0]; /* output is string digit 'r' */

// indexOf()
val = firstName.indexOf('n');  /* first index - output is 2 */
val = firstName.lastIndexOf('n'); /* last index - output is 5 */


// charAt()
val = firstName.charAt(2); /* output is string digit 'n' */
val = firstName.charAt(firstName.length - 1); /* get last string digit */

// substring()
val = firstName.substring(0, 3); /* output is 'ranj' */

// slice()
val = firstName.slice(0, 3); /* output is 'ranj' */
val = firstName.slice(-3); /* output is 'jan' */

// split()                   - Convert a string to an array
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Ranjan', 'Satya');

// includes()
val = str.includes('Hello'); /* output is 'true' */

console.log(val);