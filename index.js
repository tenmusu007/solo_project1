"use strict"
let numberEl = document.getElementById("number-el")
let number = numberEl.value
let lengthEL = document.getElementById("length-el")
let ozEL =document.getElementById("oz-el")
let massEL =document.getElementById("mass-el")
function calculate(){
    let number = parseInt(numberEl.value)
    lengthEL.textContent = number +" " +"feet" + "= "+
     number * 0.3 +" " + "m"
    ozEL.textContent = number +" " +"oz" + "= "+
     number * 28 +" " + "g"
    let liter = document.createElement('p')
    document.getElementById("oz-el").appendChild(liter)
    liter.textContent = number
    massEL.textContent = number +" " +"pounds" + "= "+
     number * 0.5 +" " + "kg"
}   
