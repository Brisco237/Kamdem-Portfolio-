// TypeIt js
document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#element", {
        speed:90,
        loop:true
    })
    .type("  Python(Django).")
    .pause(2000)
    .delete(null)
    .type("  React Native.")
    .pause(2000)
    .delete(null)
    .type("  Css(Bootstrap).")
    .pause(2000)
    .delete(null)
    .type("  Js(React, AlpineJs).")
    .pause(2000)
    .delete(null)
    .type("site web & app mobile.")
    .pause(2000)
    .delete(null)
    .go();
});



// Bouton retour en haut
let btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        btnTop.style.display = 'block';
    } else {
        btnTop.style.display = "none";
    }
});
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// Initialise EmailJS
emailjs.init("Z-sibBF1XPC8DQpY-");
const form = document.getElementById("contact-form");
const spinner = document.getElementById("loading-spinner");

// Gestion du formulaire
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    spinner.style.display = "block";
    const submitBtn = form.querySelector("button[type='submit']");
    submitBtn.disabled = true;
    submitBtn.textContent = "Envoi...";

    emailjs.sendForm("service_8yvk9cb", "template_a3m5izb", this)
        .then(() => {
            spinner.style.display = "none";
            submitBtn.disabled = false;
            submitBtn.textContent = "Envoyer";
            const successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();
            this.reset();
        })
        .catch((error) => {
            console.error("Erreur :", error);
            spinner.style.display = "none";
            submitBtn.disabled = false;
            submitBtn.textContent = "Envoyer";
            alert("Une erreur est survenue, veuillez réessayer.");
        });
});

