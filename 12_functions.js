// FUNCTION DECLARATION
function greet(name) {
    return 'hello ' + name;
}

console.log(greet('Ranjan'));


// FUNCTION EXPRESSION
const square = function(x) {
    return x*x; 
}

console.log(square(12));

// Immediately Invocable Function Expression - (IIFEs)
(function(name) {
    console.log(`hello ${name}`);
})('Ranjan')

// Methods - When a function is put inside an object, its called Method
const todo = {
    add: function() {
        console.log('add to do...');
    },
    edit: function(id) {
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function() {
    console.log('Delete todo....');
}

todo.add();
todo.edit(12);
todo.delete();