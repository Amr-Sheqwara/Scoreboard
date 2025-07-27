let guest = document.getElementById("numberGuest");
let home = document.getElementById("numberHome");
let guestTrophy = document.getElementById("guestTrophy");
let homeTrophy = document.getElementById("homeTrophy");

let scoreHome = 0;
let scoreGuest = 0;

function updateTrophies() {
    if (scoreHome > scoreGuest) {
        homeTrophy.style.display = "inline";
        guestTrophy.style.display = "none";
    } else if (scoreGuest > scoreHome) {
        guestTrophy.style.display = "inline";
        homeTrophy.style.display = "none";
    } else {
        homeTrophy.style.display = "none";
        guestTrophy.style.display = "none";
    }
}

function increaseHome1() {
    scoreHome += 1;
    home.textContent = scoreHome;
    updateTrophies();
}

function increaseHome2() {
    scoreHome += 2;
    home.textContent = scoreHome;
    updateTrophies();
}

function increaseHome3() {
    scoreHome += 3;
    home.textContent = scoreHome;
    updateTrophies();
}

function increaseGuest1() {
    scoreGuest += 1;
    guest.textContent = scoreGuest;
    updateTrophies();
}

function increaseGuest2() {
    scoreGuest += 2;
    guest.textContent = scoreGuest;
    updateTrophies();
}

function increaseGuest3() {
    scoreGuest += 3;
    guest.textContent = scoreGuest;
    updateTrophies();
}

function reset() {
    scoreGuest = 0
    scoreHome = 0
    guest.textContent = scoreGuest;
    home.textContent = scoreHome;
    updateTrophies();
}

