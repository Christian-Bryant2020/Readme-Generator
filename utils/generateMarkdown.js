// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Mozilla Public License 2.0':
      licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      return licenseBadge;
    case 'GNU GPLv3':
      licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      return licenseBadge;
    case 'MIT License':
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      return licenseBadge;
    case 'Apache License 2.0':
      licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      return licenseBadge;
    default:
      licenseBadge = "";
      return licenseBadge;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'Mozilla Public License 2.0':
      licenseLink = `https://opensource.org/licenses/MPL-2.0`;
      return licenseLink;
    case 'GNU GPLv3':
      licenseLink = `https://www.gnu.org/licenses/gpl-3.0`;
      return licenseLink;
    case 'MIT License':
      licenseLink = `https://opensource.org/licenses/MIT`;
      return licenseLink;
    case 'Apache License 2.0':
      licenseLink = `https://opensource.org/licenses/Apache-2.0`;
      return licenseLink;
    default:
      licenseLink = "";
      return licenseLink;
  }
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license){
    case 'Mozilla Public License 2.0':
      licenseSection = `Licensed under the ${data.license}; You may obtain a copy of the License at https://opensource.org/licenses/MPL-2.0`;
      return licenseSection;
    case 'GNU GPLv3':
      licenseSection = `Licensed under the ${data.license}; You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0`;
      return licenseSection;
    case 'MIT License':
      licenseSection = `Licensed under the ${data.license}; You may obtain a copy of the License at https://opensource.org/licenses/MIT`;
      return licenseSection;
    case 'Apache License 2.0':
      licenseSection = `Licensed under the ${data.license}; You may obtain a copy of the License at https://opensource.org/licenses/Apache-2.0`;
      return licenseSection;
    default:
      licenseSection = "";
      return licenseSection;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return template = `# ${data.title} ${licenseBadge}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#install)
  - [Usage](#usage)
  - [Contributors](#contributers)
  - [Contact](#contact)
  - [Questions](#questions)
  - [License](#license)
  ## Description 
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.test}
  ## Questions
  Please reach out with any questions through the links below:
  - https://github.com/${data.gitHub}
  - ${data.email}
  ## License
  ${licenseSection}
`;
};


module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
}