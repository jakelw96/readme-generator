const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project name?',
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
            name: 'projDescription',
            message: 'What does your application do?'
        },
        {
            type: 'input',
            name: 'installInstructions',
            message: 'How do you install your project and get it running?',
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
           message: 'How do you use your application?',
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
        }
    ])
    .then(writeToFile())
};
questions();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md',  )
}

// TODO: Create a function to initialize app
function init()
    questions()
      .then(writeToFile())
) {}

// Function call to initialize app
init();
