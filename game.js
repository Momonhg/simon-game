// set up array

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];


//*** end set up var


//activate new game///
$(document).on("keydown", newGame);
function newGame(event) {
  level = 0;
  gamePattern = [];// reset game pattern to have new game
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

// CREATE PATTERN activeButton
//loop nextSequence if randomChosenColour == after key pressed
function nextSequence() {
  userClickedPattern = [];// reset the userClickedPattern as empty
  level++;// level need to level
  $("h1").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  makeSound(randomChosenColour);
  butoonAnimation(randomChosenColour);
  gamePattern.push(randomChosenColour);
  console.log(gamePattern);

  // stop log after clicked and then check the elements to match with the clicked
  //


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
  // lastClicked = userClickedPattern.slice(-1)[0]; // cant compare array should change to element
  // console.log (userClickedPattern);


};

// CLICKED BUTTON


function checkAnswer() {

  for (var i = 0; i < userClickedPattern.length; i++) { //i =0; gamepattern 2 red yellow; click red; userpatter length = 1 - enter

    if (userClickedPattern[i] != gamePattern[i]) { // i= 0 -> userClickedPattern[0] =  red; gamePattern[0] = red -> equal -> not as statement if (when it is !==)
      console.log("false");
      makeSound('sounds/wrong.mp3')
      $("body").addClass("game-over");
      setTimeout(function() {
        $("body").removeClass("game-over");
      }, 200);

      $("#level-title").text("Game Over, Press Enter Key to Restart");

      //2. NEW GAME() if the user gets the sequence wrong.
      newGame();


      // return; // loop stop after no more running

    }
  } // i++ back to loop -> i =1 -> userClickedPattern =1 as earlier -> can't go back to loop -> console.log("true")

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


// modifying as cleaner code
// $("#green").on("click", function green() {
//   $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
//   $("#green").addClass("pressed");
//   setTimeout(function() {
//     $("#green").removeClass("pressed");
//   }, 100);
// });
//
// $("#red").on("click", function red() {
//   $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
//   $("#red").addClass("pressed");
//   setTimeout(function() {
//     $("#red").removeClass("pressed");
//   }, 100);
// });
//
//
// $("#yellow").on("click", function yellow() {
//   $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
//   $("#yellow").addClass("pressed");
//   setTimeout(function() {
//     $("#yellow").removeClass("pressed");
//   }, 100);
// });
//
// $("#blue").on("click", function blue() {
//   $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
//   $("#blue").addClass("pressed");
//   setTimeout(function() {
//     $("#blue").removeClass("pressed");
//   }, 100);
// });
//
//
// // *** ENDDDD color add sound and animation
//
//
//
//
//
//
//
//
//
// // END CLICKED BUTTON





/// NOT WORKING CODE
//Timeout
// while (lastPattern == lastClicked){
//   nextSequence();
//   level++;
//   $("h1").text("Level " + level);
//   nextSequence();
//
// }


// checkAnswer

// //check answer
// function checkAnswer(userClickedPattern, gamePattern){
//   if (userClickedPattern === gamePattern) {
//     return true;
//   }
//   else if (userClickedPattern === null || gamePattern === null)
//   {
//     return false;
//   }
//   else if (userClickedPattern.length !== gamePattern.length)
//   {
//     return false;}
//
//   // If you don't care about the order of the elements inside
//   // the array, you should sort both arrays here.
//   // Please note that calling sort on an array will modify that array.
//   // you might want to clone your array first.
// else {
//   for (var i = 0; i < userClickedPattern.length; i++) {
//     if (userClickedPattern[i] !== gamePattern[i]) return false;
//   }}
//   return ("need");
// };


// for(var i = 0; i < userClickedPattern.length; i++){
//
// if (lastClicked == lastPattern && userClickedPattern[i] == gamePattern[i]) {
//
//
// console.log("true");
//
//
// }

//
// else if (lastClicked !== lastPattern) {
//
// console.log("false 1")
//
// }
// else if (userClickedPattern[i] !== gamePattern[i])  {
//
// console.log("false 2")
//
// }
//
// else {
//     console.log("false 2")
// }
//
//
//
//
// while (lastPattern == lastClicked){
//   nextSequence();
// // loop continue nextSequence
//
// }
// alert ("not ok");
// //end of loop
// };

//
