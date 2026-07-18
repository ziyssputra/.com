/*
====================================
GEN DESIGN
Main App
====================================
*/

document.addEventListener("DOMContentLoaded", () => {

    initSmoothScroll();
    initActiveNavbar();
    initBackToTop();
    initProgressBar();

});


/*==============================
SMOOTH SCROLL
==============================*/

function initSmoothScroll(){

    document.querySelectorAll('a[href^="#"]').forEach(link=>{

        link.addEventListener("click",function(e){

            const target=document.querySelector(this.getAttribute("href"));

            if(!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth",
                block:"start"

            });

        });

    });

}


/*==============================
ACTIVE NAVBAR
==============================*/

function initActiveNavbar(){

    const sections=document.querySelectorAll("section");
    const navLinks=document.querySelectorAll(".nav-menu a");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-150;
            const height=section.offsetHeight;

            if(scrollY>=top){

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

}


/*==============================
BACK TO TOP
==============================*/

function initBackToTop(){

    const btn=document.getElementById("topBtn");

    if(!btn) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            btn.style.display="flex";

        }else{

            btn.style.display="none";

        }

    });

    btn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    });

}


/*==============================
PROGRESS BAR
==============================*/

function initProgressBar(){

    const progress=document.getElementById("progress");

    if(!progress) return;

    window.addEventListener("scroll",()=>{

        const total=document.documentElement.scrollHeight-window.innerHeight;

        const percent=(window.scrollY/total)*100;

        progress.style.width=percent+"%";

    });

}