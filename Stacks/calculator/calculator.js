const express = require("express");
const bodyParser  = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname+"/bmicalculator.html");
});
app.post("/bmicalculator",function(req,res){
  var weight = parseFloat(req.body.w);
  var height = parseFloat(req.body.h);
  res.send("Your BMI is: "+(weight/Math.pow(height,2)));
})

// calculator
app.get("/",function(request,response){
  response.sendFile(__dirname+"/index.html");

});
app.post("/",function(req,res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1+num2;
  res.send("Thanks the result is: "+result);
});
app.listen(3000,function(){
  console.log("Hello");
});




// nodemon
// nodemon
// nodemon
// nodemon
// nodemon
