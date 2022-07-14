const Employee = require('../lib/employee');

class Intern extends Employee {
    constructor(name, Id, email, school) {
        super(name, Id, email);
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
};

module.exports = Intern;