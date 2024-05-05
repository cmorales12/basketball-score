let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeCount = 0
let guestCount = 0


function oneHome() {
    homeCount += 1
    homeScore.textContent = homeCount
}

function twoHome() {
    homeCount += 2
    homeScore.textContent = homeCount
}

function threeHome() {
    homeCount += 3
    homeScore.textContent = homeCount
}

function oneGuest() {
    guestCount += 1
    guestScore.textContent = guestCount
}

function twoGuest() {
    guestCount += 2
    guestScore.textContent = guestCount
}

function threeGuest() {
    guestCount += 3
    guestScore.textContent = guestCount
}