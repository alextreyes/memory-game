const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];
function notMatched(){
  let numberOfCardsSelected = document.querySelectorAll('.selected')

  numberOfCardsSelected[0].style.backgroundColor = 'white'
  numberOfCardsSelected[1].style.backgroundColor = 'white'
  numberOfCardsSelected[0].classList.remove('selected');
  numberOfCardsSelected[1].classList.remove('selected');

  ColorsSelected.length = 0;
  mouseForYou();
  }
function matched (){
    let numberOfCardsSelected = document.querySelectorAll('.selected');
    numberOfCardsSelected[0].classList.add('matched');
    numberOfCardsSelected[1].classList.add('matched');
    numberOfCardsSelected[0].classList.remove('selected');
    numberOfCardsSelected[1].classList.remove('selected');
    ColorsSelected.length = 0;
    mouseForYou();
    }
// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick)

    ;

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

let ColorsSelected = [];
// let gameBody = document.querySelectorAll('div div')

function noMouseForYou (){
  let gameBody = document.querySelectorAll('div div')
  for (let i of gameBody){
    i.removeEventListener("click",handleCardClick);
  }
}
function mouseForYou(){
  let gameBody = document.querySelectorAll('div div')
  for (let i of gameBody){
    i.addEventListener("click",handleCardClick);
  }

}
// TODO: Implement this function!
function handleCardClick(event) {
  //here is where i started
  if (ColorsSelected.length < 2){

    if (event.target.classList.length > 1){
      console.log('this cart is already picked')
    }
    else {
    event.target.style.backgroundColor = event.target.classList.value;
    event.target.classList.add('selected')
    
    localStorage.setItem('colorPicked',event.target.classList.value)
    ColorsSelected.push(event.target.classList.value)
    }
  }
   if (ColorsSelected.length == 2){
    noMouseForYou();
    
      if (ColorsSelected[0] === ColorsSelected[1]){
      console.log("it's a match!1")
      setTimeout(matched,1000);
      


    }

      else if (ColorsSelected[0] != ColorsSelected[1]){
      setTimeout(notMatched, 1000 )
      console.log("it's not a match!@!@");
    }

  }
}

// when the DOM loads
createDivsForColors(shuffledColors);
