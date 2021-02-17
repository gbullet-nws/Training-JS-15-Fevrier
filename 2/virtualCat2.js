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
    tiredness = 3 ;         // fatigue
    hunger = 3 ;            // faim
    thirst = 3 ;            // soif
    happiness = 3 ;         // joie
    // catBehaviour = 2 ;      // comportement de chat
    // loneliness = 2 ;        // solitude

    // Statu du chat , comment il va
    goingWell = "well" ;
    goingNormal = "normal" ;
    goingSad = "sad" ;
    goingBad = "bad" ; 

    status = this.goingSad;

    conditionCheck = [
        [16, this.goingBad],
        [12, this.goingSad],
        [8, this.goingNormal],
        [4, this.goingWell],
    ]

    checkCatStatus()
    {
        let count = this.tiredness + this.hunger + this.thirst + this.happiness;
        let fetch = false;

        this.conditionCheck.forEach(i =>
        {
            if (fetch)
                return;

            if (count <= i[0])
            {
                this.status = i[1];
                fetch = true;
            }
        })
    }

    sleep()
    {
        this.tiredness += 1 ;
        //this.loneliness += 1 ;
        console.log( "tiredness = " + this.tiredness ) ;
        //console.log( "loneliness = " + this.loneliness ) ;
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
        //this.loneliness -= 1;
        //this.catBehaviour += 1 ;

        console.log( "tiredness = " + this.tiredness ) ;
        //console.log( "loneliness = " + this.loneliness ) ;
        //console.log( "catBehaviour = " + this.catBehaviour ) ;
    }

}


