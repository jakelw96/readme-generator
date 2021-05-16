// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license.licenseSelect) {
    return '';
  };
  
  const badgeReturn = (license.licenseSelect).toString();
  
  if (badgeReturn === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'; 
  } else if (badgeReturn === 'APACHE') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (badgeReturn === 'GPL V3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)';
  } else if (badgeReturn === 'AGPL V3') {
    return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)';
  } else if (badgeReturn === 'BSD 3') {
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license.licenseSelect) {
    return '';
  };

  const linkReturn = (license.licenseSelect).toString();
  
  if (linkReturn === 'MIT') {
    return '[MIT](https://choosealicense.com/licenses/mit/)';
  } else if (linkReturn === 'APACHE') {
    return '[APACHE](https://choosealicense.com/licenses/apache-2.0/)';
  } else if (linkReturn === 'GPL V3') {
    return '[GPL V3](https://choosealicense.com/licenses/gpl-3.0/)';
  } else if (linkReturn === 'AGPL V3') {
    return '[AGPL V3](https://choosealicense.com/licenses/agpl-3.0/)';
  } else if (linkReturn === 'BSD 3') {
    return '[BSD 3](https://opensource.org/licenses/BSD-3-Clause)';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license.licenseSelect) {
    return '';
  } else {
  return `## License 
    
  ### ${license.licenseSelect}
  This application is covered under the ${license.licenseSelect} license. To learn more about this license,
  please click the link. ${renderLicenseLink(license)}
  `;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data)}
  
## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
  
## Installation
  
${data.instructions}

## Usage

${data.usage}

${renderLicenseSection(data)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

[GitHub page](https://github.com/${data.github})
  
Email Address: ${data.email}

${data.contact}
`;
}

module.exports = generateMarkdown