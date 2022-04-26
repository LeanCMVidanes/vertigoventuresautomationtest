import chancegenerate from "../../Create Account/variables/randomstrings";
import signinPage from "../signin";

const generatestr = new chancegenerate()
const signin = new signinPage()

class signinfillup
{
   randomvaluessignin()
   {
    cy.fixture('/datainputs.json').then((data) =>
    {
        //making sure form is present
        signin.emailload().type(generatestr.randomemail())
        signin.passsload().type(generatestr.allcorrect())
        signin.signinbtn().click()
    })
   }

   errormessage()
   {
       signin.errortxt().contains("Incorrect username or password.")

   }

 
}

export default signinfillup