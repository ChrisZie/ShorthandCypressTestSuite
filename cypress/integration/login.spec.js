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

  it('successfull login', () => {
    cy.get('#identifier')
      .type('christine.zierold@gmail.com')
    cy.get('#password')
      .type('Test12345')
    cy.get("form").submit();
    //workaround for the long wait for the dashboard page
    cy.location('pathname', {timeout: 10000})
      .should('include', 'organisations');
    //check if dashboard is loaded --> login successfull
    cy.get('div.dashboard-container').should('be.visible')
  })
})

