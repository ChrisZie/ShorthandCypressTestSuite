describe('/login', () => {
  beforeEach(() => {
    cy.visit('/signin')
  })

  it('Sign In header is visible', () => {
    //ToDo: adapt for different languages
    cy.contains('h2', 'Sign in:')
  })

  it('password reset link is correct', () => {
    cy.contains('Forgotten it?')
      .should('have.attr', 'href', '/reset-password')
  })

  it('validates email address input', () => {
    cy.get('#identifier')
      .type('TEST@test.com')
      .should('have.value', 'TEST@test.com')
  })

  it('validates password input', () => {
    cy.get('#password')
      .type('123456')
      .should('have.value', '123456')
  })

  it.only('successfull login', () => {
    cy.login()
  })
})

