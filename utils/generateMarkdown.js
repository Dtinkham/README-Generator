// let licenseArray = ["APACHE2.0","Boost1.0","BSD2","BSD3","GPL3.0","MIT","No License"]

// let apacheLink="(Apache%202.0-blue.svg)]"
// let boost1Link="Boost%201.0-lightblue.svg)]"
// let bsd2Link="BSD%202--Clause-orange.svg)]"
// let bsd3Link="BSD%203--Clause-blue.svg)]"
// let gpl3Link="AGPL%20v3-blue.svg)]"
// let mitLink="MIT-yellow.svg)]"

// let badgeArray = [apacheLink,boost1Link,bsd2Link,bsd3Link,gpl3Link,mitLink]



//   // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string

// function renderLicenseBadge(license) {
//   for (i=0;i < licenseArray.length,i++;) {
//     if (license === "No license")
//       license = ""
//     if (license === licenseArray[i]) {
//       return "[![License: " + licenseArray[i] + "]" + " (https://img.shields.io/badge/License-" + badgeArray[i] }
//     else 
//       license = ""
//   }
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   for (i=0;i < licenseArray.length,i++;) {
//     if (license === "No license")
//       license = ""
//     if (license === licenseArray[i]) {
//       return `[$(licenseArray[i]}](https://opensource.org/licenses/ + `

// }
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(info) {



  return `# ${info.projectTitle}
  

  ## Table of Contents

  ## Description
  What this project does:

  ${info.description}

  ## Installation
  Here is process to get the project to run:

  ${info.installation}

  ## Usage
  Examples of how to use the project
  
  ${info.usage}

  ##License
  This Project is under the following license:
  ${info.license}

  ##Contributing
  If you are interested in contributing to this project:

  ${info.contribution}

  ##Testing
  Here you can find tests to ensure the project is working correctly:

  ${info.testing}

  ##Questions
  If you have any questions about the project I can be reached at the following addresses
  GitHub: ${info.gitHubUserName}
  Email: ${info.emailAddress}

  `;
}

module.exports = generateMarkdown;
