// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license === 'MIT') {
  return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)'
}
if (license === 'Apache') {
  return '![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
}
if (license === 'Boost') {
  return '![License: Boost](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
}
if (license === 'BSD 3') {
  return '![License: BSD 3](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)T)'
}
if (license === 'BSD 2') {
  return '![License: BSD 2](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  - ${data.motivation}
  - ${data.why}
  - ${data.problem}
  - ${data.learn}

## Tabe of Contents
-[License](#license)
-[Installation](#installation)
-[Usage](#usage)
-[Credits](#contributors & credit)
-[Tests](#tests)
-[Questions](#questions)


## License
-${renderLicenseBadge(data.license)}

Refer to [https://choosealicense.com/](https://choosealicense.com/).

## Installation
To install this application, please follow the steps below:
-${data.install}

## Usage

![alt text](assets/images/screenshot.png)

## Contributors & Credit
-${data.contributors}
-${data.thirdparty}

## Tests

-${data.test}

## Questions

If you have any questions about this repo/project, please feel free to contact me at ${data.email}. You can find more of my work at [${data.github}] (http://github.com/${data.github}).

`;

}

module.exports = generateMarkdown;

