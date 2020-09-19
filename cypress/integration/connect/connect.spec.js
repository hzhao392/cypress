/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://episphere.github.io/connectApp/#');
      cy.server();
      const response = {"data":{"142654897":{"196856782":353358909,"326825649":104430631,"461488577":104430631,"462314689":104430631,"549687190":104430631,"607081902":104430631,"642287621":104430631,"791389099":104430631,"819377306":104430631,"829269606":104430631,"942255248":104430631},"231676651":"","271757434":353358909,"335767902":"2020-09-14T17:30:51.848Z","371067537":"19600205","383945929":654207589,"388711124":"3242444244","399159511":"Steve","452166062":104430631,"454445267":"2020-09-15T12:48:08.500Z","471168198":"Steve","471593703":"2020-09-15T12:47:23.817Z","512820379":854703046,"521824358":"sfdaf","544150384":"1960","564964481":"02","634434746":"Georgia","646873644":353358909,"699625233":353358909,"703385619":"abc","736251808":"Zhao","795827569":"05","821247024":875007964,"827220437":13,"869588347":"sfdasf@ssa.com","892050548":"21321","919254129":353358909,"982402227":"20201509","996038075":"Zhao","Connect_ID":9124601972,"RcrtCS_Version_v1r0":"Consent-v1.0","query":{"allPhoneNo":["3242444244"],"firstName":"Steve","lastName":"jobs","allEmails":["sfdasf@ssa.com"]},"token":"558cb31a-429e-43b8-b07f-501751c0577f"},"code":200};
      cy.route('GET','https://us-central1-nih-nci-dceg-connect-dev.cloudfunctions.net/app?api=getUserProfile', response);

    })
    
    it('can log in and out', () => {
      cy.get('[class="btn join-now-btn"]').click();
      cy.get('[data-provider-id="password"]').click();
      cy.get('[type="email"]').click().type("hui.zhao@icf.com");
      cy.get('[type="submit"]').click();
      cy.get('[type="password"]').click().type("Password1!");
      cy.get('[type="submit"]').click();
      cy.get('#userDashboard').click();
      cy.get('#userData').click();
      cy.get('#userSettings').click();
      cy.get('[class="col data"]').contains('First name').parent().find('[class="form-control"]').should('have.value','Hui');
      cy.get('#signOut').click();
    })

    it.only('can mock response', () => {
      cy.get('[class="btn join-now-btn"]').click();
      cy.get('[data-provider-id="password"]').click();
      cy.get('[type="email"]').click().type("hui.zhao@icf.com");
      cy.get('[type="submit"]').click();
      cy.get('[type="password"]').click().type("Password1!");
      cy.get('[type="submit"]').click();
      cy.get('#userDashboard').click();
      cy.get('#userData').click();
      cy.get('#userSettings').click();


      cy.get('[class="col data"]').contains('First name').parent().find('[class="form-control"]').should('have.value','Steve');


    })
  
  })
  