//Function to generate the README file from the data provided by the user
function generateMarkdown(data) {
  const gitHub = `https://github.com/${data.username}`;
  let licenseBadge = "";

  // Chosen license displays at top of page
  switch (data.license) {
    case "MIT":
      licenseBadge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Apache 2.0":
      licenseBadge =
        "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GPL 3.0":
      licenseBadge =
        "[![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "BSD 3-Clause":
      licenseBadge =
        "[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "ISC":
      licenseBadge =
        "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      break;
    default:
      licenseBadge = "";
  }

  //README layout
  return `
  # ${data.title}

  ${licenseBadge}

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
  Link to creator's GitHub: [${data.username}](${gitHub})

`;
}

module.exports = generateMarkdown;
