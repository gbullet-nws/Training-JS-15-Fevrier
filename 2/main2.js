
import { virtualCat } from "../virtualCat.js" 

let cat = new virtualCat();

document.getElementById("namingButton").addEventListener("click", () =>
{
    cat.catName(inputCatName.value);

    console.log(cat.name) ;
});

document.getElementById("namingButton").addEventListener("click", () =>
{
    document.getElementById("catNameDisplayed").innerHTML = cat.name ;
}) ;

catTIRED.addEventListener("click", () =>
{
    cat.sleep();
    cat.checkCatStatus();
    updateDatas();
})

document.getElementById("namingButton").addEventListener("click", () =>
{
    document.getElementById("tirednessLEVEL").innerHTML = cat.tiredness ;
    document.getElementById("hungerLEVEL").innerHTML = cat.hunger ;
    document.getElementById("thirstLEVEL").innerHTML = cat.thirst ;
    document.getElementById("happinessLEVEL").innerHTML = cat.happiness ;
}) ;

function updateDatas()
{
    document.getElementById("tirednessLEVEL").innerHTML = cat.tiredness ;
    document.getElementById("hungerLEVEL").innerHTML = cat.hunger ;
    document.getElementById("thirstLEVEL").innerHTML = cat.thirst ;
    document.getElementById("happinessLEVEL").innerHTML = cat.happiness ;
    document.getElementById("catGoingStatus").innerHTML = cat.status ;
}

document.getElementById("catGoingStatus").innerHTML = cat.status ;



console.log(cat.name) ;