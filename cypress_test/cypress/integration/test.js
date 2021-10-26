describe('LogInLogOutTestDraft', () => {
    it ('LogInLogout', () => {
        cy.viewport(width, height)                                          //screen resolution
        cy.visit('url')                                                     //go to url
        cy.contains('keyword').click()                                      //find login button by keword and click or 
        cy.get('buttonXPath').click()                                       //find login button by XPath and click
        cy.get('loginFieldXPath').type('logindata')                         //find login field and input data
        cy.get('passwordFieldXPath').type('logindata').type('{enter}')      //find password field, input data and press 'Enter" key or 
        cy.contains('LoginButton').click()                                  //find login button and click without 'Enter' pressing            
        cy.contains('LogOutButton').click()                                 //check that the logout button has appeared(so we are logged) and exit
        cy.contains('LogInButon').click()                                   //check that the login button has appeared(so we are exited from account)
    })
})