const num1 = 100;
const val2 = 50;
let val;

// simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math object
val = Math.PI;
val = Math.E;
val = Math.round(2.8); /* Automatic rounding - output is 3 */
val = Math.ceil(2.4); /* manual upper bound - output is 3 */
val = Math.floor(2.8);  /* manual lower bound - output is 2 */
val = Math.sqrt(64);
val = Math.abs(-3); /* absolute value or always +ve value - output is 3 */
val = Math.pow(8, 2); /* math power - output is 64 */
val = Math.min(2, 33, 44, 3, 42, 12, 0, -3, 34); /* minimum - output is -3 */
val = Math.max(2, 33, 44, 3, 42, 12, 0, -3, 34); /* maximum - ouput is 42 */
val = Math.random(); /* any random whole number with decimal or without decimal value */

val = Math.floor(Math.random() * 20 + 1); /* random integer number between 1 and 19 ie., without decimal value*/




console.log(val);