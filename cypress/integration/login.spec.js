describe('/login', () => {
  beforeEach(() => {
    cy.visit('/signin')
  })

  it('Sign In header is visible', () => {
    //ToDo: adapt for different languages
    cy.contains('h2', 'Sign in:')
  })

  it('Password reset link is correct', () => {
    cy.contains('Forgotten it?')
      .should('have.attr', 'href', '/reset-password')
  })

  it('Validate email address input', () => {
    var randomEmail = cy.faker.internet.email()
    cy.get('#identifier')
      .type(randomEmail)
      .should('have.value', randomEmail)
  })

  it('Validate password input', () => {
    var randomPassword = cy.faker.internet.password()
    cy.get('#password')
      .type(randomPassword)
      .should('have.value', randomPassword)
  })

  it('Successfull login', () => {
    cy.login()
  })
})

