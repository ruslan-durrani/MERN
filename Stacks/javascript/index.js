// ---------------Object Literal
// const employee = {
//   name:"Wasim",
//   age:12,
//   role: function(){
//     console.log("Manager");
//   },
//   position: function(){
//     console.log("position")
//   }
// };
//
// employee.position();
// employee.role();




// ------------------- factory    | anonymous Object
// function createCircle(radius){
//   return (
//     {
//       radius,
//       draw:function(){
//         console.log("draw")
//       }
//     }
//   );
// }
// const another = createCircle(12);
// console.log(circle.draw());


// ------------------- Constructor function
// function Circle(radius){
//   this.radius = radius;
//   this.draw = function(){
//     console.log("draw");
//   }
// }
// const circle = new Circle(2);
// console.log(circle.radius);




// ------------------- Property called Constructor : Use for object creation
// circle.constructor;
// another.constructor;



//------------ Who made Constructor ->>>>> Function()
// const Circle1 = new Function('radius',`
//     this.radius = radius;
//     this.draw=function(){
//         console.log('Loging');
//     }
// `);
// const c = new Circle1(1);




// ------------premitive-
// let a = 10;
// function increment(a){
//   a++;
// }
// increment(a);
// console.log(a);

// -------------reference-
// let a = {value:10};
// function increment(a){
//   a.value +=5;
// }
// increment(a);
// console.log(a.value);


// ------------ Dynamically Adding new Attributes to Object  -------------
// function Circle(radius){
//   this.radius=radius,
//   this.draw= function(){
//     console.log("drawing");
//   },
//   this.diameter= radius*2
// }
// const c = new Circle(12);
// console.log("Radius: "+c.radius);
// console.log("Drawing??? : ");
// c.draw();
// console.log("Dimaeter : "+c.diameter);
//
// // ---------------now-----
// c["id"] = Math.floor(Math.random()*10);
// console.log("Cirlce new Attribte added dynamically: "+c.id);
// const attribute = "hello";
// c[attribute] = "Ruslan";
// console.log("New Attribute : "+ c.hello);
// c.p = {j:90};
// console.log("New Attribute p: "+ c.p.j);




// --------- Deleting Attributes -----------
// function Circle(radius){
//   this.radius=radius,
//   this.draw= function(){
//     console.log("drawing");
//   },
//   this.diameter= radius*2
// }
// const c = new Circle(12);
// console.log(c);
// delete c['radius'];
// console.log(c);



// ----------- for key ----------

// function Circle(radius){
//   this.radius=radius,
//   this.draw= function(){
//     console.log("drawing");
//   },
//   this.diameter= radius*2
// }
// const c = new Circle(12);
// c["id"] = Math.floor(Math.random()*10);
// const attribute = "hello";
// c[attribute] = "Ruslan";
// c.p = {j:90};
//
// for (key in c){
//   if (typeof c[key] !== 'function' ){
//     console.log("non function: "+key);
//   }
//   // console.log(key,c[key]);
// }




// ----------- Collecting keys ---------
//
//
// function Circle(radius){
//   this.radius=radius,
//   this.draw= function(){
//     console.log("drawing");
//   },
//   this.diameter= radius*2
// }
//
// const keys = Object.keys(new Circle(2));
// console.log(keys);


// --------------- in ------------
//
// function Circle(radius){
//   this.radius=radius,
//   this.draw= function(){
//     console.log("drawing");
//   },
//   this.diameter= radius*2
// }
// const c = new Circle(2);
// if ('radius' in c){
//   console.log(c['radius']);
// }



// ------------- Abstraction -------------
// hiring or privitizing details frim user that the user is not entitled to use

// function Circle(radius){
//   this.radius = radius;
//   this.draw = function(){
//     return "Drawing";
//   };
//   let circleId = Math.floor(Math.random()*1000).toString();
//   this.getId=function(){
//     return circleId;
//   };
//   this.showProps = function(){
//     return `${this.radius}\n${this.getId()}\n${this.draw()} `
//   }
//
// }
// const c = new Circle(2);
// console.log(c.getId()); // It will refer to its closure data and will fetch it indirectly
// console.log(c.circleId); // It wont work cuz this is private to Object
// console.log(c.showProps());


// ------------ Getter Setter -------------
// function Circle(radius){
//   this.radius = radius;
//   this.draw=function(){
//     return "Drawing"
//   };
//   let defaultLocation = {x:1,y:2};
//   Object.defineProperty(this,"defaultLocation",{
//     get:function(){
//       return defaultLocation;
//     },
//     set:function(value){
//       if(defaultLocation.x === value.x && defaultLocation.y===value.y)
//         console.log("xy is same");
//       defaultLocation = value;
//     }
//   });
// }
// const c = new Circle(2);
// c.defaultLocation={x:1,y:2};




// ------------ Excercise ------------
// function StopWatch(){
//   // abstraction hide
//   let isStarted = false;
//   let date ;
//   // abstraction hide
//
//   // Attributes
//   let duration = 0;
//   this.start = function(){ //Behaviors / properties}
//     if(!isStarted){
//       console.log("Stop watch is Started");
//       isStarted = true;
//       date = new Date();
//     }
//     else{
//       console.log("Already Started");
//     }
//   };
//   this.stop = function(){
//     if(isStarted){
//       isStarted = false;
//       console.log("Stop watch is Stopped");
//       const stopDate = new Date();
//       duration = stopDate.getSeconds() - date.getSeconds();
//     }
//     else{
//       console.log("Already Stopped");
//     }
//   };
//   this.reset = function(){
//     console.log("Stop Watch is Resetted");
//     duration = 0;
//     isStarted = false;
//   };
//   Object.defineProperty(this,'duration',{
//     get:function(){
//       return duration
//     }
//   });
// }
//
// const sw = new StopWatch();
// sw.start();
// sw.stop();
// sw.reset();
