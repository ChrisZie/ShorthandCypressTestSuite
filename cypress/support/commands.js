//reusable command to login into shorthand
Cypress.Commands.add('login', () =>{
  cy.visit('/signin')
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