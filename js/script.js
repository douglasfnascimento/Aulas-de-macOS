const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");
const menuItems = document.querySelectorAll(".nav-list a");

hamburguer.addEventListener("click", () => {
    nav.classList.toggle("active");
});

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});
