class signinPage {
    
    emailload()
    {
        return cy.get('#inputEmail')
                 .should('be.visible')
    }

    passsload()
    {
        return cy.get('#inputPassword')
                 .should('be.visible')
    }

    signinbtn()
    {
        return cy.get('.auth-form_wrapper .btn ')
                 .should('be.enabled')
    }

    errortxt()
    {
        return cy.get('.alert')
    }
    
}

export default signinPage