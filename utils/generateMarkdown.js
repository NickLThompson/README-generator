// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README


const fs = require("fs");

const generateMarkdown = ({
  title,
  description,
  installation,
  usage,
  license,
  contributing,
  questions
}) => {
  console.log("generating page...");
  const template = (
`
# ${title}

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributors](#contributors)
6. [Test](#test)
7. [Questions](#questions)

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contributors
${contributing}

## Questions
${questions}

## Test
`
  );
 fs.writeFileSync("./utils/README.md", template)
 console.log("template generated!");
  process.exit();
};


module.exports = {
  generateMarkdown
}