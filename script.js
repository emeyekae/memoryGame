const gameContainer = document.getElementById("game");
let pick1 = null;
let pick2 = null;
let picksFlipped = 0;

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


//const alrt = function(){console.log("GAME OVER")};

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

    newDiv.addEventListener("click", handleCardClick);
     

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked

  console.log("you just clicked", event.target);

  console.log(picksFlipped)
  let card = event.target;
  card.style.backgroundColor = event.target.classList[0];

  if (!pick1 && !pick2) {
   card.classList.add('Flipped');
   pick1 = card;
   pick2 = "";
   pick1.removeEventListener('click',handleCardClick )
  } else if ( pick1 && !pick2){
    card.classList.add('Flipped');
    pick2 = card;
    pick2.removeEventListener('click',handleCardClick )

    if (pick1.classList[0] ==  pick2.classList[0]) {
     console.log("They Match")
     pick1.removeEventListener('click',handleCardClick )
     pick2.removeEventListener('click',handleCardClick )
     pick1 =  null;
     pick2 = null;
     picksFlipped+=2
    // pick2.removeEventListener('click',handleCardClick )
     if (picksFlipped >= COLORS.length){
      pick1 =  null;
      pick2 = null;
      pickFlipped = 0;
      setTimeout(function(){ 
     setTimeout(function(){alert(`GAME OVER\nClear Browser if you want to play again`)},1);
      },1000);
    }
    } else {
      console.log("They don't match")
      picksFlipped+=2;
      if (picksFlipped >= COLORS.length){
        pick1.removeEventListener('click',handleCardClick )
        pick2.removeEventListener('click',handleCardClick )
        pickFlipped =0;
          setTimeout(function(){
          pick1.style.backgroundColor = "";
          pick2.style.backgroundColor = "";
          pick1.classList.remove("flipped");
          pick2.classList.remove("flipped");
          pick1 = null;
          pick2 = null;
          setTimeout(function(){alert(`GAME OVER\nClear Browser if you want to play again`)},10)
        },1000);
       }  else {
      pick1.addEventListener('click',handleCardClick )
       pick2.addEventListener('click',handleCardClick )
      setTimeout(function(){
      pick1.style.backgroundColor = "";
      pick2.style.backgroundColor = "";
      pick1.classList.remove("flipped");
      pick2.classList.remove("flipped");
      pick1 = null;
      pick2 = null;
      },1000);
    }
    }
  }
}
 



// when the DOM loads
createDivsForColors(shuffledColors);



