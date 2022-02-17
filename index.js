const inquirer = require('inquirer');
const fs = require('fs');


const readMe = ()=>{
    return inquirer.prompt([
        {
            type:'input',
            name:'title',
            message:'Enter the title of your project. ',
        },
        {
            type:'input',
            name:'description',
            message:'Add project description.',
        },
        {
            type:'input',
            name:'Contents',
            message:'Add a Table of Contents (Optional).',
        },
        {
            type:'input',
            name:'installation',
            message:'What are the steps for install on your project?',
        },
        {
            type:'input',
            name:'usage',
            message:'Add instructions and examples for use.',
        },
        {
            type:'input',
            name:'credits',
            message:'List your collaborators, if any.',
        },
        {
            type:'input',
            name:'license',
            message:'Let other develpoers now what they can and connot do with your projcect.',
        },
        {
            type:'input',
            name:'features',
            message:'Add the features of your project if you have any.'
        },
        {
            type:'input',
            name:'contribute',
            message:'Add anybody or anything that helped contribute to the page.'
        },
        {
            type:'input',
            name:'test',
            message:'Write tests for your application.Then provide example on how to run them here.',
        },
    ]);
};

const result = ()=>{
    readMe()
    .then((ans)=>fs.writeFile('templateREADME.md',template(ans),(err)=>{
        if(err){
            throw err;
        }else{
            console.log("File has been written\n");
        }
    }))
}
result();

const template = ({title, description, contents, installation, usage, credits, license, features, contribute, test})=>
`# ${title}

## Description

${description}

## Table of Contents (Optional)

${contents}

## Installation

${installation}

## Usage

${usage}

## Credits

${credits}

## License

${license}

## Features

${features}

## How to Contribute

${contribute}

## Tests

${test}`;
