//  object class main objective is it's make object one shape
// class define also upper case 

class Support {
    name;
    designation = 'support wev dev';
    address = "BD";
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session')
    }
}

const amir = new Support("Amir Khan", 'BD');
const salman = new Support("Salman Khan", "UK")
amir.startSession()
// console.log(amir, salman)
