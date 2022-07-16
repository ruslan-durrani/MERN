
for (var i = 0; i < document.querySelectorAll("button.drum").length; i++) {

  document.querySelectorAll("button.drum")[i].addEventListener("click",function(){
    // console.log(this.innerHTML);
    handleSound(this.innerHTML);
    animateButton(this.innerHTML);
    // playSound(i);

  });

}

document.addEventListener("keypress", function(e){
  handleSound(e.key);
  animateButton(e.key);

});

function handleSound(i){
  switch(i){
    case "w":new Audio("sounds/crash.mp3").play();break;
    case "a":new Audio("sounds/kick-bass.mp3").play();break;
    case "s":new Audio("sounds/snare.mp3").play();break;
    case "d":new Audio("sounds/tom-1.mp3").play();break;
    case "j":new Audio("sounds/tom-2.mp3").play();break;
    case "k":new Audio("sounds/tom-3.mp3").play();break;
    case "l":new Audio("sounds/tom-4.mp3").play();break;
  }
}


function animateButton(i){
  document.querySelector("."+i).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+i).classList.remove("pressed");
  },100);
}
