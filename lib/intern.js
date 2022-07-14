const Employee = require('../lib/employee');

class Intern extends Employee {
    constructor(name, Id, email) {
        super(name, Id, email);
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;