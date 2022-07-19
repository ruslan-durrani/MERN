const express = require ("express");
const app = express();
app.get("/",function(request,response){
  response.send("hello");
});
app.get("/contact",function(request,response){
  response.send(
    "<h1>Contact: ruslandurrnai907@gmail.com </h1>"
  );
});
app.get("/about",function(request,response){
  response.send(
    "<h1>about Ruslan </h1>"
  );
});

app.get("/hobbies",function(request,response){
  response.send(
    "<p>Russi Hobbiess</p>"
  );
});


app.listen(3000,function(){
  console.log("hello");
});
