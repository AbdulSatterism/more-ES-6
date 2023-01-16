// declare variable based on the name of an object property
const myObject = { x: 2, y: 5, z: 54, h: 58 };
const { x, h } = myObject;
// console.log(myObject ? x : p)
// console.log(x, h)

// destructuring array
const [p, q] = [45, 37, 4, 84];
// console.log(p, q)

const [best, faltu] = [45, 85];
// console.log(best, faltu)

// for object 
const { sky, soil } = { sky: 'blur', soil: 'mati' }

// chaning
// many complex destructing object 
const office = {
    name: 'Hero',
    ceo: {
        name: 'Me',
        work: 'developer',
        framework: {
            design: 'HTML, css',
            development: 'javascript, react, node js',
            developer: {
                name: 'abdul satter',
                country: 'from bd'
            }
        }
    }
};
// console.log(office.ceo.framework.developer.name)
console.log(office?.backend?.frame.one)
