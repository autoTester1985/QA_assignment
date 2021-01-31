export class AfterLoginPage {

    sessionStorageVerification() {
        cy.window()
          .its("sessionStorage")
          .invoke("getItem", "session-username")
          .should("exist"); 
    }


    addItemToTheBasket(nameOfTheItem) {
        cy.contains('.inventory_item', nameOfTheItem)
          .find('button')
          .click()
    }

    



}
export const onAfterLoginPage = new AfterLoginPage()