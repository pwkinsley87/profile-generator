const Employee = require('../lib/employee');

test('creates an Employee object', () => {
    const employee = new Employee('', '', '');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

//test for getID()
test('gets Employee name', () => {
    const employee = new Employee('Snooks', '2', 'snookseaglin@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

//test for getEmail()
test('gets Employee email', () => {
    const employee = new Employee('Snooks', '2', 'snookseaglin@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});


//test for getRole()
test('gets Employee role', () => {
    const employee = new Employee('Snooks', '2', 'snookseaglin@gmail.com');

    expect(employee.getRole()).toEqual(expect.any(String));
});