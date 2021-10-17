const color = 'red';

switch(color) {
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}

let day;

switch(new Date().getDay()) {
    case 0:
        day = 'sunday';
        break;
    case 1:
        day = 'monday';
        break;
    case 2:
        day = 'tuesday';
        break;
    case 3:
        day = 'wednesdary';
        break;
    case 4:
        day = 'thursday';
        break;
    case 5:
        day = 'saturday';
        break;
} 

console.log(`Today is ${day}`);