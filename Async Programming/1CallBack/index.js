//2.reverseString()
//Should use above 2 function as callback function

// create 3 function handler above function and pass above 2 function as callback


// function makeuppercase(value) {
//   console.log(value.toUpperCase());
// }


// function reverseString(value) {
//   console.log(value.split("").reverse().join(""));
// }

// function handleName(name, callback) {
//   const fullname = `${name} ia a Good`; //normal string which i m trying to print
//   console.log(fullname);
//   callback(fullname);
// }

//handleName("Tajuddin", makeuppercase); //makeuppercase is callback fumction

//handleName("Tajuddin", reverseString);
//split=>string into array
//join=>aaray into string


// const time=1000;
// //Raise a dough
// function raiseDough(callback) {
//   console.log("waiting for dough to rise");
//   setTimeout(() => {
//     console.log("Dough is ready");
//     callback();
//   }, 3 *time);


  //Roll dough
// function rollDough(callback) {
//     console.log("rolling the dough");
//     setTimeout(() => {
//       console.log("Dough is rolled");
//       callback();
//     }, 2 *time);
//   }
  

//pour sauce
// function pourSauce(callback) {
//   console.log("pouring the sauce");
//   setTimeout(() => {
//     console.log("sauce is poured");
//     callback();
//   }, 1 *time);
// }


//Adding toppings
// function addToppings(callback) {
//   console.log("adding toppings");
//   setTimeout(() => {
//     console.log("toppings are added");
//     callback();
//   }, 1 *time);
// }


//Bake pizza
// function bakePizza(callback) {
//   console.log("baking the pizza");
//   setTimeout(() => {
//     console.log("pizza is ready");
//   }, 10 *1000);
// }


//Delivery pizza
// function deliveryPizza(callback) {
//   console.log("Delivery the pizza");
//   setTimeout(() => {
//     console.log("pizza is delivered");
//     callback();
//   }, 5 * 1000);
// }


//lets use all the function and nesting of one inside another
// 

// Interview Rounds
// 1.Screening Round
// 2.Telephone Round
// 3.Technical Round
// 4.HR Round



// setTimeout(() => {
//     document.querySelector(".container").innerHTML=`<h1>10</h1>`;
//     setTimeout(() => {
//         document.querySelector(".container").innerHTML=`<h1>9</h1>`;
//         setTimeout(() => {
//             document.querySelector(".container").innerHTML=`<h1>8</h1>`;
//             setTimeout(() => {
//                 document.querySelector(".container").innerHTML=`<h1>7</h1>`;
//                 setTimeout(() => {
//                     document.querySelector(".container").innerHTML=`<h1>6</h1>`;
//                     setTimeout(() => {
//                         document.querySelector(".container").innerHTML=`<h1>5</h1>`;
//                         setTimeout(() => {
//                             document.querySelector(".container").innerHTML=`<h1>4</h1>`;
//                             setTimeout(() => {
//                                 document.querySelector(".container").innerHTML=`<h1>3</h1>`;
//                                 setTimeout(() => {
//                                     document.querySelector(".container").innerHTML=`<h1>2</h1>`;
//                                     setTimeout(() => {
//                                         document.querySelector(".container").innerHTML=`<h1>1</h1>`;
//                                         setTimeout(() => {
//                                             document.querySelector(".container").innerHTML=`
//                                             <h2><span>Happy Holidays</span></h2>`;
//                                     },1000);
//                                 },1000);
//                             },1000);
//                         },1000);
//                     },1000);
//                 },1000);    
//             },1000);        
//         },1000);              
//     },1000);                    
// },1000);



for(let i = 0; i >=0;i--){
    setTimeout(() => {
        console.log(i);
    },1000);
}


for(var i = 10; i >=0;i--){
        console.log(i);
    }



//let->block scope
//var->function scope