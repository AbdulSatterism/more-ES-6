// class inheritance or common class declare
class TeamMember {
    name;
    address;
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember {

    groupSupportTime;
    designation = 'Support web dev';
    constructor(name, address, time) {
        super(name, address)
        this.groupSupportTime = time
    }
    startSession() {
        console.log(this.name, 'start a support session')
    }
}

const amir = new Support('Abdul Satter', 'BD', 9.00);
amir.startSession()
console.log(amir)


class StudentCare extends TeamMember {
    designation = 'student care support';
    buildARoutine(student) {
        console.log(this.name, 'build a routine', student)
    }
}

class NeptuneDev extends TeamMember {
    codeEditor;
    designation = 'neptune app dev';
    constructor(name, address, editor) {
        super(name, address)
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version)
    }
}

const neptune = new NeptuneDev('Ash', "bd", 8.00);
neptune.releaseApp(1.00)
console.log(neptune)



const alia = new StudentCare('Aliya Bhat', 'Mumbai');
console.log(alia)