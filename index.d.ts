declare namespace Cypress {

    interface Chainable {
        stubAndSubscribeToNextWindow(givenName : string) : Chainable
        switchToWindowAndWaitForID(givenName : string, id : string) : Chainable
        switchToMainWindow() : Chainable
    }
}