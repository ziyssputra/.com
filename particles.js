/*
====================================
GEN DESIGN
Particles Background
====================================
*/

document.addEventListener("DOMContentLoaded",()=>{

const container=document.querySelector(".particles");

if(!container) return;

/*==============================
CREATE PARTICLES
==============================*/

container.innerHTML="";

const TOTAL=40;

for(let i=0;i<TOTAL;i++){

const particle=document.createElement("span");

const size=Math.random()*5+2;

particle.style.width=size+"px";
particle.style.height=size+"px";

particle.style.left=Math.random()*100+"%";

particle.style.animationDuration=
(Math.random()*15+12)+"s";

particle.style.animationDelay=
(Math.random()*12)+"s";

particle.style.opacity=
(Math.random()*0.5)+0.15;

container.appendChild(particle);

}


/*==============================
PARALLAX
==============================*/

window.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-0.5)*10;
const y=(e.clientY/window.innerHeight-0.5)*10;

container.style.transform=
`translate(${x}px,${y}px)`;

});

});