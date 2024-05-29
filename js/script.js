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


//código para rolagem ao selecionar as seções no menu

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

//código do formulário

function submitForm() {
    // Enviar os dados do formulário para o Formspree usando AJAX
    var formData = new FormData(document.getElementById("contact-form"));
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://formspree.io/f/xayrzgdv");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Exibir mensagem de sucesso
                document.getElementById("success-message").classList.remove("hidden");
                // Limpar os campos do formulário
                document.getElementById("contact-form").reset();
            } else {
                // Em caso de erro, você pode exibir uma mensagem de erro ou lidar com isso de outra forma
                console.error("Erro ao enviar formulário:", xhr.status);
            }
        }
    };
    xhr.send(formData);
}
