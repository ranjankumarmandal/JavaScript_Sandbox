// window is the global object in client side JavaScript
// window is the window / client side environment in browser not the whole browser
// for DOM Manipulation - document is the property of window object

// window methods / objects / properties

window.console.log('hello');
console.log('hello');

// alert
window.alert('hello world');
alert('hello world');

// prompt
const input = prompt();
alert(input);

// confirm
if(confirm('Are you sure?')) {
    console.log('YES');
} else {
    console.log('NO');
}

//-----------------------------------------------------

let val;

// OUTER HEIGHT & WIDTH
val = window.outerHeight;
val = window.outerWidth;

// INNER HEIGHT & WIDTH
val = window.innerHeight;
val = window.innerWidth;

// SCROLL POINTS
val = window.scrollY;
val = window.scrollX;

// LOCATION OBJECT - we can work with url used in the current webpage with this
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// window.location.href = 'https://www.google.com';    // Redirect
// window.location.reload;  // reload page continuously automatically

// HISTORY OBJECT - we can work with history feature with this
// window.history.go(-1);

// NAVIGATOR OBJECT - we can find info related to our browser with this 
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;


console.log(val);