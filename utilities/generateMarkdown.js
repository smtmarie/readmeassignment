function generateProjectUrl(github, title) {
  const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${kebabCaseTitle}`;
}

function renderLicenseBadge(license, github, title) {
  if (license !== "None") {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, title)})`
  }
  return ''
}

function generateMarkdown(data) {
  
    return `    
    
    # ${data.title}

    ${renderLicenseBadge(data.license, data.username, data.title)}

    Description

    ${data.description}

    ## Table of Contents

    * Installation
    * Usage
    * License
    * Contribution
    * Tests
    * Questions
    
    To install all necessary dependencies run the following command: ${data.installation}

    Usage:
    ${data.usage}

    Contribution:
    ${data.contribution}

    To run tests, utilize the following command:
    ${data.tests}

    License:

    ${data.license}

    <img src= "${data.avatar_url}"></img>

    Creator Github account: [Github](${data.url})`;

}

module.exports = generateMarkdown;

