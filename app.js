/* ===================================== */
/* CONFIGURACIÓN GSAP */
/* ===================================== */

gsap.registerPlugin(ScrollTrigger);

/* ===================================== */
/* APERTURA DEL LIBRO */
/* ===================================== */

window.addEventListener("load", () => {

    const cover = document.querySelector(".bookCover");
    const intro = document.getElementById("introBook");

    gsap.to(cover, {
        rotateY: -180,
        duration: 2.5,
        ease: "power3.inOut",
        delay: 0.8
    });

    gsap.to(intro, {
        opacity: 0,
        duration: 1.5,
        delay: 3,
        onComplete: () => {
            intro.style.display = "none";
        }
    });

});

/* ===================================== */
/* PARALLAX DEL BOSQUE */
/* ===================================== */

const forestBack = document.getElementById("forestBack");
const forestMiddle = document.getElementById("forestMiddle");
const forestFront = document.getElementById("forestFront");

window.addEventListener("scroll", () => {

    const y = window.scrollY;

    forestBack.style.transform =
        `translateY(${y * 0.08}px)`;

    forestMiddle.style.transform =
        `translateY(${y * 0.18}px)`;

    forestFront.style.transform =
        `translateY(${y * 0.35}px)`;

});

/* ===================================== */
/* REVELAR ESCENAS */
/* ===================================== */

gsap.utils.toArray(".scene").forEach(scene => {

    gsap.from(scene, {

        opacity: 0,
        y: 120,

        duration: 1.5,

        scrollTrigger: {

            trigger: scene,
            start: "top 80%"

        }

    });

});

/* ===================================== */
/* CUENTA REGRESIVA */
/* ===================================== */

const countdown =
document.getElementById("countdown");

const targetDate =
new Date("2026-06-28T15:30:00");

function updateCountdown() {

    const now = new Date();

    const distance =
        targetDate - now;

    if(distance <= 0){

        countdown.innerHTML =
        "🎉 ¡Hoy es el gran día! 🎉";

        return;
    }

    const days =
    Math.floor(distance / 86400000);

    const hours =
    Math.floor(
        (distance % 86400000)
        / 3600000
    );

    const minutes =
    Math.floor(
        (distance % 3600000)
        / 60000
    );

    const seconds =
    Math.floor(
        (distance % 60000)
        / 1000
    );

    countdown.innerHTML =

    `
    ${days}d
    ${hours}h
    ${minutes}m
    ${seconds}s
    `;

}

setInterval(updateCountdown,1000);

updateCountdown();

/* ===================================== */
/* LUCIÉRNAGAS */
/* ===================================== */

const fireflies =
document.getElementById("fireflies");

for(let i=0;i<80;i++){

    const f =
    document.createElement("div");

    f.classList.add("firefly");

    Object.assign(
        f.style,
        {
            position:"absolute",
            width:"4px",
            height:"4px",
            borderRadius:"50%",
            background:"#fff9b5",
            boxShadow:"0 0 15px #fff9b5",
            left:Math.random()*100+"vw",
            top:Math.random()*100+"vh"
        }
    );

    fireflies.appendChild(f);

    gsap.to(f,{

        x:
        "random(-250,250)",

        y:
        "random(-180,180)",

        repeat:-1,

        yoyo:true,

        duration:
        6+Math.random()*10,

        ease:"sine.inOut"

    });

}

/* ===================================== */
/* PÉTALOS */
/* ===================================== */

const petals =
document.getElementById("petals");

function createPetal(){

    const p =
    document.createElement("div");

    p.innerHTML = "🌸";

    p.style.position =
    "absolute";

    p.style.left =
    Math.random()*100+"vw";

    p.style.top =
    "-50px";

    p.style.fontSize =
    (15+Math.random()*20)+"px";

    petals.appendChild(p);

    gsap.to(p,{

        y:
        window.innerHeight+300,

        x:
        "random(-150,150)",

        rotation:
        360,

        duration:
        8+Math.random()*8,

        ease:
        "none",

        onComplete:()=>{

            p.remove();

        }

    });

}

setInterval(
createPetal,
450
);

/* ===================================== */
/* MARIPOSAS */
/* ===================================== */

const butterflies =
document.getElementById("butterflies");

function createButterfly(){

    const b =
    document.createElement("div");

    b.innerHTML = "🦋";

    b.style.position =
    "absolute";

    b.style.left =
    "-50px";

    b.style.top =
    Math.random()*80+"vh";

    b.style.fontSize =
    "28px";

    butterflies.appendChild(b);

    gsap.to(b,{

        x:
        window.innerWidth+300,

        y:
        "random(-100,100)",

        duration:
        15+Math.random()*10,

        ease:
        "none",

        onComplete:()=>{

            b.remove();

        }

    });

}

setInterval(
createButterfly,
3000
);

/* ===================================== */
/* POLVO MÁGICO */
/* ===================================== */

const dust =
document.getElementById("magicDust");

function createDust(){

    const d =
    document.createElement("div");

    d.style.position =
    "absolute";

    d.style.width =
    "3px";

    d.style.height =
    "3px";

    d.style.borderRadius =
    "50%";

    d.style.background =
    "white";

    d.style.left =
    Math.random()*100+"vw";

    d.style.top =
    Math.random()*100+"vh";

    d.style.opacity =
    Math.random();

    dust.appendChild(d);

    gsap.to(d,{

        y:
        -200,

        opacity:0,

        duration:
        4+Math.random()*4,

        onComplete:()=>{

            d.remove();

        }

    });

}

setInterval(
createDust,
120
);

/* ===================================== */
/* REVELACIÓN MÁGICA */
/* ===================================== */

const revealBox =
document.getElementById("revealBox");

gsap.from(revealBox,{

    scale:0.3,

    opacity:0,

    duration:2,

    ease:"elastic.out(1,0.4)",

    scrollTrigger:{

        trigger:".revealScene",

        start:"top 70%"

    }

});

/* ===================================== */
/* ÁRBOL MÁGICO */
/* ===================================== */

const tree =
document.getElementById("magicTree");

gsap.from(tree,{

    scaleY:0,

    transformOrigin:"bottom center",

    duration:2,

    ease:"back.out(1.8)",

    scrollTrigger:{

        trigger:".revealScene",

        start:"top 75%"

    }

});

/* ===================================== */
/* EFECTO CÁMARA */
/* ===================================== */

gsap.to("body",{

    scrollTrigger:{

        scrub:true

    }

});

/* ===================================== */
/* BRILLO CONTINUO */
/* ===================================== */

gsap.to("#revealBox",{

    boxShadow:
    "0 0 50px rgba(255,183,232,.9)",

    repeat:-1,

    yoyo:true,

    duration:2

});

/* ===================================== */
/* MENSAJE CONSOLA */
/* ===================================== */

console.log(
"🌳 Bosque Encantado de Sofía Adilene cargado correctamente."
);