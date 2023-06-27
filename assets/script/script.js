// Get DOM elements
const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_result img");
const computerResult = document.querySelector(".computer_result img");
const result = document.querySelector(".result");
optionImages = document.querySelectorAll(".option");
const userScore = 0;
const computerScore = 0;



// Loops through each image in the options
optionImages.forEach ((image, index) => {
    image.addEventListener('click', (e) => {
      
        // Add selected image to class active to change the opacity back to 1 when clicked
        image.classList.add('active');

        // Remove active when clicking on a different option
        optionImages.forEach ((image2, index2) => {
            index !== index2 && image2.classList.remove('active');
        });

        // Replace the user image with the selected option
       let userSelection = e.currentTarget.id;
       if (userSelection === "rock"){
        userResult.src = "assets/images/rock.jpg";
       } else if (userSelection === "paper"){
        userResult.src = "assets/images/paper.jpg";
       } else if (userSelection === "scissors"){
        userResult.src = "assets/images/scissors.jpg";
       } else if (userSelection === "lizzard"){
        userResult.src = "assets/images/lizzard.jpg";
       } else {
        userResult.src = "assets/images/spok.jpg";
       }
       

       // Generate random number between 0 and 4
       let randomNumber = Math.floor(Math.random() * 5);
       
       // Add variable to store src path to the images for computer guess
       let computerImages = ["assets/images/rock.jpg", "assets/images/paper.jpg", "assets/images/scissors.jpg", "assets/images/lizzard.jpg", "assets/images/spok.jpg"]

       // Replace computer result image with randomly generated one every time player makes a guess
       computerResult.src = computerImages[randomNumber]; 
       
       
       // Assign a text value to the computer option (based on generated random number)(R -rock, P - paper, S - scissors, L - lizzard, SP - Spok)
       let computerValue = ["R", "P", "S", "L", "SP"][randomNumber];

       // Assign a text value to the player's option (based on index)
       let playerValue = ["R", "P", "S", "L", "SP"][index];

       // Variable to store all the possible outcomes of the game
       let outcomes = {
        RR: "Draw",
        RP: "Loose",
        RS: "Win",
        RL: "Win",
        RSP: "Loose",
        PR: "Win",
        PP: "Draw",
        PS: "Loose",
        PL: "Loose",
        PSP: "Win",
        SR: "Loose",
        SP: "Win",
        SS: "Draw",
        SL: "Win",
        SSP: "Loose",
        LR: "Loose",
        LP: "Win",
        LS: "Loose",
        LL: "Draw",
        LSP: "Win",
        SPR: "Win",
        SPP: "Loose",
        SPS: "Win",
        SPL: "Loose",
        SPSP: "Draw"
       }

       // Check the value based on player selection and computer generated selection
       let outcomeValues = outcomes[playerValue + computerValue];

       // Display the result of the match
       result.textContent = playerValue === computerValue ? "Draw" : `You ${outcomeValues}`;

       if (outcomeValues === "Win") {
           incrementPlayerScore();
       }

       if (outcomeValues === "Loose") {
        incrementComputerScore();
        }
       console.log(outcomeValues);

    });
});


function incrementPlayerScore() {

    let oldScore = parseInt(document.getElementById("player_score").innerText);
    document.getElementById("player_score").innerText = ++oldScore;

}

function incrementComputerScore() {

    let oldScore = parseInt(document.getElementById("computer_score").innerText);
    document.getElementById("computer_score").innerText = ++oldScore;

}