const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));


window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if(window.scrollY > 50){
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if(window.scrollY >= sectionTop - 200){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }
    });
});




const glow = document.querySelector(".cursor-glow");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateGlow() {
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;

    glow.style.left = currentX + "px";
    glow.style.top = currentY + "px";

    requestAnimationFrame(animateGlow);
}

animateGlow();





const heroName = document.getElementById("hero-name");
const heroSurname = document.getElementById("hero-surname");

window.addEventListener("scroll", () => {
    const scroll = window.scrollY;

    heroName.style.transform =
        `translateY(${scroll * -0.15}px)`;

    heroSurname.style.transform =
        `translateY(${scroll * 0.12}px)`;
});


window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("loader-hidden");

    }, 1800);

});