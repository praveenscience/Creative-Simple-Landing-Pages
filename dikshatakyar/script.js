const hero=document.querySelector('.shadow');
const text=document.querySelector('h1');
const walk=100; //100px at most to be stretched
const anitext="Second year CS undergrad from University of Delhi.";

let index=0;

function writetext(){
    if(index<anitext.length){
    document.querySelector('.autotype').innerHTML=anitext.slice(0,index);
    index++;
    setTimeout(writetext,100);

    }
    // if(index>anitext.length){
    //     index=0;
    // }
}

writetext();




function shadow(e){
//  console.log(e);
//get the width and the height where we have hovered over
const width=hero.offsetWidth;
const height=hero.offsetHeight;
// const {offsetWidth : width ,offsetHeight : height} = hero;
//to get the cursor position
let x=e.offsetX;
let y=e.offsetY;
// let { offsetX : x,offsetY : y}=e;
// console.log(x,y); //small value as only hovering on h2--so modifying the x and y values
// console.log(this,e.target);
//this=thing that you listened on(hero),target=thing that actually triggerred on
if(this!==e.target){
    x=x+e.target.offsetLeft;
    y=y+e.target.offsetTop;
}

const xWalk= Math.round((x/width * walk)-(walk/2));
/* 100  = walk
50=as high as we go
-50 = as low as we go */
const yWalk=Math.round((y/height * walk)-(walk/2));


text.style.textShadow = `
${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
`;


}







hero.addEventListener('mousemove',shadow);
// hero.addEventListener('touchmove', function(e){
//     var width=hero.offsetWidth;
//     var height=hero.offsetHeight;
//   let x=  e.offsetX = e.targetTouches[0].clientX;
//   let y=  e.offsetY = e.targetTouches[0].clientY;
    
// const xWalk= Math.round((x/width * walk)-(walk/2));
// /* 100  = walk
// 50=as high as we go
// -50 = as low as we go */
// const yWalk=Math.round((y/height * walk)-(walk/2));


// text.style.textShadow = `
// ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
// ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
// ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
// ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
// `;
// console.log('touchmove func');
// });

var typed = new Typed(".typing", {
    strings: ["a Front End Developer.", " Beta-Microsoft Learn Student Ambassador.", "Currently learning DSA ! "],
    typeSpeed: 40,
    backSpeed: 30,
    loop: true
});

