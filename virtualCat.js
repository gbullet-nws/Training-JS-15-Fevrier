export class virtualCat
{
    name ;                  // nom du chat 

    constructor(name)      // construction du nom
    {
        this.name = name ;
    }

    catName()               // utilisation du nom entré en input
    {   
        this.name = inputCatName.value ;
    }

    // De 0 à 5 === stats de base 
    tiredness = 2 ;         // fatigue
    hunger = 2 ;            // faim
    thirst = 2 ;            // soif
    happiness = 2 ;         // joie
    loneliness = 2 ;        // solitude
    catBehaviour = 2 ;      // comportement de chat

    // Statu du chat , comment il va
    goingWell = "well" ;
    goingNormal = "normal" ;
    goingSad = "sad" ;
    goingBad = "bad" ; 

    status;

    checkCatStatus()
    {
        if ( (this.tiredness + this.hunger + this.thirst + this.happiness) <= 5 )
        {
            status = goingBad ;
        }
        else if ( (this.tiredness + this.hunger + this.thirst + this.happiness) <= 10 )
        {
            status = goingSad ;
        }
        else if ( (this.tiredness + this.hunger + this.thirst + this.happiness) <= 15 )
        {
            status = goingNormal ;
        }
        else if ( (this.tiredness + this.hunger + this.thirst + this.happiness) <= 20 )
        {
            status = goingWell ;
        }
    }

    sleep()
    {
        this.tiredness -= 1 ;
        this.loneliness += 1 ;
        console.log( "tiredness = " + this.tiredness ) ;
        console.log( "loneliness = " + this.loneliness ) ;
    }
    eat()
    {
        this.hunger -= 1 ;
        console.log( "hunger = " + this.hunger ) ;
    }
    drink()
    {
        this.thirst -= 1 ;
        console.log( "thirst = " + this.thirst ) ;
    }

    play()
    {
        this.tiredness += 1 ;
        this.hunger += 1 ;
        this.thirst += 1 ;

        console.log( "tiredness = " + this.tiredness ) ;
        console.log( "hunger = " + this.hunger ) ;
        console.log( "thirst = " + this.thirst ) ;
    }
    hunt()
    {
        this.tiredness += 1 ;
        this.loneliness -= 1;
        this.catBehaviour += 1 ;

        console.log( "tiredness = " + this.tiredness ) ;
        console.log( "loneliness = " + this.loneliness ) ;
        console.log( "catBehaviour = " + this.catBehaviour ) ;
    }

}


