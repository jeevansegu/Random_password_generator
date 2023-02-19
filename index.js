const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passArray=characters
let password=""
let character=""
let numTog = true
let symTog = true
let password1El = document.getElementById("password1")
let password2El = document.getElementById("password2")
let labelEl = document.getElementById("label")
let lenEl = document.querySelector("#len")
let numberEl=document.getElementById("numbers")
let symbolEl=document.getElementById("symbols")
password1El.textContent = ""
password2El.textContent = ""
labelEl.textContent = ""
function number() {
    if(numTog===true)
    {
        numTog=false
        numberEl.style.background="#273549"
    }
    else
    {
        numTog=true
        numberEl.style.background="#10B981"
    }
}

function symbol() {
    if(symTog===true)
    {
        symTog=false
        symbolEl.style.background="#273549"
    }
    else
    {
        symTog=true
        symbolEl.style.background="#10B981"
    }
}



function generate() {
    passArray = []
    if(symTog === true && numTog === true)
    {
        passArray = passArray.concat(characters,symbols,numbers)
    }
    else if(symTog === true && numTog === false)
    {
        passArray = passArray.concat(characters,symbols)
    }
    else if(symTog === false && numTog === true)
    {
        passArray = passArray.concat(characters,numbers)
    }
    else
    {
        passArray = passArray.concat(characters)
    }
    password = ""
    character =""
    for(let i=0;i<lenEl.value;i+=1)
    {
        character=passArray[Math.floor(Math.random()*(passArray.length - 1))]
        password += character
    }
    password1El.textContent = password
    password = ""
    character =""
    for(let i=0;i<lenEl.value;i+=1)
    {
        character=passArray[Math.floor(Math.random()*(passArray.length - 1))]
        password += character
    }
    password2El.textContent = password
}

function copy1() {
    navigator.clipboard.writeText(password1El.textContent)
}

function copy2() {
    navigator.clipboard.writeText(password2El.textContent)
}