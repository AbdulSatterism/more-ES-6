const fish = { name: 'King Hilsha', id: 53, price: 9000, phone: '017......', address: "Chadpur", dress: 'silver' };

// const phone = fish.phone;
// const price = fish.price;
// const name = fish.name;
// const dress = fish.dress;


// destructing 
const { phone, dress, name, price } = fish;
// console.log(phone, name)


const company = {
    name: "GP",
    ceo: { id: 1, name: 'ajmol', food: 'puska' },
    web: { work: 'website development', employee: 22, framework: 'react' }
};
// const work = company.web.work;
// destructing
const { work, framework } = company.web;
const { food } = company.ceo;
// console.log(work, food)


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
                name: 'me',
                country: 'from bd'
            }
        }
    }
};
const { country } = office.ceo.framework.developer;
console.log(country)
