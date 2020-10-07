//reusable command to login into shorthand
Cypress.Commands.add('login', () =>{
  cy.visit('/signin')
  cy.get('#identifier')
    .type('christine.zierold@gmail.com')
  cy.get('#password')
    .type('Test12345')
  cy.get("form").submit();
  //Check the right path to the dashboard
  cy.location('pathname', {timeout: 10000})
    .should('include', 'organisations');
  //Add longer timeout because of current loading problems
  //Check if dashboard is loaded --> login successfull
  cy.get('div.dashboard-container', {timeout: 10000})
    .should('be.visible', {timeout: 10000})
})

Cypress.Commands.add('createBlankStory', () =>{
  //ToDo: create a better identifier for this button e.g. Data-QA attribute
  cy.get('.card-new-story button.card-link')
    .should('be.visible')
    .click()
  //ToDo: create a better identifier for this button e.g. Data-QA attribute
  cy.get('div.card-template-blank-container button.card-link')
    .should('be.visible')
    .click()
  //Editor page should be visible now, including a longer timeout because of current loading problems
  cy.get('div.pages-edit', {timeout: 20000})
    .should('be.visible')
  //Check if 'Add your title' textbox is there
  //ToDo: adapt for different languages
  cy.contains('Add your title')
    .should('be.visible', {timeout: 20000})
})


