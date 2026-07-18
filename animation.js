/*
====================================
GEN DESIGN
Animation
====================================
*/

document.addEventListener("DOMContentLoaded",()=>{

/*==============================
SCROLL REVEAL
==============================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

observer.unobserve(entry.target);

}

});

},{
threshold:.15
});

document.querySelectorAll(

".section-title,\
.hero-left,\
.hero-right,\
.profile-card,\
.about-image,\
.about-content,\
.portfolio-card,\
.service-card,\
.price-card,\
.testimonial-card,\
.contact-card,\
.faq-item,\
.cta-box,\
.footer-top"

).forEach(el=>{

observer.observe(el);

});


/*==============================
COUNTER
==============================*/

const counters=document.querySelectorAll(".stat-box h2");

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const element=entry.target;

const value=parseInt(element.textContent);

let number=0;

const speed=Math.max(10,Math.floor(1500/value));

const timer=setInterval(()=>{

number++;

element.textContent=number+"+";

if(number>=value){

clearInterval(timer);

element.textContent=value+"+";

}

},speed);

counterObserver.unobserve(element);

});

},{
threshold:.6
});

counters.forEach(counter=>counterObserver.observe(counter));


/*==============================
FLOATING CARD
==============================*/

document.querySelectorAll(

".profile-card,.service-card,.price-card"

).forEach(card=>{

card.animate([

{

transform:"translateY(0px)"

},

{

transform:"translateY(-8px)"

},

{

transform:"translateY(0px)"

}

],{

duration:3500+Math.random()*1200,

iterations:Infinity,

easing:"ease-in-out"

});

});


/*==============================
TILT EFFECT
==============================*/

document.querySelectorAll(

".portfolio-card,.service-card,.price-card"

).forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=((y/rect.height)-0.5)*10;

const rotateY=((x/rect.width)-0.5)*-10;

card.style.transform=

`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});


/*==============================
PARALLAX HERO
==============================*/

const hero=document.querySelector(".hero");

if(hero){

window.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-.5)*15;

const y=(e.clientY/window.innerHeight-.5)*15;

hero.style.transform=

`translate(${x}px,${y}px)`;

});

}

});