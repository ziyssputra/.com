/*
====================================
GEN DESIGN
Loading Screen
====================================
*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    document.body.style.overflow = "hidden";

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        loader.style.pointerEvents = "none";
        loader.style.transition = "0.7s ease";

        document.body.style.overflowY = "auto";

        revealElements();

    }, 1800);

});


/*====================================
Reveal Animation
====================================*/

function revealElements(){

    const elements = document.querySelectorAll(

        ".hero-left," +
        ".hero-right," +
        ".section-title," +
        ".portfolio-card," +
        ".service-card," +
        ".price-card," +
        ".testimonial-card," +
        ".contact-card," +
        ".faq-item"

    );

    elements.forEach((el,index)=>{

        el.style.opacity="0";
        el.style.transform="translateY(40px)";

        setTimeout(()=>{

            el.style.transition=".7s ease";

            el.style.opacity="1";
            el.style.transform="translateY(0)";

        },100*index);

    });

}