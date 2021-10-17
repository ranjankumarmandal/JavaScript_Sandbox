let val;

// Number to string                                ------------------- Type Conversion --------------- 
val = String(555);
val = String(4 + 4);
// Bool to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1, 2, 3, 4]);

// toString()
val = (5).toString();
val = (true).toString();


// String to number
val = Number('5');
val = Number(true); 
val = Number(false);
val = Number('hello');
val = Number([1, 2, 3]);

val = parseInt('100.31');
val = parseFloat('100.31');

 

// Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// console.log(val.toFixed());

//-------------- Type Coercion : this is type conversion done by JS engine automatically -------------
let val1 = String(5);
let val2 = 6;
sum = val1 + val2;
console.log(sum);
console.log(typeof sum);  // here, typeof will be 'string' not 'number'