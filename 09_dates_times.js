let  val;

const today = new Date();
let birthday = new Date('3-2-1996 11:25:00');
birthday = new Date('March 1 1996');
birthday = new Date('03/01/1996');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(2002);
birthday.setHours(3);
birthday.setMinutes(20);
birthday.setSeconds(32);

console.log(val);