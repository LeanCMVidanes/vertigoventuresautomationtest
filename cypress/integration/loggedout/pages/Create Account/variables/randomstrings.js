import Chance from 'chance';
 
const chance = new Chance()


class chancegenerate
 {
    //less than 8
    lessthan8()
    {
        var chancestring = chance.string({length:5})

        return chancestring
    }
    
    //equal length 8
    equallength8()
    {
        var chancestring = chance.string({length:8})
      
        return chancestring
    }

    //more than 8
    morethan8()
    {
        var chancestring = chance.string({length:20})
      
        return chancestring
    }

    //all lower case
    alllowercase()
    {
        var chancestring = chance.string({length:8, casing: 'lower', alpha: true, numeric: false, symbols: false})
      
        return chancestring
    }

    //all upper case
    alluppercase()
    {
        var chancestring = chance.string({length:8, casing: 'upper', alpha: true, numeric: false, symbols: false})
      
        return chancestring

    }

    //no numbers
    nonumbers()
    {
        var chancestring = chance.string({length:8, alpha: true, numeric: false, symbols: false})
      
        return chancestring
    }

    //all numbers
    allnumbers()
    {
        var chancestring = chance.string({length:8, alpha: false, numeric: true, symbols: false})
      
        return chancestring
    }

    //no symbols
    nosymbols()
    {
        var chancestring = chance.string({length:7, symbols:false})
      
        return chancestring
    }

    //all symbols
    allsymbols()
    {
        var chancestring = chance.string({length:6, alpha: false, numeric: false, symbols: true})
      
        return chancestring
    }

    //all correct
    allcorrect()
    {
        var chancestring1 = chance.string({length:3, alpha: true, casing: 'upper', numeric: true, symbols: true})
        var chancestring2 = chance.string({length:8, alpha: true, casing: 'lower', numeric: true, symbols: true})
        var chancestring3 = chance.string({length:2, alpha: false, numeric: true, symbols: false})
        var chancestring4 = chance.string({length:2, alpha: false, numeric: false, symbols: true})

        var chancestring = chancestring1 + chancestring2 + chancestring3 + chancestring4
      
        return chancestring
    }

    randomemail()
    {
        var chancestring = chance.email()

        return chancestring
    }
 }

 export default chancegenerate