// for loop
for(let i = 0; i < 10; i++) {
    console.log(i);
}

// while loop
let i = 0;
while(i < 10) {
    console.log(i);
    i++;
}

// do while loop
let j = 0;
do {
    console.log(i);
    i++;
} while(i < 10);

// ----------------------------------------------

// for - in loop
const user = {
    firstName: 'Ranjan',
    lastName: 'Mandal',
    age: 23
}

for(x in user) {
    console.log(`${x}: ${user[x]}`);
}

// forEach & map loop - map returns a new array, whereas .forEach doesn't return anything
const cars = ['tata', 'mahindra', 'swift', 'Suzuki'];

cars.forEach((car, index, array) => {
    console.log(`${index}: ${car}`);
})

let result = cars.map((car) => car);
console.log(result);