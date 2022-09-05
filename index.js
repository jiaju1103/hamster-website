const startButton = document.getElementById("start-game")
const choicesElement = document.getElementById('choose-play-place')

//choice buttons 
const winterPlayPlace = document.getElementById('winter-wonderland')
const cruisePlayPlace = document.getElementById('cruise-cruising')
const homePlayPlace = document.getElementById('cruise-cruising')

function startGame(){
    //makes start button disappear
    startButton.parentNode.removeChild(startButton);
    choicesElement.className = 'appear';
    console.log('deleted');
}

function displayPictures(event){

}

startButton.addEventListener("click", startGame)
