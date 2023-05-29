/* eslint-disable no-undef */
describe('Transactions list', () => {
  beforeEach(() => {
    cy.intercept('GET', '/all', { fixture: 'transactions.json' })
    cy.visit('/')
  })

  it('Two transactions should be showed', () => {
    cy.contains(/My Transactions/gi).should('be.visible')
    cy.get('table tbody tr')
      .should('have.length', 2)
      .and('contain', 'Amie Whitley')
      .and('contain', 'Earnestine Castillo')
  })

  it('Specific balance should be shown ', () => {
    cy.contains(/Balance 1694.41 PLN/gi).should('be.visible')
  })
})
