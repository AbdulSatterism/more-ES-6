//1. let const 
const myName = 'MD Abdul Satter';
let phone = 'Samsung'

//2. templete string 
const notes = `I am ${myName} i don't have a layli`;
// console.log(notes)

// 3. default parameter // spread or three dot(...) 
function maxNum(array = []) {
    const max = Math.max(...array);
    return max
}

// arrow function 
const square = (x) => x * x;

