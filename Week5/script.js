
window.addEventListener("load", function () {
    let hour = new Date().getHours();

    if (hour < 12) {
        alert("Good morning, Champions League fan!");
    } else if (hour < 18) {
        alert("Good afternoon, Champions League fan!");
    } else {
        alert("Good evening, Champions League fan!");
    }
});



let votes = {
    Madrid: 0,
    PSG: 0,
    Bayern: 0,
    Arsenal: 0,
    Atletico: 0,
    Sporting: 0
};

let voteButtons = document.querySelectorAll(".button-group button");
let voteResult = document.getElementById("vote-result");

voteButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        let team = button.getAttribute("data-team");

        votes[team]++;

        document.getElementById(team + "-count").textContent = votes[team];

        voteResult.textContent = "You voted for " + team + "!";
        console.log(team + " now has " + votes[team] + " vote(s).");
    });
});



let input = document.getElementById("fan-name");

input.addEventListener("focus", function () {
    input.style.backgroundColor = "lightyellow";
    console.log("Fan name input was clicked.");
});

input.addEventListener("input", function () {
    console.log("Fan name: " + input.value);
});



let playerCards = document.querySelectorAll(".player-card");

playerCards.forEach(function (card) {
    card.addEventListener("mouseover", function () {
        console.log("Hovering over " + card.querySelector("h3").textContent);
    });

    card.addEventListener("mouseout", function () {
        console.log("Stopped hovering over player card.");
    });
});



let toggleBtn = document.getElementById("toggle-players");
let players = document.getElementById("players");

toggleBtn.addEventListener("click", function () {
    if (players.style.display === "none") {
        players.style.display = "block";
        toggleBtn.textContent = "Hide Players";
    } else {
        players.style.display = "none";
        toggleBtn.textContent = "Show Players";
    }
});



let themeBtn = document.getElementById("change-theme");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    console.log("Theme changed.");
});