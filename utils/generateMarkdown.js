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

const generateLicense = (type) => {
    let color;
    if (type === "BSD") color = "red";
    if (type === "NPM") color = "orange";
    if (type === "GPL") color = "lightblue";
    if (type === "Apache") color = "purple";
    if (type === "MIT") color = "green";

    return (
      `
<h3>License</h3>
<img src = https://img.shields.io/badge/license-${type}-${color}" alt = "badge-${type}" height = "40" />`
    )
  }

const generateMarkdown = ({
  title,
  description,
  installation,
  usage,
  license,
  contributing,
  questions,
  test,
  gitHub,
  email,
}) => {
  const template = (
    `
# ${title}


## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributors](#contributors)
6. [Questions](#questions)
7. [Test](#test)
8. [GitHub](#information)
9. [Email](#information)

## Description
${description}


## Installation
${installation}


## Usage
${usage}


## License
${generateLicense(license)}

## Contributors
${contributing}


## Questions
${questions}


## Test
${test}


## Information
${gitHub}
${email}

`
  );
  fs.writeFileSync("./utils/README.md", template)
  process.exit();
};


module.exports = {
  generateMarkdown
}