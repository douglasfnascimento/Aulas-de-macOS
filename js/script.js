// O codigo abaixo serve para ativar e desativar o menu mobile

const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");
const menuItems = document.querySelectorAll(".nav-list a");

hamburguer.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// O codigo abaixo serve para que o menu desapareça no mobile quando tocado em um item

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});



document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.scroll-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});