const counter = document.querySelector("#counter")
const btnIncrm = document.querySelector("#btnIncrm")
const btnDec = document.querySelector("#btnDecr")
const btnRese = document.querySelector("#btnReset")

const icon10 = document.querySelector("#icon10")
const icon30 = document.querySelector("#icon30")
const icon40 = document.querySelector("#icon40")
const icon50 = document.querySelector("#icon50")
const icon100 = document.querySelector("#icon100")

let currentValue = 0

btnIncrm.addEventListener("click", ()=> {
    currentValue++
    counter.innerHTML = currentValue

    icon10.style.display = "none"
    icon30.style.display = "none"
    icon40.style.display = "none"
    icon50.style.display = "none"
    icon100.style.display = "none"

    if(currentValue === 10){
        counter.style.color = "red"
        icon10.style.display = "block"
    }
    else if(currentValue === 30){
        counter.style.color = "pink"
        icon30.style.display = "block"
    }
    else if(currentValue === 40){
        counter.style.color = "pink"
        icon40.style.display = "block"
    }
    else if(currentValue === 50){
        counter.style.color = "pink"
        icon50.style.display = "block"
    }
    else if(currentValue === 100){
        counter.style.color = "pink"
        icon100.style.display = "block"
    }
    else{
        counter.style.color = "black"
    }
})

btnDec.addEventListener("click", ()=> {
    if(currentValue > 0){
        currentValue--
        counter.innerHTML = currentValue
    }

    icon10.style.display = "none"
    icon30.style.display = "none"
    icon40.style.display = "none"
    icon50.style.display = "none"
    icon100.style.display = "none"

    if(currentValue === 10){
        counter.style.color = "pink"
        icon10.style.display = "block"
    }
    else if(currentValue === 30){
        counter.style.color = "pink"
        icon30.style.display = "block"
    }
    else if(currentValue === 40){
        counter.style.color = "pink"
        icon40.style.display = "block"
    }
    else if(currentValue === 50){
        counter.style.color = "pink"
        icon50.style.display = "block"
    }
    else if(currentValue === 100){
        counter.style.color ="pink"
        icon100.style.display = "block"
    }
    else{
        counter.style.color = "black"
    }
})

btnRese.addEventListener("click", ()=> {
    currentValue = 0
    counter.innerHTML = currentValue
    counter.style.color = "black"

    icon10.style.display = "none"
    icon30.style.display = "none"
    icon40.style.display = "none"
    icon50.style.display = "none"
    icon100.style.display = "none"
})