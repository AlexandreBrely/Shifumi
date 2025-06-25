//user
let getChoice = "";

//score
let userScore = 0;
let iaScore = 0;
let drawCount = 0;
let round = 0;
let maxRounds = 5;

function userChoice(choice) {
    getChoice = choice;
    // console.log(getChoice)
    // Afficher "VS"
    const vs = document.getElementById("vsOverlay");
    const vsSound = document.getElementById("vsSound");

    vs.style.display = "block";
    vs.style.animation = "flash 0.9s ease-out";

    // Joue le son
    vsSound.currentTime = 0;
    vsSound.play();

    // Cache après l’animation
    setTimeout(() => {
        vs.style.display = "none";
        vs.style.animation = "none";
    }, 1000);


    battle()
};



// // IA

let iaTab = ["feu", "eau", "terre", "metal", "esprit"];

function getIaChoice() {
    let iardm = Math.floor(Math.random() * iaTab.length);
    return iaTab[iardm];
};
//stockage GIFS
const gifs = {

    feu: "https://media.tenor.com/97Gs8bCX7ioAAAAj/fireball-fire.gif",
    eau: "https://media.tenor.com/PGYpEvpXLkcAAAAj/water-splash-moana-2.gif",
    terre: "https://media1.tenor.com/m/f-7RWadEmTUAAAAd/alphonse-elric.gif",
    metal: "https://media1.tenor.com/m/f-7RWadEmTUAAAAd/alphonse-elric.gif",
    esprit: "https://media1.tenor.com/m/wYED_j6aHZMAAAAC/freakingout-pokemon.gif"

};

//playing GIFS
function displayGif(camp, choice) {

    let cible;
    if (camp == "joueur") {
        cible = "gifUser";
    } else {
        cible = "gifIa";
    }
    let gifPath = gifs[choice]
    console.log(gifPath)
    let gifRunning = '<img src="' + gifPath + '" class="img-fluid" alt="' + camp + ' ' + choice + '">';
    document.getElementById(cible).innerHTML = gifRunning;

}

// BAGARRE!

function battle() {
    let iaChoice = getIaChoice();

    console.log("IA", iaChoice);
    console.log("user", getChoice);

    let USERGIFS = getChoice
    let IAGIFS = iaChoice

    setTimeout(() => {
        displayGif("joueur", USERGIFS);
        displayGif("ia", IAGIFS);
    }, 1000);

    if (getChoice === iaChoice) {
        console.log("egalité!");
        drawCount++;

    } else if (getChoice == "feu" && iaChoice == "terre") {
        console.log("victoire!")
        userScore++;

    } else if (getChoice == "feu" && iaChoice == "esprit") {
        console.log("victoire!")
        userScore++;

    } else if (getChoice == "eau" && iaChoice == "feu") {
        console.log("victoire!")
        userScore++;

    } else if (getChoice == "eau" && iaChoice == "metal") {
        console.log("victoire!")
        userScore++;

    } else if (getChoice === "terre" && iaChoice === "eau") {
        console.log("victoire");
        userScore++;

    } else if (getChoice === "terre" && iaChoice === "metal") {
        console.log("victoire");
        userScore++;

    } else if (getChoice === "metal" && iaChoice === "esprit") {
        console.log("victoire");
        userScore++;

    } else if (getChoice === "metal" && iaChoice === "feu") {
        console.log("victoire");
        userScore++;

    } else if (getChoice == "esprit" && iaChoice == "eau") {
        console.log("victoire!")
        userScore++;

    } else if (getChoice == "esprit" && iaChoice == "terre") {
        console.log("victoire!")
        userScore++;

    } else {
        console.log("defaite!")
        iaScore++;
    }
    round++;
    console.log(`Score → Joueur: ${userScore} | IA: ${iaScore} | Égalités: ${drawCount}`);
    // let dCompteur = `Score → Joueur: ${userScore} | IA: ${iaScore} | Égalités: ${drawCount}`
    setTimeout(() => {
        document.getElementById("compteur").innerText = `Score → Joueur: ${userScore} | IA: ${iaScore} | Égalités: ${drawCount}`;
        // document.getElementById("compteur").innerText = dCompteur;
    }, 1500);


    if (round >= maxRounds) {
        gameOver();
    };
    getChoice = "";
    iaChoice = "";
}

function gameOver() {
    if (userScore > iaScore) {

        console.log("Graaaaand gagnant!!");
        document.getElementById("battleinfo").innerText = "Grand gagnant de la bataille élémentaire"

    }
    else if (userScore < iaScore) {
        console.log("le combat est perdu!");
        document.getElementById("battleinfo").innerText = "Défaite de la bataille élémentaire"

    }
    else {
        console.log("une égalité!!!")
        document.getElementById("battleinfo").innerText = "C'est une égalité!"
    }

}
