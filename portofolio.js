/*
====================================
GEN DESIGN
Portfolio
====================================
*/

document.addEventListener("DOMContentLoaded",()=>{

const cards=document.querySelectorAll(".portfolio-card");
const buttons=document.querySelectorAll(".portfolio-filter button");

const modal=document.getElementById("portfolioModal");
const modalImage=document.getElementById("modalImage");
const modalTitle=document.getElementById("modalTitle");
const modalDesc=document.getElementById("modalDesc");
const close=document.querySelector(".closeModal");

/*==============================
FILTER
==============================*/

buttons.forEach(button=>{

button.addEventListener("click",()=>{

buttons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const filter=button.textContent.trim().toLowerCase();

cards.forEach(card=>{

const category=(card.dataset.category||"semua").toLowerCase();

if(filter==="semua"||filter===category){

card.style.display="block";

setTimeout(()=>{

card.style.opacity="1";
card.style.transform="scale(1)";

},10);

}else{

card.style.opacity="0";
card.style.transform="scale(.9)";

setTimeout(()=>{

card.style.display="none";

},250);

}

});

});

});


/*==============================
MODAL
==============================*/

let current=0;

cards.forEach((card,index)=>{

card.addEventListener("click",()=>{

current=index;

openModal(current);

});

});

function openModal(index){

const card=cards[index];

const img=card.querySelector("img");

const title=card.querySelector("h3");
const desc=card.querySelector("p");

modalImage.src=img.src;

modalTitle.textContent=
title?title.textContent:"Portfolio";

modalDesc.textContent=
desc?desc.textContent:"Graphic Design";

modal.classList.add("active");

document.body.style.overflow="hidden";

}


/*==============================
CLOSE
==============================*/

close.addEventListener("click",closeModal);

modal.addEventListener("click",(e)=>{

if(e.target===modal){

closeModal();

}

});

function closeModal(){

modal.classList.remove("active");

document.body.style.overflow="auto";

}


/*==============================
KEYBOARD
==============================*/

document.addEventListener("keydown",(e)=>{

if(!modal.classList.contains("active")) return;

if(e.key==="Escape"){

closeModal();

}

if(e.key==="ArrowRight"){

current++;

if(current>=cards.length){

current=0;

}

openModal(current);

}

if(e.key==="ArrowLeft"){

current--;

if(current<0){

current=cards.length-1;

}

openModal(current);

}

});

});