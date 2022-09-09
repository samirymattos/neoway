import { InitialPage } from "./index";

describe('InitialPage.cy.js', () => {
  it('playground', () => {
    cy.mount(<InitialPage/>)
    cy.get("#the-verge")
      .should('be.visible')
      .contains('Apple')
    cy.contains('Recentes').click()
  })
})