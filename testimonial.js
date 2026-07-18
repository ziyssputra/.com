/*
====================================
GEN DESIGN
Testimonial Slider
====================================
*/

document.addEventListener("DOMContentLoaded",()=>{

const cards=document.querySelectorAll(".testimonial-card");

if(cards.length===0) return;

let current=0;
let interval;


/*==============================
CREATE INDICATORS
==============================*/

const slider=document.querySelector(".testimonial-slider");

const dots=document.createElement("div");

dots.className="testimonial-dots";

cards.forEach((card,index)=>{

const dot=document.createElement("span");

dot.className="testimonial-dot";

if(index===0){

dot.classList.add("active");

}

dot.addEventListener("click",()=>{

current=index;

showSlide(current);

restart();

});

dots.appendChild(dot);

});

slider.after(dots);


/*==============================
SHOW SLIDE
==============================*/

function showSlide(index){

cards.forEach((card,i)=>{

card.style.display="none";

card.classList.remove("active");

const dot=dots.children[i];

dot.classList.remove("active");

});

cards[index].style.display="block";

requestAnimationFrame(()=>{

cards[index].classList.add("active");

});

dots.children[index].classList.add("active");

}


/*==============================
NEXT
==============================*/

function next(){

current++;

if(current>=cards.length){

current=0;

}

showSlide(current);

}


/*==============================
PREVIOUS
==============================*/

function previous(){

current--;

if(current<0){

current=cards.length-1;

}

showSlide(current);

}


/*==============================
AUTO
==============================*/

function start(){

interval=setInterval(next,4000);

}

function restart(){

clearInterval(interval);

start();

}


/*==============================
ARROW
==============================*/

const prev=document.querySelector(".testimonial-prev");
const nextBtn=document.querySelector(".testimonial-next");

if(prev){

prev.onclick=()=>{

previous();

restart();

};

}

if(nextBtn){

nextBtn.onclick=()=>{

next();

restart();

};

}


/*==============================
SWIPE MOBILE
==============================*/

let startX=0;

slider.addEventListener("touchstart",(e)=>{

startX=e.touches[0].clientX;

});

slider.addEventListener("touchend",(e)=>{

const endX=e.changedTouches[0].clientX;

const distance=startX-endX;

if(Math.abs(distance)<40) return;

if(distance>0){

next();

}else{

previous();

}

restart();

});


showSlide(current);

start();

});