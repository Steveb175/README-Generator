function generateMarkdown(data) {
  const gitHub = `https://github.com/${data.username}`;

  return `
  # ${data.title}

  ## Description
    ${data.description}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  Packages required to use this application: ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Tests
  To run a test, run this command: ${data.tests}

  ## Questions
  Please direct all questions to ${data.email}
  Link to creator's GitHub: ${gitHub}

`;
}

module.exports = generateMarkdown;
