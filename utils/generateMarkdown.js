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
  console.log(`
  ${renderLicenseBadge(license)} ${renderLicenseLink(license)}
  `)
  return `
  ${renderLicenseBadge(license)} ${renderLicenseLink(license)}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

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
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  [${data.username}](https://github.com/${data.username})  
  <${data.email}>
`;
}

module.exports = generateMarkdown;
