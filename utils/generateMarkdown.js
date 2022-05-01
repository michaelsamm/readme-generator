// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `${license.badge}`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `[${license.name}](${license.link})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.name === 'None') {
    return 'There are no licenses associated with this project.'
  }
  return `
  ${renderLicenseLink(license)}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  [Description](#description)  
  [Table of Contents](#table-of-contents)  
  [Installation](#installation)  
  [Usage](#usage)  
  [License](#license)  
  [Contributing](#contributing)  
  [Tests](#tests)  
  [Questions](#questions)


  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  The below license covers this application. Please review before modifying for your own work.  
  ${renderLicenseSection(data.license)}

  ## Contributing
  This project was completed with help from:  
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Please direct any comments or inquiries using the resources below:  
  GitHub: [${data.username}](https://github.com/${data.username})  
  Email: <${data.email}>
`;
}

module.exports = generateMarkdown;
