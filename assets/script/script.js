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
       console.log(userSelection);
          
    });
});
