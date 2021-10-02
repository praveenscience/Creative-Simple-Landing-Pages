// console.log("Connected");

// Selecting Elements
// ==========================


// let element=document.getElementById("changer");

// element.style.backgroundColor="purple";
// element.innerText="College Kholo Bhai";
// element.innerHTML="<b>Jai Hind</b>";



// Events:
// ==============



// element.addEventListener("click",function(event){

//   element.style.backgroundColor="red";

// let color=element.style.backgroundColor;

// if(color==="black"){
//     element.style.backgroundColor="red";
// }else{

//     element.style.backgroundColor="black";

// }
// });





//Dynamic Changer
// ==========================



let element=document.getElementById("changer");
element.addEventListener("mouseover",function(event){

    console.log("Working");


console.log(event.offsetX+" "+event.offsetY);
let x=event.offsetX;
let y=event.offsetY;
element.style.backgroundColor=`rgb(${x},45,${y})`;


});























