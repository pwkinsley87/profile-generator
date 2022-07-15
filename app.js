const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const { resolve } = require('path');

const employees = [];

function startApp() {
    startHTML();
    selectTask();
}

function selectTask() {
    inquirer.prompt([{
        type: "list",
        message: "Select which task you would like to perform",
        name: 'task',
        choices: ["Add a Team Member", "Quit"]
        }])
        .then(({ task }) => {
            if(task === "Add a Team Member") {
                return addMember();
            } else {
                return endHTML();
            }
        })    

};  
    

function addMember() {
    inquirer.prompt([{
        type: "input",
        message: "Please enter the new team member's name.",
        name: "name"
    },
    {
        type: "list",
        message: "Please select the new team member's role",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ],
        name: "role"
    },
    {
        type: "input",
        message: "Please enter the new team members' Employee ID.",
        name: "id"

    },
    {
        type: "input",
        message: "Please enter the new team members' email address",
        name: "email"
    }])
    .then(function({name, role, id, email}) {
        let roleInfo = "";
        if (role === "Engineer") {
            roleInfo = "GitHub Username";
        } else if (role === "Manager") {
            roleInfo = "Office Number";
        } else {
            roleInfo = "University Name"
        }
        inquirer.prompt([{
            message: `Enter team members' ${roleInfo}`,
            name: "roleInfo"
        },
        {
            type: "list",
            message: "Would you like to add more new team members?",
            choices: [
                "yes",
                "no"
            ],
            name: "anotherNewMember"

        }])
        .then(function({roleInfo, anotherNewMember}) {
            // let anotherNewMember;
            if (role === "Manager") {
                anotherNewMember = new Manager(name, id, email, roleInfo);
            } else if (role === "Engineer") {
                anotherNewMember = new Engineer(name, id, email, roleInfo);
            } else {
                anotherNewMember = new Intern(name, id, email, roleInfo);
            }
            employees.push(anotherNewMember);
            addHTML(anotherNewMember)
            .then(function() {
                if (anotherNewMember === "yes") {
                    addMember();
                } else {
                    endHTML();
                }
            });
        });
    });    
}

function startHTML() {
    const HTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha256-MfvZlkHCEqatNoGiOXveE8FIwMzZg4W85qfrfIFBfYc= sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" 
        crossorigin="anonymous" link rel="stylesheet">
        <title>Acme Inc. Team Profile</title>
    </head>
    <body>
        <nav class="navbar bg-dark">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Acme Inc. Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`
    fs.writeFile("./output/index.html", HTML, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("and so it begins");
}

function addHTML(anotherNewMember) {
    return new Promise(function(res, rej) {
        const name = anotherNewMember.getName();
        const id = anotherNewMember.getId();
        const role = anotherNewMember.getRole();
        const email = anotherNewMember.getEmail();
        let data = "";
        if (role === "Manager") {
            const officeNumber = anotherNewMember.getOfficeNumber();
            data = `<div class="col-6">
            <div class="card mx-auto mb-5" style="width: 24rem">
            <h3 class="card-header">${name}<br>Facility Manager</h3>
            <ul class="list-group">
                <li class="ulListItem">Employee ID: ${id}</li>
                <li class="ulListIten">Employee Email: ${email}</li>
                <li class="ulListItem">Office Phone: ${officeNumber}</li>
            </ul>
            </div>      
        </div>`;
        } else if (role === "Engineer") {
            const gitHub = anotherNewMember.getGitHub();
            data = `<div class="col-6">
            <div class="card mx-auto mb-5" style="width: 24rem">
            <h3 class="card-header">${name}<br>Reverse Logistics Engineer</h3>
            <ul class="list-group">
                <li class="ulListItem">Employee ID: ${id}</li>
                <li class="ulListItem">Employee Email: ${email}</li>
                <li class="ulListItem">Employee GitHub: ${gitHub}</li>
            </ul>
            </div>
        </div>`;
        } else {
            const school = anotherNewMember.getSchool();
            data = `<div class="col-6">
            <div class="card mx-auto mb-5" style="width: 24rem">
            <h3 class="card-header">${name}<br>Sales Intern</div>
            <ul class="list-group">
                <li class="ulListItem">Employee ID: ${id}</li>
                <li class="ulListItem">Empoyee Email: ${email}</li>
                <li class="ulListItem">Employee School: ${school}</li>
                
            </ul>
            </div>
        </div>`;
        }
        console.log("Adding new team member.");
        fs.appendFile("./output/index.html", data, function (err) {
            if (err) {
                console.log(err);
            };
            return resolve();
        });
    });
};

function endHTML() {
    const HTML = ` </div>
     </div>
</body>
</html> `;

    fs.appendFile("./output/index.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("It is done.")
};

startApp();