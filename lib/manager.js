const Employee = require('../lib/employee');

class Manager extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
    }
    getRole() {
        return "Manager"
    }
}

module.exports = Manager;