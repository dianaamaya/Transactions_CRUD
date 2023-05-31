/* eslint-disable no-undef */
describe('Transactions Tests', () => {
  const api = 'http://localhost:8080/api'
  beforeEach(() => {
    cy.intercept('GET', `${api}/all`, { fixture: 'transactions.json' }).as('mockedTransactions')
    cy.intercept('POST', `${api}/save`).as('saveTransaction')
  })

  describe('List transactions', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.wait('@mockedTransactions')
    })

    it('Two transactions should be shown', () => {
      cy.contains(/My Transactions/gi).should('be.visible')
      cy.get('table tbody tr')
        .should('have.length', 2)
        .and('contain', 'Amie Whitley')
        .and('contain', 'Earnestine Castillo')
    })

    it('Specific balance should be shown', () => {
      cy.contains(/Balance 1694.41 PLN/gi).should('be.visible')
    })
  })

  describe('Create transaction', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.get('input[name=amount]').type('900')
      cy.get('input[name=beneficiary]').type('Shields Slater Test')
      cy.get('input[name=account]').type('10103855106271523000000000')
      cy.get('input[name=address]').type('730 Division Place, Tyro, North Carolina, 6679')
      cy.get('input[name="description"]').type('Exercitation nostrud deserunt aliquip ea exercitation tempor cupidatat non.')
      cy.get('form').submit()
      cy.wait('@saveTransaction')
    })

    afterEach(() => {
      cy.get('table tbody tr').contains('td', 'Shields Slater Test')
        .siblings().last().get('div > button').last().click()
      cy.get('.delete-modal button').contains(/Delete/i).click()
    })

    it('Three transactions should be shown', () => {
      cy.get('table tbody tr')
        .should('have.length', 3)
        .and('contain', 'Shields Slater Test')
    })

    it('Specific balance should be shown', () => {
      cy.contains(/Balance 2594.41 PLN/gi).should('be.visible')
    })

    it('Success message should be shown', () => {
      cy.contains(/Transaction created successfully/gi).should('be.visible')
    })
  })

  describe('Update transaction', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.get('input[name=amount]').type('900')
      cy.get('input[name=beneficiary]').type('Shields Slater Test')
      cy.get('input[name=account]').type('10103855106271523000000000')
      cy.get('input[name=address]').type('730 Division Place, Tyro, North Carolina, 6679')
      cy.get('input[name="description"]').type('Exercitation nostrud deserunt aliquip ea exercitation tempor cupidatat non.')
      cy.get('form').submit()
      cy.wait('@saveTransaction')

      cy.get('table tbody tr').contains('td', 'Shields Slater Test')
        .siblings().last().get('div > button.button-update').last().click()
      cy.get('.update-modal input[name=amount]').clear().type('500')
      cy.get('.update-modal input[name=beneficiary]').clear().type('Shields Slater Test')
      cy.get('.update-modal input[name=account]').clear().type('44443855106271523000000000')
      cy.get('.update-modal input[name="description"]').clear().type('Test description')
      cy.get('.update-modal form').submit()
      cy.wait('@saveTransaction')
    })

    afterEach(() => {
      cy.get('table tbody tr').contains('td', 'Shields Slater Test')
        .siblings().last().get('div > button').last().click()
      cy.get('.delete-modal button').contains(/Delete/i).click()
    })

    it('Three transactions should be shown', () => {
      cy.get('table tbody tr')
        .should('have.length', 3)
        .and('contain', 'Shields Slater Test')
    })

    it('Specific balance should be shown', () => {
      cy.contains(/Balance 2194.41 PLN/gi).should('be.visible')
    })

    it('Success message should be shown', () => {
      cy.contains(/Transaction updated successfully/gi).should('be.visible')
    })

    it('Data should be updated', () => {
      cy.get('table tbody tr').contains('td', 'Shields Slater Test').parent()
        .should('contain', '500')
        .and('contain', '44443855106271523000000000')
        .and('contain', 'Test description')
    })
  })

  describe('Delete transaction', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.get('table tbody tr').last().get('div > button').last().click()
      cy.get('.delete-modal button').contains(/Delete/i).click()
    })

    it('One transaction should be shown', () => {
      cy.get('table tbody tr')
        .should('have.length', 1)
        .and('contain', 'Amie Whitley')
    })

    it('Specific balance should be shown', () => {
      cy.contains(/Balance 1038.61 PLN/gi).should('be.visible')
    })

    it('Success message should be shown', () => {
      cy.contains(/Transaction deleted successfully/gi).should('be.visible')
    })
  })

  describe('Search transaction by beneficiary', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('One transaction should be shown', () => {
      cy.get('input.search-beneficiary').type('Amie')
      cy.get('table tbody tr').should('have.length', 1).and('contain', 'Amie Whitley')
    })

    it('No transaction should be shown', () => {
      cy.get('input.search-beneficiary').type('other beneficiary')
      cy.get('table tbody tr').should('have.length', 0)
    })

    it('Two transactions should be shown', () => {
      cy.get('input.search-beneficiary').type('i')
      cy.get('table tbody tr')
        .should('have.length', 2)
        .and('contain', 'Amie Whitley')
        .and('contain', 'Earnestine Castillo')
    })
  })
})
