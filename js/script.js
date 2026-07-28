
/* ==========================================
   HAPPY BIRTHDAY V2
   PART 3A
========================================== */

const loader = document.getElementById("loader");

const pages = document.querySelectorAll(".page");

const intro = document.getElementById("intro");
const hero = document.getElementById("hero");
const videoSection = document.getElementById("videoSection");
const letterSection = document.getElementById("letterSection");
const ending = document.getElementById("ending");

const beginBtn = document.getElementById("beginBtn");
const journeyBtn = document.getElementById("journeyBtn");
const continueBtn = document.getElementById("continueBtn");

const music = document.getElementById("bgMusic");

const video = document.getElementById("birthdayVideo");

const chapterCount = document.getElementById("chapterCount");
const chapterTitle = document.getElementById("chapterTitle");

const progressFill = document.getElementById("progressFill");

/* ========================= */

const videos = [

    "videos/video1.mp4",
    "videos/video2.mp4",
    "videos/video3.mp4",
    "videos/video4.mp4",
    "videos/video5.mp4",
    "videos/video6.mp4",
    "videos/video7.mp4",
    "videos/video8.mp4",
    "videos/video9.mp4",
    "videos/video10.mp4",
    "videos/video11.mp4",
    "videos/video12.mp4",
    "videos/video14.mp4",
    "videos/video15.mp4",
    "videos/video16.mp4"

];

/* ========================= */

const chapters = [

    "The Beginning",

    "The Smile",

    "Our Chaos",

    "The Adventures",

    "You",

    "Us",

    "The Laughs",

    "The Memories",

    "Forever"

];

let currentVideo = 0;

/* ========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

            intro.classList.add("active");

        }, 800);

    }, 1500);

});

/* ========================= */

function changePage(next) {

    pages.forEach(page => {

        page.classList.remove("active");

    });

    next.classList.add("active");

}

/* ========================= */

beginBtn.addEventListener("click", () => {

    music.volume = 0;

    music.play();

    fadeMusic();

    preloadVideos();   // 👈 Add this line

    changePage(hero);

});

/* ========================= */

journeyBtn.addEventListener("click", () => {

    changePage(videoSection);

    playVideo();

});

continueBtn.addEventListener("click", () => {

   changePage(letterSection);

});

/* ========================= */

function fadeMusic() {

    let volume = 0;

    const fade = setInterval(() => {

        volume += 0.05;

        music.volume = Math.min(volume, 1);

        if (volume >= 1) {

            clearInterval(fade);

        }

    }, 200);

}

function preloadVideos() {

    const videoFiles = [

        "videos/video1.mp4",
        "videos/video2.mp4",
        "videos/video3.mp4",
        "videos/video4.mp4",
        "videos/video5.mp4",
        "videos/video6.mp4",
        "videos/video7.mp4",
        "videos/video8.mp4",
        "videos/video9.mp4",
        "videos/video10.mp4",
        "videos/video11.mp4",
        "videos/video12.mp4",
        "videos/video13.mp4",
        "videos/video14.mp4",
        "videos/video15.mp4"

    ];

    videoFiles.forEach(src => {

        const video = document.createElement("video");

        video.preload = "auto";

        video.src = src;

    });

}
å
/* ==========================================
   VIDEO PLAYER
========================================== */

const chapterNames = [

    "You, Always",

    "Forever Us",

    "Endless Love",

    "Soft & Romantic",

    "Forever Mine",

    "Just Us",

    "Love Lives Here",

    "You're My Home",

    "Every Smile",

    "My Safe Place",

    "Still You",

    "Better Together",

    "Our Forever",

    "Almost There ❤️",

    "Happy Birthday, Manu ❤️"

];

function playVideo() {

    video.pause();

    video.src = videos[currentVideo];

    chapterCount.innerText =
        `Chapter ${String(currentVideo + 1).padStart(2, "0")}`;

    chapterTitle.innerText =
        chapterNames[currentVideo];

    video.play().catch(error => console.error(error));

}

function startLetter() {

    document.getElementById("typedLetter").innerHTML = `

My Dearest Manuuu ❤️

<br><br>

Your birthday letter will appear here.

`;

}

/* ==========================================
   CHAPTER TRANSITIONS
========================================== */

const chapterDescriptions = [

    "The beginning of everything beautiful.",

    "Every moment, side by side.",

    "A love that keeps growing.",

    "The little moments we never forget.",

    "Always choosing you.",

    "Two hearts, one journey.",

    "Where love feels effortless.",

    "Wherever you are feels like home.",

    "Every smile tells our story.",

    "My favourite place has always been you.",

    "After all this time... still you.",

    "Life is simply better with you.",

    "A day made for the most special person.",

    "Thank you for every memory.",

    "Happy Birthday, Manu ❤️"

];

function showChapter(callback) {

    chapterCount.style.opacity = "0";
    chapterTitle.style.opacity = "0";

    setTimeout(() => {

        chapterCount.innerText =
            `Chapter ${String(currentVideo + 1).padStart(2, "0")}`;

        chapterTitle.innerText =
            chapterDescriptions[currentVideo];

        chapterCount.style.opacity = "1";
        chapterTitle.style.opacity = "1";

        setTimeout(() => {

            callback();

        }, 1200);

    }, 400);

}

/* ==========================================
   PREMIUM VIDEO TRANSITIONS
========================================== */

function transitionToNextVideo() {

    playVideo();

}
video.addEventListener("ended", () => {

    currentVideo++;

    if (currentVideo < videos.length) {

        transitionToNextVideo();


    } else {

       changePage(letterSection);

        playGalaxyIntro();

        music.volume = .4;
    }

});

/* =====================================================
   FIREWORKS
===================================================== */

const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();

class Particle {

    constructor(x, y, color) {

        this.x = x;
        this.y = y;

        this.color = color;

        this.radius = 2 + Math.random() * 3;

        this.speedX = (Math.random() - 0.5) * 8;

        this.speedY = (Math.random() - 0.5) * 8;

        this.life = 100;

    }

    update() {

        this.x += this.speedX;

        this.y += this.speedY;

        this.life--;

        this.radius *= .98;

    }

    draw() {

        ctx.beginPath();

        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        ctx.fillStyle = this.color;

        ctx.fill();

    }

}

function launchFirework() {

    const x = Math.random() * canvas.width;

    const y = Math.random() * canvas.height * .5;

    const colors = [

        "#ff4d9d",
        "#ffd700",
        "#66ccff",
        "#ffffff",
        "#ff884d"

    ];

    for (let i = 0; i < 90; i++) {

        particles.push(

            new Particle(

                x,

                y,

                colors[Math.floor(Math.random() * colors.length)]

            )

        );

    }

}

function animateFireworks() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle, index) => {

        particle.update();

        particle.draw();

        if (particle.life <= 0) {

            particles.splice(index, 1);

        }

    });

    requestAnimationFrame(animateFireworks);

}

animateFireworks();

setInterval(() => {

    if (ending.classList.contains("active")) {

        launchFirework();

    }

}, 700);

document
    .getElementById("restartBtn")
    .addEventListener("click", () => {

        location.reload();

    });

/* ======================================
   FLOATING MEMORIES
======================================*/

const memoryContainer =
    document.getElementById("floatingMemories");

const memoryImages = [
    "images/non-bg/non-bg-1.png",
    "images/non-bg/non-bg-2.png",
    "images/non-bg/non-bg-3.png",
    "images/non-bg/non-bg-4.png",
    "images/non-bg/non-bg-5.png",
    "images/non-bg/non-bg-6.png",
    "images/non-bg/non-bg-7.png",
    "images/non-bg/non-bg-8.png",
    "images/non-bg/non-bg-9.png"
];
function createMemory() {

    const img = document.createElement("img");

    img.src =

        memoryImages[
        Math.floor(
            Math.random() *
            memoryImages.length
        )
        ];

    img.className = "memory";

    img.style.left =
        Math.random() * 85 + "vw";

    img.style.animationDuration =
        12 + Math.random() * 8 + "s";

    img.style.width =
        90 + Math.random() * 70 + "px";

    memoryContainer.appendChild(img);

    img.addEventListener("animationend", () => {

        img.remove();

    });

}

setInterval(() => {

    if (ending.classList.contains("active")) {

        createMemory();

    }

}, 1200);

/* ===========================================
   Developer Panel
=========================================== */

const devPanel =
document.getElementById("devPanel");

document.addEventListener("keydown",(e)=>{

if(e.key==="d" || e.key==="D"){

devPanel.style.display=

devPanel.style.display==="flex"

? "none"

: "flex";

}

});

document.getElementById("goIntro")
.onclick=()=>{

changePage(intro);

};

document.getElementById("goHero")
.onclick=()=>{

changePage(hero);

};

document.getElementById("goVideos")
.onclick=()=>{

changePage(videoSection);

playVideo();

};

document.getElementById("goLetter")
.onclick=()=>{

changePage(letterSection);

};

document.getElementById("goEnding")
.onclick=()=>{

changePage(ending);

};
const projectorLight =
document.getElementById("projectorLight");

const galaxyBackground =
document.getElementById("galaxyBackground");

const starsLayer =
document.getElementById("starsLayer");

/* ==========================================
   CINEMATIC GALAXY INTRO
========================================== */

function playGalaxyIntro() {

    const tl = gsap.timeline();

    tl

    // Wait after fade to black
    .to({}, {
        duration: 2
    })

    // Tiny white light appears
    .to(projectorLight, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
    })

    // Light grows dramatically
    .to(projectorLight, {
        width: 280,
        height: 280,
        duration: 1.8,
        ease: "power3.out"
    }, "<")

    // Galaxy slowly appears
    .to(galaxyBackground, {
        opacity: 1,
        scale: 1,
        duration: 3,
        ease: "power2.out"
    }, "-=1")

    // Light slowly disappears
    .to(projectorLight, {
        opacity: 0,
        duration: 1.5
    }, "-=2");

    // Create stars after galaxy appears
createStars();

}

function createStars() {

    starsLayer.innerHTML = "";

    for (let i = 0; i < 180; i++) {

        const star = document.createElement("div");

        star.className = "star";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        const size = Math.random() * 3 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.animationDelay =
            Math.random() * 5 + "s";

        star.style.animationDuration =
            (4 + Math.random() * 6) + "s";

        starsLayer.appendChild(star);

    }

}