import {createaccountfillup, signinfillup} from '../integration/imports/importsfile.js'

const createfillup = new createaccountfillup();
const signin = new signinfillup();

describe('Test for Vertigo Ventures', () => {
 
    it('Nagivate to the website', () => {

        cy.fixture('/datainputs.json').then((data) =>
        {
            cy.visit(data.link)
        })

        cy.contains('Start Tracking')

    })

    it('Navigate to register', () => {
       cy.get('#signUpBtn')
         .should('be.visible')
         .click()

       cy.contains('Create an Account')
       cy.reload()
    })

    //Create an account

    it('Test password with main data', () => {

      createfillup.notcompleteinput()
      //timeout for captcha
      cy.wait(15000)
      //checking btn and passwords
      createfillup.passwordinputtest()

    })

    it('Insert all complete and right data', () => {
      cy.reload()
      createfillup.completeinput()
      createfillup.registerfinal()

    })

    //login test

    it('Nagivate to signin', () => {

      cy.fixture('/datainputs.json').then((data) =>
      {
          cy.visit(data.signin)
      })

      signin.randomvaluessignin()
      signin.errormessage()
  })

})
