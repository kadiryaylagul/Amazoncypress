const url= Cypress.env('baseUrl')
describe('Test Suite', () => {
  it('passes', () => {
    cy.visit(url)
  })
 
})