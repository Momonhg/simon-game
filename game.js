// set up array

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];



//activate new game///
$(document).on("keydown", newGame);
function newGame(event) {
  level = 0;
  gamePattern = [];
  var eventHappend = {
    eventType: "keydown",
    key: "Enter"
  }
  if (event.key == "Enter") {
    $("h1").text("Level " + 0);
    nextSequence();
  }

};

//activate new game///

// CREATE PATTERN 
function nextSequence() {
  userClickedPattern = [];
  level++;
  $("h1").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  makeSound(randomChosenColour);
  butoonAnimation(randomChosenColour);
  gamePattern.push(randomChosenColour);
  console.log(gamePattern);



};

// END CREATE PATTERN



// CLICKED BUTTON
$(".btn").on("click", clickedByUser);

function clickedByUser() {
  var userChosenColour = this.id;
  makeSound(userChosenColour);
  butoonAnimation(userChosenColour);
  userClickedPattern.push(userChosenColour);
  checkAnswer();
  


};

// CLICKED BUTTON


function checkAnswer() {

  for (var i = 0; i < userClickedPattern.length; i++) { 

    if (userClickedPattern[i] != gamePattern[i]) { 
      console.log("false");
      makeSound('sounds/wrong.mp3')
      $("body").addClass("game-over");
      setTimeout(function() {
        $("body").removeClass("game-over");
      }, 200);

      $("#level-title").text("Oh no! Press Enter Key to Restart");

     
      newGame();


    

    }
  } 

console.log("true");
if (userClickedPattern.length === gamePattern.length){
  setTimeout(function() {
    nextSequence();
  }, 1000);
}


};
// color add sound and animation

function makeSound(id) {
  switch (id) {
    case "red":
      var red = new Audio('sounds/red.mp3');
      red.play();
      break;
    case "blue":
      var blue = new Audio('sounds/blue.mp3');
      blue.play();
      break;
    case "green":
      var green = new Audio('sounds/green.mp3');
      green.play();
      break;

    case "yellow":
      var yellow = new Audio('sounds/yellow.mp3');
      yellow.play();
      break;



  }
}

function butoonAnimation(currentId) {
  var chosenClicked = $("#" + currentId);
  chosenClicked.addClass("pressed");
  setTimeout(function() {
    chosenClicked.removeClass("pressed");
  }, 100);
  chosenClicked.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
};
