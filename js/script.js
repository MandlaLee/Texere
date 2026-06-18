/* =========================================
   NTIYISO WEBSITE SCRIPT (CLEAN VERSION)
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
}


/* =========================================
   STICKY HEADER EFFECT
========================================= */

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (!header) return;

    if (window.scrollY > 80) {
        header.style.background = "rgba(255,253,251,.98)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.06)";
        header.style.padding = "0";
    } else {
        header.style.background = "rgba(255,253,251,.92)";
        header.style.boxShadow = "none";
    }

});


/* =========================================
   PHOTO SLIDESHOW
========================================= */

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index) {

    if (slides.length === 0) return;

    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");

}

function nextSlide() {

    if (slides.length === 0) return;

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}

if (slides.length > 0) {
    setInterval(nextSlide, 4000);
}


/* =========================================
   SCROLL REVEAL ANIMATION (SAFE FIXED)
========================================= */

const revealElements = document.querySelectorAll(
    ".section, .card, .moment, .featured-book-container, .facts-list li"
);

function revealOnScroll() {

    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            element.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


/* =========================================
   ACTIVE NAVIGATION LINKS
========================================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active-link");
        }

    });

});


/* =========================================
   FLOATING FLOWERS (SAFE)
========================================= */

function createFlower() {

    const flower = document.createElement("span");
    flower.classList.add("flower");
    flower.innerHTML = "✿";

    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.animationDuration = (Math.random() * 8 + 6) + "s";
    flower.style.fontSize = (Math.random() * 20 + 20) + "px";

    document.body.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 14000);

}

setInterval(createFlower, 3500);


/* =========================================
   PARALLAX HERO
========================================= */

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    if (!hero) return;

    let offset = window.pageYOffset;
    hero.style.backgroundPositionY = offset * 0.4 + "px";

});


/* =========================================
   BUTTON HOVER GLOW (SAFE)
========================================= */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.boxShadow = "0 10px 30px rgba(219,168,168,.45)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.boxShadow = "none";
    });

});


/* =========================================
   CARD TILT EFFECT (FIXED: NO CONFLICT WITH REVEAL)
========================================= */

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 25;
        const rotateY = (centerX - x) / 25;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";

    });

});


/* =========================================
   MOMENTS HOVER EFFECT
========================================= */

const moments = document.querySelectorAll(".moment");

moments.forEach(moment => {

    moment.addEventListener("mouseenter", () => {
        moment.style.transform = "translateY(-10px) scale(1.03)";
        moment.style.transition = ".4s";
    });

    moment.addEventListener("mouseleave", () => {
        moment.style.transform = "translateY(0) scale(1)";
    });

});


/* =========================================
   PAGE LOAD FADE IN
========================================= */

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});
