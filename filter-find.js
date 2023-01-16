const numbers = [5, 45, 78, 45, 62, 9, 10, 34, 30, 2, 4, 20, 21, 1, 5];
// const numberMap = numbers.map(p => p);

// filter  work with condition 
const smallNumber = numbers.filter(number => number < 10)
const bigNumber = numbers.filter(number => number > 20)
// console.log(smallNumber, bigNumber)

// filter  give an array 
const products = [
    { name: 'water bottle', price: 500, color: 'yellow' },
    { name: 'mobile', price: 1550, color: 'blue' },
    { name: 'watch', price: 150, color: 'black' },
    { name: 'watch mobile', price: 1050, color: 'black' },
    { name: 'Dell laptop', price: 10000, color: 'silver' }
];

const expensive = products.filter(p => p.price > 500);
const color = products.filter(p => p.color == 'black');

// console.log(color)

// find give an element this is the different of find and filter
// find work also fileter it's need condition
// find give onle first match element 

const yelloItem = products.find(p => p.color == 'yellow');
const unknown = products.find(p => p.color == 'gold');
const blackItem = products.find(p => p.color == 'black')
console.log(blackItem)
