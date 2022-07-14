const Intern = require('../lib/intern');

test('Creates an Intern object.', () => {
    const intern = new Intern('', '', '', '');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
});

test('gets Intern name', () => {
    const intern = new Intern('Bunk', '5', 'bunkjohnson@gmail.com');

    expect(intern.getName()).toEqual(expect.any(String));
})

test('gets Intern email', () => {
    const intern = new Intern('Bunk', '5', 'bunkjohnson@gmail.com');

    expect(intern.getEmail()).toEqual(expect.any(String));
});

test('gets Intern role', () => {
    const intern = new Intern('Bunk', '5', 'bunkjohnson@gmail.com');

    expect(intern.getRole()).toEqual('Intern');
});

test('gets Intern school', () => {
    const intern = new Intern('Bunk', '5', 'bunkjohnson@gmail.com', 'TSU');

    expect(intern.getSchool()).toEqual('TSU');
});