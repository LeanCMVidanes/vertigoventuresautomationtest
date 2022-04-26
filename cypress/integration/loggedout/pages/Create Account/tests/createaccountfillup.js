import createaccountPage from "../createacc";
import passwordtests from "./passwordtest";

const createacc = new createaccountPage()
const passtests = new passwordtests()

class createaccountfillup
{
   notcompleteinput()
   {
    cy.fixture('/datainputs.json').then((data) =>
    {
        //making sure form is present
         
        createacc.formload()
        createacc.firstnametxtbox().type(data.user.fname)
        createacc.lastnametxtbox().type(data.user.lname)
        createacc.emailtxtbox().type(data.user.email)        
        //due to captcha, let's leave some timeout time to manually solve the captcha ourselves
        createacc.captchabox()
        
    })
   }

   completeinput()
   {
    cy.fixture('/datainputs.json').then((data) =>
    {
        //making sure form is present
         
        //   .type( data.user.fname)
        createacc.formload()
        createacc.firstnametxtbox().type(data.user.fname)
        createacc.lastnametxtbox().type(data.user.lname)
        createacc.emailtxtbox().type(data.user.email)           
        createacc.passtxtbox().type(data.user.password)
        createacc.confirmpasstxtbox().type(data.user.password)
        
        //due to captcha, let's leave some timeout time to manually solve the captcha ourselves
    })
   }

    //calling functions and testing password

    passwordinputtest()
    {
        //cy.it('testing the test cases for password')

        passtests.lessthan8()
        createacc.registerbtnincomplete()
        passtests.morethan8()
        passtests.alllowercase()
        createacc.registerbtnincomplete()
        passtests.alluppercase()
        createacc.registerbtnincomplete()
        passtests.nonumbers()
        createacc.registerbtnincomplete()
        passtests.allnumbers()
        createacc.registerbtnincomplete()
        passtests.nosymbols()
        createacc.registerbtnincomplete()
        passtests.allsymbols()
        createacc.registerbtnincomplete()
        //btn should be enabled
        passtests.allcorrect()
        createacc.registerbtn()
    }
    
    registerfinal()
    {
        cy.wait(10000)
        createacc.registerbtnsubmit()
    }

}

export default createaccountfillup