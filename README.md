# cypress-window-helper

`v1.1.0`

cypress-window-helper aims to switch and interact with pop-up windows opened within the UI.

This adds 3 custom commands that will help you catching pop-up and/or new tabs, interaction with them and switch back to the main window.

Future update might include new features such as closing the pop-up.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [It isn't working](#it-isnt-working)
- [Contributors](#contributors)
- [License](#license)


## Installation

The package is distributed via [npm][npm] and should be installed as one of your project's `devDependencies`:

```bash
npm install --save-dev cypress-window-helper
```

## Usage

`cypress--window-helper` extends Cypress' `cy` command.
Add this line to your project's `cypress/support/commands.js`:

```javascript
import 'cypress-window-helper'
```

Now you are ready to use the command. Here is a basic example:

```javascript
//this custom command will stub the next 'open' call.
//The parameter is the name given to the window
 it('click button', () => {
      cy.StubAndSuscribeToNextWindow('inputWindow')
      cy.get("#button").click()
  })
```

```javascript
//this custom command will switch to a co.
//1st parameter is the name previously given to the stubbed window
//2nd parameter is the ID waited for in the pop-up window (here #input)
  it('fill the new input', () => {
    cy.switchToWindowAndWaitForID('inputWindow', 'inputID')
    cy.get("#input").type('It works !')
})
```

```javascript
it('fill the main input', () => {
//This custom command will switch back to the main window
    cy.switchToMainWindow()
    cy.get("#input").type('It works again ! ')
})
```

## It isn't working!

This plugin has been made cause those features were critical to me.

I cannot guarantee it will work for all the pop-up and browser (tested in chrome), but I can try to improve it, just open an issue or a PR.

## Contributors

<table>
  <tr>
    <td align="center"><a href="https://github.com/mathias-vandaele"><img src="https://avatars.githubusercontent.com/u/26595978?v=4" width="100px;" alt=""/><br /><sub><b>Mathias Vandaele</b></sub></a><br /><a href="https://github.com/mathias-vandaele" title="Code">💻</a></td>
  </tr>
</table>

## License

ISC