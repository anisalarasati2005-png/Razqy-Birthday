function showPage(pageId) {

document.querySelectorAll(".page").forEach(function(page) {
    page.classList.remove("active");
});

setTimeout(function() {
    document.getElementById(pageId).classList.add("active");
}, 150);

}

function openLetter() {

const envelope = document.getElementById("envelope");
const message = document.getElementById("letterMessage");
const tapText = document.getElementById("tapText");

envelope.classList.toggle("open");

if (envelope.classList.contains("open")) {

    tapText.style.opacity = "0";

    setTimeout(function() {
        message.classList.add("show");
    }, 900);

} else {

    tapText.style.opacity = "1";
    message.classList.remove("show");

}

}

function openCard(card) {

if (card.classList.contains("open")) {
    return;
}

card.classList.add("open");

const cards = document.querySelectorAll(".love-card");
const openedCards = document.querySelectorAll(".love-card.open");
const continueButton = document.querySelector(".continue-love");

if (openedCards.length === cards.length) {
    continueButton.classList.add("ready");
}

}

const wishes = [
    "I hope you always have a reason to believe in yourself.",
    "I hope you never forget how capable you are.",
    "I hope you find courage whenever life gets difficult.",
    "I hope you always have people who genuinely care about you.",
    "I hope you become the person you've always wanted to be.",
    "I hope your dreams become bigger than your fears.",
    "I hope you get to experience the kind of happiness you deserve.",
    "I hope you never feel like you have to face everything alone.",
    "I hope you keep your kindness, even when the world isn't kind.",
    "I hope you find success without losing yourself along the way.",
    "I hope you laugh until your stomach hurts.",
    "I hope you have more peaceful nights than restless ones.",
    "I hope you get to travel to places you've always wanted to see.",
    "I hope you make memories that you'll still smile about years later.",
    "I hope you always have something to look forward to.",
    "I hope you learn to be proud of how far you've come.",
    "I hope life surprises you in beautiful ways.",
    "I hope you continue becoming someone your younger self would be proud of.",
    "I hope this year gives you more reasons to say, 'I'm glad I kept going.'",
    "I hope you always know that you are deeply loved."
];

let currentWish = 0;

function nextWish() {

    currentWish++;

    const wishNumber = document.getElementById("wishNumber");
    const wishText = document.getElementById("wishText");
    const wishButton = document.getElementById("wishButton");
    const wishBox = document.querySelector(".wish-box");
    const finalWish = document.getElementById("finalWish");

    if (currentWish < wishes.length) {

        wishBox.style.opacity = "0";

        setTimeout(function() {

            wishNumber.textContent =
                String(currentWish + 1).padStart(2, "0") + " / 20";

            wishText.textContent =
                wishes[currentWish];

            wishBox.style.opacity = "1";

        }, 300);

    } else {

        wishBox.style.display = "none";
        wishButton.style.display = "none";

        finalWish.style.display = "block";

    }

  }
