window.addEventListener("scroll", function(){
    const navbar = document.querySelector(".navbar");
    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }
});

function reveal(){
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(function(el){
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const visible = 120;

        if(elementTop < windowHeight - visible){
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", reveal);
reveal();

document.addEventListener("DOMContentLoaded", function(){

    const text = "Fabio Al Iqbal";
    let index = 0;
    const typingEl = document.getElementById("typing");

    function typeEffect(){
        if(index < text.length){
            typingEl.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 80);
        }
    }

    if(typingEl){
        typeEffect();
    }

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

const themeToggle = document.getElementById("theme-toggle");

if(themeToggle){
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){
            themeToggle.textContent = "☀️";
            localStorage.setItem("theme","dark");
        }else{
            themeToggle.textContent = "🌙";
            localStorage.setItem("theme","light");
        }
    });

    if(localStorage.getItem("theme") === "dark"){
        document.body.classList.add("dark");
        themeToggle.textContent = "☀️";
    }
}

window.addEventListener("scroll", () => {
    const progressBar = document.getElementById("progress-bar");
    if(progressBar){
        let scrollTop = document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let progress = (scrollTop / height) * 100;
        progressBar.style.width = progress + "%";
    }
});

const copyBtn = document.getElementById("copyEmailBtn");
const copyMsg = document.getElementById("copyMsg");
const email = "aliqbalfabios@gmail.com";

if(copyBtn && copyMsg){
    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(email);

        copyMsg.innerText = "Email disalin!";
        copyMsg.classList.add("show");

        setTimeout(() => {
            copyMsg.classList.remove("show");
        }, 2000);
    });
}

document.querySelectorAll('.gallery-item img').forEach(image =>{
    image.onclick = () =>{
        const popup = document.getElementById('popup-image');
        if(popup){
            popup.style.display = 'flex';
            popup.querySelector("img").src = image.getAttribute('src');
        }
    }
});

const popupClose = document.querySelector('#popup-image span');
if(popupClose){
    popupClose.onclick = () =>{
        document.getElementById('popup-image').style.display = 'none';
    };
}

const backToTop = document.getElementById("backToTop");

if(backToTop){
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");

    if(loader){
        setTimeout(function () {
            loader.classList.add("hide");
        }, 3500);
    }
});