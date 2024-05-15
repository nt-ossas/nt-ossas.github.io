//login
function login() {
    const login = document.getElementById("login");
    const register = document.getElementById("register");
    register.classList.toggle("hidden");
    login.classList.toggle("hidden");
}

//type effect ossas
const dynamicText = document.querySelector('p.animation span');
const words = ['WebSite Developer', 'Back-End Developer', 'Front-End Developer', 'Student', 'Cryptozone Developer'];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);
    } else {
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 800);
    }
}
typeEffect();

//torna su
function tornasu() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}