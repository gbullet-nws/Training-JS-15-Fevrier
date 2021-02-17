export class virtualCat
{
    name ;                 // nom du chat 

    constructor(name)      // construction du nom
    {
        this.name = name ;
    }

    catName()               // utilisation du nom entré en input
    {   
        this.name = inputCatName.value ;
    }

    ////----// Health du chat //----////
    // santé = fatigue + faim + soif 
    tiredness = 2 ;         // fatigue
    hunger = 2 ;            // faim
    thirst = 2 ;            // soif
    health = this.tiredness + this.hunger + this.thirst           // santé globale
    // Santé du chat 
    athleticShape = "athletic shape" ;
    goodShape = "good shape" ;
    normalShape = " normal shape" ;
    badShape = "bad shape" ; 

    healthStatus ;              // statu de santé du chat


    ////----// Happiness du chat //----////
    // bonheur = comportementDeChat - solitude
    catBehaviour = 2 ;      // comportement de chat
    loneliness = 2 ;        // solitude
    happiness = this.catBehaviour - this.loneliness ;             // joie
    // Contentement du chat 
    goingLikeACat = "like a cat" ;
    goingWell = "well" ;
    goingNormal = "normal" ;
    goingSad = "sad" ; 

    happinessStatus ;           // statu de joie du chat


    ////----// Fonction de check du statu du chat //----//// 
    checkCatHealth()
    {
        if ( this.health <= 4 )
        {
            this.healthStatus = this.athleticShape ;
        }
        else if ( this.health <= 8 )
        {
            this.healthStatus = this.goodShape ;
        }
        else if ( this.health <= 12 )
        {
            this.healthStatus = this.normalShape ;
        }
        else if ( this.health <= 16 )
        {
            this.healthStatus = this.badShape ;
        }
    }

    ////----// Fonction de check du statu du chat //----//// 
    checkCatHappiness()
    {
        if ( this.happiness <= 4 )
        {
            this.happinessStatus = this.goingSad ;
        }
        else if ( this.happiness <= 8 )
        {
            this.happinessStatus = this.goingNormal ;
        }
        else if ( this.happiness <= 12 )
        {
            this.happinessStatus = this.goingWell ;
        }
        else if ( this.happiness <= 16 )
        {
            this.happinessStatus = this.goingLikeACat ;
        }
    }

    ////----//-------------------//----////
    ////----// Fonctions de jeu //----//// 
    ////----//-------------------//----////

    sleep()
    {
        this.tiredness -= 1 ;
        console.log( "tiredness = " + this.tiredness ) ;
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
        this.happiness += 1 ;

        console.log( "tiredness = " + this.tiredness ) ;
        console.log( "hunger = " + this.hunger ) ;
        console.log( "thirst = " + this.thirst ) ;
        console.log( "happiness = " + this.happiness)
    }
    hunt()
    {
        this.tiredness += 1 ;
        this.hunger -= 1 ;
        this.thirst -= 1 ;

        this.loneliness += 1;
        this.catBehaviour += 1 ;

        console.log( "tiredness = " + this.tiredness ) ;
        console.log( "hunger = " + this.hunger ) ;
        console.log( "thirst = " + this.thirst ) ;
        console.log( "loneliness = " + this.loneliness ) ;
        console.log( "catBehaviour = " + this.catBehaviour ) ;
    }
    findAnOtherCat()
    {
        this.loneliness -= 1 ;
        this.catBehaviour += 1 ;

        console.log( "loneliness = " + this.loneliness) ;
        console.log( "catBehaviour = " + this.catBehaviour) ;
    }

}


