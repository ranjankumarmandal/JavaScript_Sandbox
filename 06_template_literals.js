const name = 'Ranjan';
const age = '23';
const job = 'Web Developer';
const city = 'Bengalore';
let html;
function hello() {
    return 'hello';
}

// without template strings (ES5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';
html = '<ul>' +
        '<li> Name: ' + name + '</li>' + 
        '<li> Age: ' + age + '</li>' + 
        '<li> Job: ' + job + '</li>' + 
        '<li> City: ' + city + '</li>' +
        '</ul>'; 



// with template strings or template literals
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2 + 2}</li>
        <li>${hello()}</li>
        <li>${(age > 40) ? 'over 40' : 'under 40'}</li>
    </ul>
`;


document.body.innerHTML = html;