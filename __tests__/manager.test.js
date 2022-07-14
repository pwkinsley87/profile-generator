const Manager = require('../lib/manager');

test('Creates a Manager object.', () => {
    const manager = new Manager('', '', '');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
});

test('Gets Manager name', () => {
    const manager = new Manager('Eldridge', '3', 'eldridgeholmes@gmail.com');

    expect(manager.getName()).toEqual(expect.any(String));
});

test('Gets Manager email', () => {
    const manager = new Manager('Eldridge', '3', 'eldridgeholmes@gmail.com');

    expect(manager.getEmail()).toEqual(expect.any(String));
});

test('Gets Manager role', () => {
    const manager = new Manager('Eldridge', '3', 'eldridgeholmes@gmail.com')

    expect(manager.getRole()).toEqual(expect.any(String));
});