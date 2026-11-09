"use strict";

const passwordInput = document.getElementById("password");
const passwordToggle = document.querySelector(".login-password__toggle");

if (passwordInput && passwordToggle) {
    passwordToggle.hidden = false;

    passwordToggle.addEventListener("click", () => {
        const showPassword = passwordInput.type === "password";
        const label = showPassword ? "Ocultar contraseña" : "Mostrar contraseña";

        passwordInput.type = showPassword ? "text" : "password";
        passwordToggle.setAttribute("aria-pressed", String(showPassword));
        passwordToggle.setAttribute("aria-label", label);
        passwordToggle.title = label;
    });
}
