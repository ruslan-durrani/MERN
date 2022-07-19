
var buttonColors = ["blue","green","red","yellow"];
var gamePattern = [];
var userPattern = [];
var level = 0;
var Started = false;
$(document).keypress(function(){
  if(!Started){
    Started = true;
    $("#title-text").text("Level"+level);
    provideSequence();
  }
  startGame();
});

$(".btn").click(function(){
  var colorSelected = $(this).attr("id");
  userPattern.push(colorSelected);
  playSound(colorSelected);
  console.log(gamePattern);
  checkAnswer(colorSelected);
});
function checkAnswer(colorSelected){
  if(userPattern[level]===gamePattern[level]){
    provideSequence();
  }
  else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}
function playSound(color){
  var audio = new Audio("sounds/"+color+".mp3");
  audio.play();
}
function provideSequence(){
  var RandomColor = Math.floor(Math.random()*4);
  gamePattern.push(buttonColors[RandomColor]);
  $("."+RandomColor).fadeIn(100);
  level++;
}
