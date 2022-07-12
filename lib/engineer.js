const Employee = require('./lib/employee');

class Engineer extends Employee {
    constructor(name, Id, email) {
        this.name = name;
        this.Id = Id;
        this.email - email;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;
