const Manager = require('../lib/manager');

test('Creates a Manager object.', () => {
    const manager = new Manager('', '', '', '');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
});

test('Gets Manager name', () => {
    const manager = new Manager('Eldridge', '3', 'eldridgeholmes@gmail.com', '1-800-615-3767');

    expect(manager.getName()).toEqual(expect.any(String));
});

test('Gets Manager email', () => {
    const manager = new Manager('Eldridge', '3', 'eldridgeholmes@gmail.com', '1-800-615-3767');

    expect(manager.getEmail()).toEqual(expect.any(String));
});

test('Gets Manager role', () => {
    const manager = new Manager('Eldridge', '3', 'eldridgeholmes@gmail.com', '1-800-615-3767');

    expect(manager.getRole()).toEqual(expect.any(String));
});

test("Gets office number", () => {
    const testValue = 1-800-615-3767
    const manager = new Manager('Eldridge', '3', 'eldridgeholmes@gmail.com', '1-800-615-3767');
    
    expect(manager.getOfficeNumber()).toEqual(expect.any(String));
});