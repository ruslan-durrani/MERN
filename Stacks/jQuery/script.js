$(document).keypress(function(event){
  $("h1").text(event.key);
});

$("button").click(function(){
  $("h1").css("color","red");
  setTimeout(function(){
    $("h1").css("color","black");
  },100);
});

// $("h1").before("<button>Ruslan Durrani</button>");
$("button.x").on("click",function(){
  $("h1").fadeToggle();
});

// ------------------------------------
// Adding Elements annonymously to page
// Adding Elements annonymously to page
// Adding Elements annonymously to page
function functionget(){
  var title = document.querySelector(".note-title").value;
  var text = document.querySelector(".note-text").value;
  var note = new Note(title,text);
  addNote(note);
}
function Note(title,text, remove){
  this.title = title;
  this.text = text;
}

function addNote(note){
  var tag1 = document.createElement("h1");
  var title = document.createTextNode(note.title);
tag1.appendChild(title);
  var tag2 = document.createElement("p");
  var text = document.createTextNode(note.text);
tag2.appendChild(text);
  var tagSex = document.createElement("div");
  tagSex.appendChild(tag1);
  tagSex.appendChild(tag2);
tagSex.classList.add("bank-beauty");
tagSex.classList.add("align-data");
var e = document.querySelector(".bank");
e.appendChild(tagSex);
}
