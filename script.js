// Typing Effect
const textArray = ["Frontend Developer", "UI/UX Designer", "JavaScript Expert"];
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