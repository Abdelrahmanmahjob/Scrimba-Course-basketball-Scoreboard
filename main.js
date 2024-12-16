let hCounter = document.querySelector(".h-counter")
let gCounter = document.querySelector(".g-counter")
let homeEle = document.querySelector(".home-counter")
let guestEle = document.querySelector(".guest-counter")
let countEle = document.querySelectorAll(".couters-btns button")

countEle.forEach(btn => {
    btn.addEventListener("click" , () => {
        if(homeCount > guestCount) {
            hCounter.classList.add("leader")
            gCounter.classList.remove("leader")
            console.log(homeCount)
        } else if (homeCount < guestCount) {
            gCounter.classList.add("leader")
            hCounter.classList.remove("leader")
            console.log(guestCount)
        } else {
            gCounter.classList.remove("leader")
            hCounter.classList.remove("leader")
            console.log(homeCount)
            console.log(guestCount)
        }
    })
})


let homeCount = 0
let guestCount = 0

function newGame() {
    homeCount = 0
    guestCount = 0
    
    homeEle.textContent = homeCount
    guestEle.textContent = guestCount

    gCounter.classList.remove("leader")
    hCounter.classList.remove("leader")
}

function addOneToHome() {
    homeCount += 1
    homeEle.textContent = homeCount   
}
function addTwoToHome() {
    homeCount += 2
    homeEle.textContent = homeCount   
}
function addThreeToHome() {
    homeCount += 3
    homeEle.textContent = homeCount   
}


function addOneToGuest() {
    guestCount += 1  
    guestEle.textContent = guestCount  
}
function addTwoToGuest() {
    guestCount += 2  
    guestEle.textContent = guestCount  
}
function addThreeToGuest() {
    guestCount += 3  
    guestEle.textContent = guestCount  
}

