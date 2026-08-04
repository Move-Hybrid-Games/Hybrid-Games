/*==================================================
MOVE HYBRID GAMES
Author: WareIQ Consulting
Version: 1.0
==================================================*/

/*==============================
NAVBAR SCROLL
==============================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("active");

    }else{

        header.classList.remove("active");

    }

});


/*==============================
COUNTDOWN
==============================*/

// Cambia esta fecha por la de tu evento

const eventDate = new Date("October 24, 2026 08:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function countdown(){

    const now = new Date().getTime();

    const distance = eventDate - now;

    if(distance < 0){

        days.innerHTML = "00";
        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";

        return;

    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));

    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const s = Math.floor((distance % (1000 * 60)) / 1000);

    days.innerHTML = d.toString().padStart(2,"0");
    hours.innerHTML = h.toString().padStart(2,"0");
    minutes.innerHTML = m.toString().padStart(2,"0");
    seconds.innerHTML = s.toString().padStart(2,"0");

}

setInterval(countdown,1000);

countdown();


/*==============================
SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*==============================
MOBILE MENU
==============================*/

const menu = document.querySelector(".navbar");

const menuBtn = document.querySelector(".menu-toggle");

menuBtn.addEventListener("click",()=>{

    menu.classList.toggle("show");

});


/*==============================
CLOSE MENU AFTER CLICK
==============================*/

document.querySelectorAll(".navbar a").forEach(item=>{

    item.addEventListener("click",()=>{

        menu.classList.remove("show");

    });

});


/*==============================
SCROLL ANIMATION
==============================*/

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{
    threshold:.2
});

document.querySelectorAll("section").forEach(section=>{

    observer.observe(section);

});


/*==============================
PARALLAX HERO
==============================*/

window.addEventListener("mousemove",(e)=>{

    const hero=document.querySelector(".hero");

    const x=(window.innerWidth/2-e.pageX)/60;

    const y=(window.innerHeight/2-e.pageY)/60;

    hero.style.backgroundPosition=`${x}px ${y}px`;

});


/*==============================
BUTTON HOVER EFFECT
==============================*/

const buttons=document.querySelectorAll(".primary-btn,.secondary-btn,.btn-register");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-5px) scale(1.03)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0) scale(1)";

    });

});


/*==============================
PRELOADER
==============================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});


/*==============================
BACK TO TOP BUTTON
==============================*/

const topButton=document.createElement("button");

topButton.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topButton.className="top-btn";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY>600){

        topButton.classList.add("show");

    }else{

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*==============================
CONSOLE MESSAGE
==============================*/

console.log("%cMove Hybrid Games","font-size:28px;color:#67b5ff;font-weight:bold;");
console.log("%cDeveloped by WareIQ Consulting","font-size:15px;color:white;");