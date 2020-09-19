/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://episphere.github.io/connectApp/#')
    })
  
    it('can log in', () => {
      cy.get('[class="btn join-now-btn"]').click();
      cy.get('[data-provider-id="password"]').click();
      cy.get('[type="email"]').click().type("hui.zhao@icf.com");
      cy.get('[type="submit"]').click();
      cy.get('[type="password"]').click().type("Password1!");
      cy.get('[type="submit"]').click();
      cy.get('#userDashboard').click();
      cy.get('#userData').click();
      cy.get('#userSettings').click();
      cy.get('[class="col data"]').contains('First name').parent().find('[class="form-control"]').should('have.value','Hui22');
      cy.get('#signOut').click();
    })
  
  })
  
