"use strict"
let count = 2
let lengt = 0
let numberEl = document.getElementById("number-el").textContent = count
let lengthEL = document.getElementById("length-el")
let volumeEL =document.getElementById("volume-el")
let massEL =document.getElementById("mass-el")
function calculate(){
    lengthEL.textContent = count +" " +"meter" + "= "+
     count * 3.28084 +" " + "feet"
    volumeEL.textContent = count +" " +"liter" + "= "+
     count * 0.219969 +" " + "gallon"
    massEL.textContent = count +" " +"kilogram" + "= "+
     count * 2.20462 +" " + "pounds"
}   