    
describe('/story', () => {
  beforeEach(() => {
    //ToDo's for " Dynamic User" Strategie --> DB setup/reset & data import needs to be handled here before every test
    cy.login()
  })
  
  it('Create a new story button is visible', () => {
    //ToDo: create a better selector for this button e.g. Data-QA attribute
    cy.get('.card-new-story button.card-link').should('be.visible')
  })

  it('Create a new blank story', () => {
    var randomWords = cy.faker.lorem.words()
    cy.createBlankStory()
    //Enter a new story title
    cy.get("[data-testid=header--editor-container-top]  [role='textbox']")
      .clear()
      //Create a random Title with prefix
      .type('Cypress Blank Test - ' + randomWords)
    //Check changed title
    cy.contains('Cypress Blank Test - ' + randomWords)
  })

  it('Create a new text over media section in a new blank story', () => {
    cy.createBlankStory()
    cy.get("[data-testid=header--editor-container-top]  [role='textbox']")
      .clear()
      //Create a random Title with prefix
      .type('Cypress Section Test - ' + cy.faker.lorem.words())
    //Last() is a workaround for the 'Add Section' button as there are two buttons with the same class and the first one is not clickable
    cy.get('.add-section-container button').last()
      .click()
    //Check if section template 'text over media' button is visible
    cy.get('[data-testid=section-template--TextOverMedia]', {timeout: 20000})
      .should('be.visible', {timeout: 20000})
      .click()
    //New section should be inserted --> check if the correct sample title is shown
    cy.contains('Text over media')
      .should('be.visible', {timeout: 20000})
    cy.get("[data-testid=card-body--editor-container-top] [role='textbox']", {timeout: 20000}).as('sectionTitle')
      .should('be.visible' , {timeout: 20000})
    //ToDo: change wait() into a better workaround or solution for the DOM error
    //Insert wait() because of Error "cy.type() failed because this element is detached from the DOM." (Error is not 100% reproducible) --> to ensure more stability the wait() is insert here
    cy.wait(5000)
    cy.get("@sectionTitle") 
      .clear()
      //Create a random Title with prefix
      .type('Cypress title over media - ' + cy.faker.lorem.word())
    //Fill in text in the textbox under the title
    cy.get("[data-testid=card-body--editor-container-mid] [role='textbox']", {timeout: 20000})
      .should('be.visible', {timeout: 20000})
      .clear()
      //Create a random text
      .type(cy.faker.lorem.sentence()) 
  })
})