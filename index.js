let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

homeScore.textContent = 0;
guestScore.textContent = 0;

const homeAddOne = () => {
    newScore = Number(homeScore.textContent) + 1
    homeScore.textContent = newScore;
    changeFontSize()
    highlightLeader()
}
const homeAddTwo = () => {
    newScore = Number(homeScore.textContent) + 2
    homeScore.textContent = newScore;
    changeFontSize()
    highlightLeader()
}
const homeAddThree = () => {
    newScore = Number(homeScore.textContent) + 3
    homeScore.textContent = newScore;
    changeFontSize()
    highlightLeader()
}

const guestAddOne = () => {
    newScore = Number(guestScore.textContent) + 1
    guestScore.textContent = newScore;
    changeFontSize()
    highlightLeader()
}
const guestAddTwo = () => {
    newScore = Number(guestScore.textContent) + 2
    guestScore.textContent = newScore;
    changeFontSize()
    highlightLeader()
}
const guestAddThree = () => {
    newScore = Number(guestScore.textContent) + 3
    guestScore.textContent = newScore;
    changeFontSize()
    highlightLeader()
}

const newGame = () => {
    homeScore.textContent = 0;
    guestScore.textContent = 0;
    highlightLeader()
}

function changeFontSize() {
    if (homeScore.textContent.length >=3) {
        homeScore.style.fontSize = "85px"
    } 
    if (guestScore.textContent.length >=3) {
        guestScore.style.fontSize = "85px"
    }   
}

function highlightLeader() {
    if (Number(homeScore.textContent) === Number(guestScore.textContent)) {
        document.getElementById("home-title").style.color = "#FFFFFF"
        document.getElementById("guest-title").style.color = "#FFFFFF"
    } else if (Number(homeScore.textContent) > Number(guestScore.textContent)) {
        document.getElementById("home-title").style.color = "#FF0000"
        document.getElementById("guest-title").style.color = "#FFFFFF"
    } else if (Number(homeScore.textContent) < Number(guestScore.textContent)) {
        document.getElementById("guest-title").style.color = "#FF0000"
        document.getElementById("home-title").style.color = "#FFFFFF"
    }
}