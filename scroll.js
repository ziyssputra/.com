/*
====================================
GEN DESIGN
Scroll
====================================
*/

document.addEventListener("DOMContentLoaded",()=>{

const progress=document.getElementById("progress");
const topBtn=document.getElementById("topBtn");
const header=document.getElementById("header");


/*==============================
SCROLL
==============================*/

window.addEventListener("scroll",()=>{

const scrollTop=window.pageYOffset;

const docHeight=document.documentElement.scrollHeight-window.innerHeight;

const percent=(scrollTop/docHeight)*100;

if(progress){

progress.style.width=percent+"%";

}


/*==============================
HEADER
==============================*/

if(header){

if(scrollTop>80){

header.classList.add("active");

}else{

header.classList.remove("active");

}

}


/*==============================
BACK TO TOP
==============================*/

if(topBtn){

if(scrollTop>500){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

}

});


/*==============================
BACK TO TOP CLICK
==============================*/

if(topBtn){

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}


/*==============================
SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",(e)=>{

const id=link.getAttribute("href");

const target=document.querySelector(id);

if(!target) return;

e.preventDefault();

window.scrollTo({

top:target.offsetTop-80,

behavior:"smooth"

});

});

});


/*==============================
ACTIVE NAV
==============================*/

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

});