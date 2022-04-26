class createaccountPage {
    
    formload()
    {
        return cy.get('.form-wrapper')
                 .should('be.visible')
    }

    firstnametxtbox()
    {
        return cy.get('#inputFirstName')
    }

    lastnametxtbox()
    {
        return cy.get('#inputLastName')
    }    

    emailtxtbox()
    {
        return cy.get('#inputEmail')
    }

    passtxtbox()
    {
        return cy.get('#inputPassword').should('be.enabled')
    }

    errortextpass()
    {
        return cy.get('.password-requirement-labels > .row')
    }

    confirmpasstxtbox()
    {
        return cy.get('#confirmPassword')
    }

    captchabox()
    {
        return cy.get('#ngrecaptcha-0')

    }

    registerbtn()
    {
        return cy.get('.sign-up-form .btn')
                 .should('be.enabled')
    }

    registerbtnincomplete()
    {
        return cy.get('.sign-up-form .btn')
                 .should('be.disabled')
    }

    
    registerbtnsubmit()
    {
        return cy.get('.sign-up-form .btn')
                 .should('be.enabled').click()
    }
}

export default createaccountPage