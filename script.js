
function clickInput() {
    let wrapper = document.querySelector(".wrapper")
    let res = document.querySelector("#res")

    if (wrapper.classList.contains("side") && res.classList.contains("hide") == false) {
        wrapper.classList.remove("side")
        res.classList.add("hide")
    }
}

function calculate() {
    document.querySelector(".wrapper").classList.add("side")
    let res = document.querySelector("#res")
    res.classList.remove("hide")
    let man = document.querySelector("#man")
    let woman = document.querySelector("#woman")
    let kid = document.querySelector("#kid")
    let duration = document.querySelector("#duration")
    let manM = 600
    let womanM = 400
    let kidM = 200
    let manB = 1500
    let womanB = 1000
    let manS = 1000
    let womanS = 500
    let kidS = 800


    if (duration.value >= 6) {
        manM = 800
        womanM = 550
        kidM = 300
        manB = 3000
        womanB = 2000
        manS = 1500
        womanS = 800
        kidS = 1200
    }

    let meat = (man.value * manM) + (woman.value * womanM) + (kid.value * kidM)
    let beer = (man.value * manB) + (woman.value * womanB)
    let soda = (man.value * manS) + (woman.value * womanS) + (kid.value * kidS)

    res.innerHTML = `<p>${meat / 1000}kg de carne</p>`
    res.innerHTML += `<p>${Math.ceil(beer / 1000)}L de cerveja</p>`
    res.innerHTML += `<p>${Math.ceil(soda / 1000)}L de refrigerante</p>`

}