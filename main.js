
import { virtualCat } from "./virtualCat.js" 

let cat = new virtualCat();

////----// Nommage du chat //----////
namingButton.addEventListener("click", () =>
{
    cat.catName();
    dislayCatName();
    cat.checkCatHealth();
    cat.checkCatHappiness();
    updateDatas();

    console.log(cat.name);
}) ;

function dislayCatName()
{
    document.getElementById("catNameDisplayed").innerHTML = cat.name ;
    document.getElementById("catNameDisplayed1").innerHTML = cat.name ;
    document.getElementById("catNameDisplayed2").innerHTML = cat.name ;
}


////----// Modifier stats chat //----////
// Events de click sur les boutons //
catTIRED.addEventListener("click", () =>
{
    cat.sleep();
    cat.checkCatHealth();
    cat.checkCatHappiness();
    updateDatas();
})
catEATS.addEventListener("click", () =>
{
    cat.eat();
    cat.checkCatHealth();
    cat.checkCatHappiness();
    updateDatas();
})
catDRINKS.addEventListener("click", () =>
{
    cat.drink();
    cat.checkCatHealth();
    cat.checkCatHappiness();
    updateDatas();
})
catBEHAVIOUR.addEventListener("click", () =>
{
    cat.play();
    cat.checkCatHealth();
    cat.checkCatHappiness();
    updateDatas();
})
catLONELINESS.addEventListener("click", () =>
{
    cat.play();
    cat.checkCatHealth();
    cat.checkCatHappiness();
    updateDatas();
})



////----// Fonction updateDatas //----////
function updateDatas()
{
    document.getElementById("tirednessLEVEL").innerHTML = cat.tiredness ;
    document.getElementById("hungerLEVEL").innerHTML = cat.hunger ;
    document.getElementById("thirstLEVEL").innerHTML = cat.thirst ;

    document.getElementById("catBehaviourLEVEL").innerHTML = cat.catBehaviour ;
    document.getElementById("lonelinessLEVEL").innerHTML = cat.loneliness ;

    document.getElementById("catHealthStatus").innerHTML = cat.healthStatus ;
    document.getElementById("catHappinessStatus").innerHTML = cat.goingStatus ;
}

