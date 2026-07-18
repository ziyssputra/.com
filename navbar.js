/*
====================================
GEN DESIGN
Navbar
====================================
*/

document.addEventListener("DOMContentLoaded",()=>{

const header=document.getElementById("header");
const menu=document.querySelector(".nav-menu");
const menuButton=document.getElementById("menuButton");
const links=document.querySelectorAll(".nav-menu a");
const sections=document.querySelectorAll("section");


/*========================
HEADER SCROLL
========================*/

function headerScroll(){

if(window.scrollY>80){

header.classList.add("active");

}else{

header.classList.remove("active");

}

}

window.addEventListener("scroll",headerScroll);

headerScroll();


/*========================
ACTIVE MENU
========================*/

function activeMenu(){

let current="";

sections.forEach(section=>{

const top=section.offsetTop-160;
const height=section.offsetHeight;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

links.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

}

window.addEventListener("scroll",activeMenu);

activeMenu();


/*========================
MOBILE MENU
========================*/

if(menuButton){

menuButton.addEventListener("click",()=>{

menu.classList.toggle("show");

menuButton.classList.toggle("active");

});

}


/*========================
CLOSE MENU
========================*/

links.forEach(link=>{

link.addEventListener("click",()=>{

menu.classList.remove("show");
menuButton.classList.remove("active");

});

});

});