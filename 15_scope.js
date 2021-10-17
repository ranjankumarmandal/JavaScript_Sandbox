// var - Function / global scope
// let & const - block level scope

// Hence try to use "let & const" as much as possible because there is security issue with "var" becuase its global value gets changed if declared with the same name inside a block and so on. Refer google for more explation.
var a = 1;
let b = 2;
const c = 3;

test = () => {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function Scope: ', a, b, c);
}
test();

if(true) {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Block Scope: ', a, b, c);
}

console.log('Global Scope: ', a, b, c);

