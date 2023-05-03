/// <reference types="cypress" />

//import { should } from "chai"
import { locatorClass } from "./Locators&Functions/automtionExcerise"

const locators = new locatorClass()
before(function () {
  cy.fixture('example.json').then(function (data) {
    this.data = data
  })
})

//Testcases for verifying empty textfields
describe('Automation Excerise Complete', () => {
  it('Registration', () => {
    locators.blankSubmissionOnCreateContact()
   // locators.fillBlankCreateForm()
  })

//   it('Create User with GmailAccount', () => {
//     locators.ClickOnSignIn()
//     locators.fillcreateform()
//   })
// })

// //Testcases to load data from fixture
// describe('Loggedin-failed Scenarios', () => {
//   it('DeleteCart', function () {
//     cy.get(locators.signInBtn).click()
//     cy.get(locators.email).type(this.data.email)
//     cy.get(locators.password).type(this.data.password)
//     cy.get(locators.SubmitLogin).click()
//     locators.deleteItemIntocart()
//   })

//   it('purchase from cart', function () {
//     cy.get(locators.signInBtn).click()
//     cy.get(locators.email).type(this.data.email)
//     cy.get(locators.password).type(this.data.password)
//     cy.get(locators.SubmitLogin).click()
//     locators.proccedtopurchase()
//   })
})

