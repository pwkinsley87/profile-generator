const Employee = require('../lib/employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager'
    }
    getOfficeNumber() {
        return '1-800-615-3767'
    }
};

module.exports = Manager;