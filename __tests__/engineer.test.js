const Engineer = require('../lib/Engineer');

// tests creation of Engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('', '', '', '');
    
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

// test for getGithub()
test('gets Engineer github', () => {
    const engineer = new Engineer('Eno', '2', 'eno@gmail.com', 'pwkinsley87');

    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// test for getRole() 
test('gets Employee role', () => {
    const engineer = new Engineer('Eno', '2', 'eno@gmail.com', 'pwkinsley87');

    expect(engineer.getRole()).toEqual("Engineer");
});