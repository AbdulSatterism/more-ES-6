const friends = ['tom hanksi', 'tom cruis', 'tom jarry', 'tom harraian'];

const fLength = friends.map(friend => friend.length);
// console.log(fLength)

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile', price: 10, color: 'blue' },
    { name: 'watch', price: 15, color: 'black' },
    { name: 'Dell laptop', price: 100, color: 'silver' }
];

const productName = products.map(product => product.name);
const productPrice = products.map(p => p.price)
// console.log(productName, productPrice)

// forEach can't return
// const foreach = products.forEach(p => p.color);
// console.log(foreach)

