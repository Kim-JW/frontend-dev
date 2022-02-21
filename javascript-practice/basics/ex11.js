/**
 * Array 메소드(Array.prototype)
 * 
*/

var colors = ['black', 'white', 'yellow']
var fruits = ['apple', 'mango', 'banana']

// concat
var a1 = fruits.concat(colors);
console.log(a1);

// pop, push: stack 지원
var color = colors.pop();
console.log(color, colors);

// join


// reverse
console.log(fruits);
fruits.reverse();
console.log(fruits);

// shift
var numbers = [1000, 3000, 2000, 5000, 4000, 8000];
var number = numbers.shift();
console.log(number, numbers);

// sort
numbers.sort();
console.log(numbers);


// slice
var numbers = numbers.slice(1, 3);
console.log(numbers);

// splice
