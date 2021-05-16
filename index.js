const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project name?(Required)',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username. (Required)',
            validate: gitInput => {
                if (gitInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contact',
            message: 'How can you be reached for additional questions? (Required)',
            validate: contactInput => {
                if (contactInput) {
                    return true;
                } else {
                    console.log('Please enter contact instructions for additional questions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'What does your application do?(Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'How do you install your project and get it running?(Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please provide instructions to install your project!');
                    return false;
                }
            }
        },
        {
           type: 'input',
           name: 'usage',
           message: 'How do you use your application?(Required)',
           validate: usageInput => {
               if (usageInput) {
                   return true;
               } else {
                   console.log('Please explain how to use your application!');
                   return false;
               }
           }
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How would someone contribute to your project?',
            validate: contributeInput => {
                if (contributeInput) {
                    return true;
                } else {
                    console.log('Please explain how to contribute to your application!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How do you test your application?',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please explain how to test your application!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'licenseConfirm',
            message: 'Would you like to add a license?',
            default: true
        },
        {
            type: 'list',
            name: 'licenseSelect',
            message: 'Which license would you like your project to have?(Required-Please choose one)',
            choices: ['MIT', 'APACHE', 'GPL V3', 'AGPL V3', 'BSD 3'],
            when: (response) => response.licenseConfirm === true,
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please select a license!');
                    return false;
                }
            }
        }
    ]);

};


// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./README.md', data, err => {
        if (err) {
            return;
        } else {
            console.log("README has been created!")
        }
    })
};

// TODO: Create a function to initialize app
function init() {
    questions()
        .then(readmeTemplate => {
           return generateMarkdown(readmeTemplate)
        })
        .then(readmeData => {
            return writeToFile(readmeData)
        })
};
// Function call to initialize app
init();

