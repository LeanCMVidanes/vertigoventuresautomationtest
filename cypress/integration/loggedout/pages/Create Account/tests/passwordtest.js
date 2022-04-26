import createaccountPage from "../createacc";
import chancegenerate from "../variables/randomstrings";
 
const createacc = new createaccountPage()

const generatestr = new chancegenerate()

class passwordtests
 {
    //less than 8
    lessthan8()
    {
      var chancestr = generatestr.lessthan8()

      createacc.passtxtbox().clear()
               .type(chancestr)

      createacc.confirmpasstxtbox().clear()
               .type(chancestr)
    }
    
    //equal length 8
    equallength8()
    {
      var chancestr = generatestr.equallength8()

      createacc.passtxtbox().clear()
                .type(chancestr)

      createacc.confirmpasstxtbox().clear()
                .type(chancestr)
    }

    //more than 8
    morethan8()
    {
      var chancestr = generatestr.morethan8()

      createacc.passtxtbox().clear()
                .type(chancestr)

      createacc.confirmpasstxtbox().clear()
                .type(chancestr)
    }

    //all lower case
    alllowercase()
    {
      var chancestr = generatestr.alllowercase()

      createacc.passtxtbox().clear()
               .type(chancestr)
      createacc.confirmpasstxtbox().clear()
               .type(chancestr)
    }

    //all upper case
    alluppercase()
    {
      var chancestr = generatestr.alluppercase()

      createacc.passtxtbox().clear()
               .type(chancestr)

      createacc.confirmpasstxtbox().clear()
               .type(chancestr)
    }

    //no numbers
    nonumbers()
    {
      var chancestr = generatestr.nonumbers()

      createacc.passtxtbox().clear()
               .type(chancestr)

      createacc.confirmpasstxtbox().clear()
               .type(chancestr)
    }

    //all numbers
    allnumbers()
    {
      var chancestr = generatestr.allnumbers()

      createacc.passtxtbox().clear()
               .type(chancestr)
      
      createacc.confirmpasstxtbox().clear()
               .type(chancestr)
    }

    //no symbols
    nosymbols()
    {
      var chancestr = generatestr.nosymbols()

      createacc.passtxtbox().clear()
               .type(chancestr)

      createacc.confirmpasstxtbox().clear()
               .type(chancestr)
    }

    //all symbols
    allsymbols()
    {
      var chancestr = generatestr.allsymbols()

      createacc.passtxtbox().clear()
               .type(chancestr)

      createacc.confirmpasstxtbox().clear()
               .type(chancestr)
    }

    //all correct
    allcorrect()
    {
      var chancestr = generatestr.allcorrect()

      createacc.passtxtbox().clear()
              .type(chancestr)

      createacc.confirmpasstxtbox().clear()
              .type(chancestr)
    }

 }

 export default passwordtests