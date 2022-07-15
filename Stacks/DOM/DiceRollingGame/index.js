function randomNumberGenerator(){
  player1RandomNumber = Math.floor((Math.random()*6)+1);
  player2RandomNumber = Math.floor((Math.random()*6)+1);
  document.querySelector(".player1 img").setAttribute("src",player1RandomNumber+".png");
  document.querySelector(".player2 img").setAttribute("src",player2RandomNumber+".png");

}
function displayWinner(){

  if (player1RandomNumber > player2RandomNumber){
    document.querySelector(".heading-text-area h1").textContent = "🌹 Player One Is The Winner";
  }
  else if (player1RandomNumber < player2RandomNumber){
    document.querySelector(".heading-text-area h1").textContent = "🌹 Player Two Is The Winner";
  }
  else{
    document.querySelector(".heading-text-area h1").textContent = "🖕🏻 Its A Draw Mother Fucker";
  }
}
var player1RandomNumber;
var player2RandomNumber;
function Start(){
  randomNumberGenerator();
  displayWinner();
}
