/*
====================================
GEN DESIGN
FAQ Accordion
====================================
*/

document.addEventListener("DOMContentLoaded",()=>{

const items=document.querySelectorAll(".faq-item");

if(items.length===0) return;


/*==============================
INIT
==============================*/

items.forEach(item=>{

const answer=item.querySelector(".faq-answer");

answer.style.maxHeight="0px";
answer.style.overflow="hidden";
answer.style.transition="max-height .35s ease";

});


/*==============================
CLICK
==============================*/

items.forEach(item=>{

const question=item.querySelector(".faq-question");
const answer=item.querySelector(".faq-answer");
const icon=question.querySelector("i");

question.addEventListener("click",()=>{

const active=item.classList.contains("active");


/* CLOSE ALL */

items.forEach(el=>{

el.classList.remove("active");

const ans=el.querySelector(".faq-answer");
const ic=el.querySelector(".faq-question i");

ans.style.maxHeight="0px";

if(ic){

ic.classList.remove("fa-minus");
ic.classList.add("fa-plus");

}

});


/* OPEN */

if(!active){

item.classList.add("active");

answer.style.maxHeight=
answer.scrollHeight+"px";

if(icon){

icon.classList.remove("fa-plus");
icon.classList.add("fa-minus");

}

}

});

});


/*==============================
OPEN FIRST
==============================*/

if(items[0]){

items[0]
.querySelector(".faq-question")
.click();

}

});