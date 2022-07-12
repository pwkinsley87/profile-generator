const Employee = require('./lib/employee');

class Manager extends Employee {
    constructor(name, Id, email) {
        this.name = name;
        this.Id = Id;
        this.email = email;
    }
    getRole() {
        return "Manager"
    }
}

module.exports = Manager;