// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "ISC") {
    return "[![License: ICL](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "ISC") {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  } else if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "ISC") {
    return `## ISC
    ### ISC License (ISC)  
    [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
    `;
  } else if (license === "MIT") {
    return `## MIT
    ### The MIT License  
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

# Table of Contents

  1. [Description](#description)
  2. [Installation Instructions](#installation-instructions)
  3. [Usage Instructions](#usage-instructions)
  4. [Contributions](#contributions)
  5. [Tests](#tests)
  6. [Questions](#questions)
      1. [Github](#github)
      2. [Reach Me](#reach-me)

## Description
  ${data.description}

## Installation Instructions
  ${data.instructions}

## Usage Instructions
  ${data.usage}

## Contributions
  ${data.contribution}

## Tests
  ${data.tests}

  ${renderLicenseSection(data.license)}

## Questions
### Github
  [${data.username}](https://github.com/${data.username})
### Reach me
  Write me to directly ${data.email}
`;
}

module.exports = { generateMarkdown };
