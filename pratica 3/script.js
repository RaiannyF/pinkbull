// Mensagem na compra de produtos
const buyButtons = document.querySelectorAll(".shop-btn");
const message = document.querySelector(".message");
const closeButton = document.querySelector(".close");

buyButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        message.classList.remove("hidden");
    });
});

closeButton.addEventListener("click", function() {
    message.classList.add("hidden");
});

// Busca de produtos
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-btn");
const products = document.querySelectorAll(".product-card");

searchButton.addEventListener("click", function() {
    const search = searchInput.value.toLowerCase();

    products.forEach(function(product) {
        const productName =
            product.querySelector("h3").textContent.toLowerCase();

        if (productName.includes(search)) {
            product.classList.remove("hidden");
        } else {
            product.classList.add("hidden");
        }
    });
});

// Validação dos campos do formulário
const form = document.querySelector("#contact-form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let valid = true;

    // Nome
    if (nameInput.value.trim() === "") {
        nameInput.classList.add("input-error");
        nameError.textContent = "O campo Nome é obrigatório.";
        valid = false;
    } else {
        nameInput.classList.remove("input-error");
        nameError.textContent = "";
    }

    // E-mail
    if (emailInput.value.trim() === "") {
        emailInput.classList.add("input-error");
        emailError.textContent = "O campo E-mail é obrigatório.";
        valid = false;
    } else {
        emailInput.classList.remove("input-error");
        emailError.textContent = "";
    }

    // Mensagem
    if (messageInput.value.trim() === "") {
        messageInput.classList.add("input-error");
        messageError.textContent = "O campo Mensagem é obrigatório.";
        valid = false;
    } else {
        messageInput.classList.remove("input-error");
        messageError.textContent = "";
    }

    if (valid) {
        alert("Mensagem enviada com sucesso!");
    }
});