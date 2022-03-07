let availableWindows = {}

Cypress.Commands.add('stubAndSubscribeToNextWindow', (givenName) => {
    if(!availableWindows['main']){
        availableWindows['main'] = cy.state('window')
    }
    cy.window().then(win => {
        cy.stub(win, 'open').callsFake((url, a, b) => {
            availableWindows[givenName] = win.open.wrappedMethod.call(win, url, a, b)
            return availableWindows[givenName]
        })
    })
})

Cypress.Commands.add('switchToWindowAndWaitForID', (givenName, id) => {
    if(!availableWindows[givenName]){
        cy.log('There is no such window ! Are you sure you used StubAndSuscribeToNextWindow and/or you waited for the window to open first ? ')
    }
    function finalize(){

    let promise = new Cypress.Promise((resolve) => {
        let popup = availableWindows[givenName]
      
        function checkReady() {
        console.log(availableWindows[givenName])
         let element = popup.document.getElementById(id)
         if (!(typeof element != 'undefined' && element != null)) {
          setTimeout(() => {
           checkReady()
          }, 32) // arbitrary delay
         } else {
          cy.state('document', popup.document)
          cy.state('window', popup)
          setTimeout(resolve, 2000)
         }
        }
      
        checkReady()
       })
       return promise
      }

      return finalize()
})

Cypress.Commands.add('switchToMainWindow', () => {
    if(!availableWindows['main']){
        cy.log('No Main Window')
    }
    function finalize(){

    let promise = new Cypress.Promise((resolve) => {
        let popup = availableWindows['main']
          cy.state('document', popup.document)
          cy.state('window', popup)
          setTimeout(resolve, 2000)
            })
        return promise
      }

      return finalize()
})