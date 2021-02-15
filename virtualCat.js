export class virtualCat
{
    name ;                  // nom du chat 

    constructor (name)      // construction du nom par Eiffage 
    {
        this.name = name;
    }

    catName()      // utilisation du nom entré en input
    {   
        this.name = document.getElementById("inputCatName");
    }

    // De 0 à 5 === stats de base 
    tiredness = 2 ;         // fatigue
    hunger = 2 ;            // faim
    thirst = 2 ;            // soif
    happiness = 2 ;         // joie
    loneliness = 2 ;        // solitude
    catBehaviour = 2 ;      // comportement de chat

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

let cat = new virtualCat();
console.log(cat.name) ;