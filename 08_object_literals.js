const person = {
    firstName: 'Ranjan',
    lastName: 'Mandal',
    age: 30,
    email: 'ranjancit2k15cse@gmail.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Bengalore',
        state: 'Karnataka'
    },
    getBirthYear: function() {
        return 1998;
    }
}

let val;

val = person;

// get specific value
val = person.firstName; /* recommended */
val = person['firstName'];
val = person.age;
val = person.email;
val = person.hobbies[1];
val = person.address.state;
val = person.getBirthYear();

console.log(val);

// array of object literals
const people = [
    {name: 'Ranjan', age: 23},
    {name: 'Brad', age: 76},
    {name: 'Nancy', age: 40}
];

for(let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}