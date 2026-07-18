/*
====================================
GEN DESIGN
Custom Cursor
====================================
*/

document.addEventListener("DOMContentLoaded",()=>{

const cursor=document.querySelector(".cursor");
const cursor2=document.querySelector(".cursor2");

if(!cursor || !cursor2) return;


/*==============================
DISABLE ON TOUCH DEVICE
==============================*/

if(
window.matchMedia("(pointer:coarse)").matches ||
'ontouchstart' in window
){

cursor.style.display="none";
cursor2.style.display="none";

return;

}


/*==============================
POSITION
==============================*/

let mouseX=0;
let mouseY=0;

let ringX=0;
let ringY=0;

document.addEventListener("mousemove",(e)=>{

mouseX=e.clientX;
mouseY=e.clientY;

cursor.style.left=mouseX+"px";
cursor.style.top=mouseY+"px";

});


/*==============================
SMOOTH FOLLOW
==============================*/

function animate(){

ringX+=(mouseX-ringX)*0.15;
ringY+=(mouseY-ringY)*0.15;

cursor2.style.left=ringX+"px";
cursor2.style.top=ringY+"px";

requestAnimationFrame(animate);

}

animate();


/*==============================
HOVER EFFECT
==============================*/

const targets=document.querySelectorAll(

"a,button,.btn-primary,.btn-secondary,.portfolio-card,.service-card,.price-card,.contact-card,.faq-question"

);

targets.forEach(item=>{

item.addEventListener("mouseenter",()=>{

cursor.style.transform="translate(-50%,-50%) scale(1.8)";
cursor2.style.transform="translate(-50%,-50%) scale(1.8)";

cursor2.style.borderColor="#ffffff";
cursor2.style.borderWidth="2px";

});

item.addEventListener("mouseleave",()=>{

cursor.style.transform="translate(-50%,-50%) scale(1)";
cursor2.style.transform="translate(-50%,-50%) scale(1)";

cursor2.style.borderColor="rgba(255,255,255,.6)";
cursor2.style.borderWidth="1px";

});

});


/*==============================
CLICK EFFECT
==============================*/

document.addEventListener("mousedown",()=>{

cursor.style.transform="translate(-50%,-50%) scale(.6)";
cursor2.style.transform="translate(-50%,-50%) scale(.8)";

});

document.addEventListener("mouseup",()=>{

cursor.style.transform="translate(-50%,-50%) scale(1)";
cursor2.style.transform="translate(-50%,-50%) scale(1)";

});


/*==============================
LEAVE WINDOW
==============================*/

document.addEventListener("mouseleave",()=>{

cursor.style.opacity="0";
cursor2.style.opacity="0";

});

document.addEventListener("mouseenter",()=>{

cursor.style.opacity="1";
cursor2.style.opacity="1";

});

});