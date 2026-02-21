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
}window.addEventListener("scroll", reveal);
reveal();

const text = "Fabio Al Iqbal";
let index = 0;

function typeEffect(){
    if(index < text.length){
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}

window.onload = typeEffect;

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
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

const toggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-menu");

toggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

const themeToggle = document.getElementById("theme-toggle");

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

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let progress = (scrollTop / height) * 100;

    document.getElementById("progress-bar").style.width = progress + "%";
});

const email = "aliqbalfabios@gmail.com";

const copyBtn = document.getElementById("copyEmailBtn");
const copyMsg = document.getElementById("copyMsg");

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(email);

    copyMsg.innerText = "Email disalin!";
    copyMsg.classList.add("show");

    setTimeout(() => {
        copyMsg.classList.remove("show");
    }, 2000);
});

document.querySelectorAll('.gallery-item img').forEach(image =>{
    image.onclick = () =>{
        document.getElementById('popup-image').style.display = 'flex';
        document.querySelector('#popup-image img').src = image.getAttribute('src');
    }
});

document.querySelector('#popup-image span').onclick = () =>{
    document.getElementById('popup-image').style.display = 'none';
};

const backToTop = document.getElementById("backToTop");

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

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 3500);
});