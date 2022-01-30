/// <reference types="cypress" />

describe('test plugin', () => {

  it('open localhost', () => {
    cy.visit('/')
  })

  it('click button', () => {
      cy.StubAndSuscribeToNextWindow('input')
      cy.get("#button").click()
  })

  it('fill the new input', () => {
    cy.switchToWindowAndWaitForID('input', 'input')
    cy.get("#input").type('It works !')
})

it('fill the main input', () => {
    cy.switchToMainWindow()
    cy.get("#input").type('It works again ! ')
})


})