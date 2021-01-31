export class HomePage{

    fillOutTheLoginForm(userName, password) {
        cy.get('#user-name')
          .type(userName)
        
          cy.get('#password')
          .type(password)

        }
        
        verificationOfLoginButton() {
            cy.get('#login-button')
              .should('not.be.disabled')
        }

        verificationOfInpudField() {
            cy.get('#user-name').invoke('attr', 'value').then(enteredText => {
                cy.wrap(enteredText).should('contains', 'standard_user')
              })
        }

    clickOnTheLoginButton() {
        cy.get('#login-button')
          .click() 
    }
}
export const onHomePage = new HomePage()