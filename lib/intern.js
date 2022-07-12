const Employee = require('./lib/employee');

class Intern extends Employee {
    constructor(name, Id, email) {
        this.name = name;
        this.Id = Id;
        this.email= email;
    }
    getRole() {
        return "Intern"
    }
}

module.exports = Intern;