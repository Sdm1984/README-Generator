
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of this project',
            name: 'title'
        },
        {
            type: 'input',
            message: 'What was your motivation?',
            name: 'motivation',
        },
        {
            type: 'input',
            message: 'Why did you build this project?',
            name: 'why',
        },
        {
            type: 'input',
            message: 'What problem does it solve?',
            name: 'problem',
        },
        {
            type: 'input',
            message: 'What did you learn from the project?',
            name: 'learn',
        },
        {
            type: 'input',
            message: 'How can a user install this application?',
            name: 'install',
        },
        {
            type: 'input',
            message: 'Add a screenshot using ![alt text](assets/images/screenshot.png)',
            name: 'screenshot',
        },
        {
            type: 'input',
            message: 'List all collaborators and their GitHub profile links',
            name: 'contributors',
        },
        {
            type: 'input',
            message: 'Please list third-party assess or sources used',
            name: 'thirdparty',
            
        },
        {
            type: 'input',
            message: 'How can a user test the application?',
            name: 'test',
        },
        {
            type: 'input',
            message: 'Add your GitHub so users can follow you',
            name: 'github',
            
        },
        {
            type: 'input',
            message: 'Add your email so users can contact you',
            name: 'email',
            
        },
        {
            type: 'lists',
            message: 'Choose a license for the application',
            name: 'license',
            choices:['MIT', 'Apache', 'Boost', 'BSD 3', 'BSD 2']
                  
        },
        
    ])
    .then((data) => {
        console.log(data);
        fs.writeFile('README.md', generateMarkdown(data), 
        error =>{
            if (error) {
                console.log('Please input all the data')
            }
                console.log('Your README was generated')
            } 
        );
    })

