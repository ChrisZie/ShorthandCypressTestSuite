    
describe('/story', () => {
  beforeEach(() => {
    //ToDo's for " Dynamic User" Strategie --> DB setup/reset & data import needs to be handled here before every test
    cy.login()
  })
  
  it('Create a new story button visible', () => {
    //ToDo: create a better identifier for this button e.g. Data-QA attribute
    cy.get('.card-new-story button.card-link').should('be.visible')
  })

  it('Create a new blank story', () => {
    cy.createBlankStory()
    //Enter a new story title
    cy.get("[data-testid=header--editor-container-top]  [role='textbox']")
      .clear()
      //ToDo: create a random Title
      .type('This is a test title for a Cypress Test')
  })


  it.only('Create a new text over media section in a new blank story', () => {
    cy.createBlankStory()
    //Workaround for the 'Add Section' button as there are two button with the same class and the first one is not clickable
    cy.get('.add-section-container button').last()
      .click()
    //Check if section template text over media button is visible
    cy.get('[data-testid=section-template--TextOverMedia]', {timeout: 20000})
      .should('be.visible', {timeout: 20000})
      .click()
    cy.contains('Text over media')
      .should('be.visible', {timeout: 20000})
    cy.get("[data-testid=card-body--editor-container-top] [role='textbox']")
      .should('be.visible' , {timeout: 20000})
      .clear()
      //ToDo: create a random Title
      .type('Cypress title over media')
    cy.get("[data-testid=card-body--editor-container-mid] [role='textbox']", {timeout: 20000})
      .should('be.visible', {timeout: 20000})
      .clear()
      //ToDo: create a random text
      .type('This is the textbox under the title')
      
  })

})