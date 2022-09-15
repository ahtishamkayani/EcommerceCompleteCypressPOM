//import { should } from "chai"

export class locatorClass {
    //locators
    signInBtn = '.login'
    createNewEmail = '#email_create'
    tapCreateBtn = '#SubmitCreate > span'
    selectTitle = '#id_gender1'
    firstNameField = '#customer_firstname'
    lastname = '#customer_lastname'
    email = '#email'
    password = '#passwd'
    day = '#days'
    month = '#months'
    year = '#years'
    address = '#address1'
    city = '#city'
    State = '#id_state'
    postalcode = '#postcode'
    country = '#id_country'
    mobile = '#phone_mobile'
    registerBtn = '#submitAccount > span'
    personalInfobtn = '.icon-user'
    tapSignOut = '.logout'
    loginBtn = '.button-1'
    Logout = 'Logout'
    SubmitLogin = '#SubmitLogin > span'
    searchField = '#search_query_top'
    searchBtn = '#searchbox > .btn'
    selectdress = '.first-in-line.first-item-of-tablet-line > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x'
    addDressToCard = '.exclusive > span'
    continueToCartBtn = '.button-medium > span'
    deleteitemsfromCart = '#product_5_19_0_0 > .cart_delete'
    proceedToCheckout = '.cart_navigation > .button > span'
    validityCheck = '#cgv'
    selectBankWire = '.bankwire'
    confrimOrder = '#cart_navigation > .button > span'

    //functions

    blankSubmissionOnCreateContact() {
        cy.get(this.signInBtn).click()
        Cypress.config('defaultCommandTimeout', 10000);
        cy.get(this.tapCreateBtn).click()
    }

    fillBlankCreateForm() {
        cy.get(this.signInBtn).click()
        Cypress.config('defaultCommandTimeout', 10000);
        cy.get(this.createNewEmail).type('test123@test.com').should('have.value', 'test123@test.com')
        Cypress.config('defaultCommandTimeout', 10000);
        cy.get(this.tapCreateBtn).click()
        Cypress.config('defaultCommandTimeout', 10000);
        cy.scrollTo(0, 1000)
        Cypress.config('defaultCommandTimeout', 10000);
        cy.get(this.registerBtn).click()
    }


    blankSubmissionOnSignInBtn() {
        Cypress.config('defaultCommandTimeout', 10000);
        cy.get(this.SubmitLogin).click()
    }

    ClickOnSignIn() {
        cy.get(this.signInBtn).click()
        cy.get(this.createNewEmail).type('Cypress.Automation.Tester4044@gmail.com').should('have.value', 'Cypress.Automation.Tester4044@gmail.com')
        cy.get(this.tapCreateBtn).click()
    }

    fillcreateform() {
        cy.get(this.selectTitle).click()
        cy.get(this.firstNameField).type('Ahtisham').should('have.value', 'Ahtisham')
        cy.get(this.lastname).type('kayani').should('have.value', 'kayani')
        cy.get(this.email).should('have.value', 'Cypress.Automation.Tester4044@gmail.com')
        cy.get(this.password).type('abc12345').should('have.value', 'abc12345')
        cy.get(this.day).select('28').should('have.value', '28')
        cy.get(this.month).select('12').should('have.value', '12')
        cy.get(this.year).select('1993').should('have.value', '1993')
        cy.get(this.address).type('H-30,islamabad')
        cy.get(this.city).type('Islamabd').should('have.value', 'Islamabd')
        cy.get(this.State).select('5').should('have.value', '5')
        cy.get(this.postalcode).type('44000').should('have.value', '44000')
        cy.get(this.mobile).type('+923404444').should('have.value', '+923404444')
        cy.get(this.registerBtn).click()
        cy.url().should('eq', 'http://automationpractice.com/index.php?controller=my-account')
        cy.get(this.tapSignOut).click()

    }

    tapOnPersonalBtn() {
        cy.get(this.personalInfobtn).click()
    }

    loggedInFailed() {
        cy.get(this.signInBtn).click()
        cy.get(this.email).type('ab1@test.com').should('have.value', 'ab1@test.com')
        cy.get(this.password).type('abc12345').should('have.value', 'abc12345')
        cy.get(this.SubmitLogin).click()
        cy.get(this.email).clear()
        cy.get(this.password).clear()
    }

    loggedInFaile1d() {
        cy.get(this.signInBtn).click()
    }

    deleteItemIntocart() {
        cy.get(this.searchField).type('Black').should('have.value', 'Black')
        cy.get(this.searchBtn).click()
        Cypress.config('defaultCommandTimeout', 10000);
        cy.get(this.selectdress).click()
        Cypress.config('defaultCommandTimeout', 10000);
        cy.get(this.addDressToCard).click()
        Cypress.config('defaultCommandTimeout', 10000);
        cy.get(this.continueToCartBtn).click()
        Cypress.config('defaultCommandTimeout', 10000);
        cy.get(this.deleteitemsfromCart).click()
        Cypress.config('defaultCommandTimeout', 10000);
        cy.get('[title="View my shopping cart"]').should('not.have.value')
    }

    proccedtopurchase() {
        cy.get(this.searchField).type('Black').should('have.value', 'Black')
        cy.get(this.searchBtn).click()
        cy.get(this.selectdress).click()
        cy.get(this.addDressToCard).click()
        cy.get(this.continueToCartBtn).click()
        cy.get(this.proceedToCheckout).click()
        Cypress.config('defaultCommandTimeout', 10000);
        cy.get(this.proceedToCheckout).click()
        Cypress.config('defaultCommandTimeout', 10000);
        cy.get(this.validityCheck).click()
        cy.get(this.proceedToCheckout).click()
        Cypress.config('defaultCommandTimeout', 10000);
        cy.get(this.selectBankWire).click()
        Cypress.config('defaultCommandTimeout', 10000);
        cy.get(this.confrimOrder).click()
    }
}
