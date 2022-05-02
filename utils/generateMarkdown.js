// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  // If there is no license, return an empty string
  if (license.name === 'None') {
    return ''
  }
  return `${license.badge}`
}

// Function that returns the license link along with its name - called from renderLicenseSection
function renderLicenseLink(license) {
  return `[${license.name}](${license.link})`
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  // If there is no license, return a separate message and stop
  if (license.name === 'None') {
    return 'There are no licenses associated with this project.'
  }
  return `
  ${renderLicenseLink(license)}
  `;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  // Each section pulls data from the corresponding data object from the prompt answers; the license badge displays next to the title and a separate function is referenced to create the license section
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

// Export the completed markdown raw text
module.exports = generateMarkdown;
