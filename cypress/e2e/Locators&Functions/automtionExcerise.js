//import { should } from "chai"

export class locatorClass {
    //locators
    signInBtn = 'Signup'
    name = '[type="text"]'
    createNewEmail = '.signup-form > form > [type="email"]'
    tapCreateBtn = '.signup-form > form > .btn'
    title = '#id_gender1'
    password = '#password'
    day = '#days'
    month = '#months'
    year = '#years'
    newsletter = '#newsletter'
    offer = '#optin'
    firstname = '#first_name'
    lastname = '#last_name'
    company = '#company'
    address = '#address1'
    address2 = '#address2'
    country = '#country'
    city = '#city'
    State = '#state'
    zipcode = '#zipcode'
    mobile = '#mobile_number'
    registerBtn = '.login-form > form > .btn'
    afterRegisterURL = 'https://automationexercise.com/account_created'
    accountCreated = 'b'
    continueBtn = '.pull-right > .btn'
    deleteBtn = '.shop-menu > .nav > :nth-child(5)'
    deleteUrl= 'https://automationexercise.com/delete_account'

    //functions

    blankSubmissionOnCreateContact() {
        cy.contains(this.signInBtn).click()
        Cypress.config('defaultCommandTimeout', 10000);
        cy.get(this.name).type('Ahtisham').should('have.value','Ahtisham')
        cy.get(this.createNewEmail).type(`${Date.now()}@aharotest.com`)      
        cy.get(this.tapCreateBtn).click()
        cy.url().should('eq','https://automationexercise.com/signup')
        cy.get(this.name).should('have.value','Ahtisham')
        //cy.get(this.createNewEmail).should('have.value','ahtishamtestplt@gmail.com')
        cy.get(this.password).type('GVG&77pk').should('have.value','GVG&77pk')
        cy.get(this.day).select('20')
        cy.get(this.month).select('12')
        cy.get(this.year).select('1992')
        cy.get(this.newsletter).click()
        cy.get(this.offer).click()
        cy.get(this.firstname).type('Ahtisham').should('have.value','Ahtisham')
        cy.get(this.lastname).type('Kayani').should('have.value','Kayani')
        cy.get(this.address).type('H-30, Islamabad')
        cy.get(this.address2).type('Same')
        cy.get(this.country).should('have.value','India')
        cy.get(this.State).type('Islamabad').should('have.value','Islamabad')
        cy.get(this.zipcode).type('44000').should('have.value','44000')
        cy.get(this.city).type('islamabd').should('have.value','islamabd')
        cy.get(this.mobile).type('+923049223484').should('have.value','+923049223484')
        cy.get(this.registerBtn).click()
        cy.url().should('eq', this.afterRegisterURL)
       // cy.get(this.AccountCreated).should('have.text','Account Created!')
        cy.get(this.continueBtn).click()
        cy.get(this.deleteBtn).click()
        cy.url().should('eq', this.deleteUrl)
        cy.get(this.continueBtn).click()
        cy.url().should('eq','https://automationexercise.com/')
    }


}

