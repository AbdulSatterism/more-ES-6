const numbers = [12, 45, 4, 7];
const output = [];

// function doubleOld (number){
//     number*2
// }

// arrow function
const doubleIt = (number) => number * 2

for (const number of numbers) {
    const result = doubleIt(number);
    output.push(result)
};
// console.log(output)

// map
// const output2 = numbers.map(doubleIt);
const output2 = numbers.map(x => x * 3)
console.log(output2)

const square = numbers.map(x => x * x);
console.log(square)