// Typing Effect
const textArray = [
    "DevOps Engineer",
    "Cloud Infrastructure Specialist",
    "CI/CD Automation Expert",
    "Kubernetes & Docker Enthusiast"
];

let typingElement = document.querySelector(".typing");
let index = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[index].length) {
        typingElement.textContent += textArray[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = textArray[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        index = (index + 1) % textArray.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});

// Mobile Menu
const toggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

toggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Scroll Reveal
function reveal() {
    document.querySelectorAll(".reveal").forEach(el => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", reveal);

// Animate Skill Bars
window.addEventListener("scroll", () => {
    document.querySelectorAll(".progress span").forEach(span => {
        let position = span.getBoundingClientRect().top;
        if (position < window.innerHeight - 50) {
            span.style.width = span.getAttribute("data-width");
        }
    });
});