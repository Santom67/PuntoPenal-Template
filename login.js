let ingresarBtn = document.getElementById("ingresarBtn");
let registrarBtn = document.getElementById("registrarBtn");
let emailField = document.getElementById("emailField");
let telField = document.getElementById("telField")
let title = document.getElementById("title");
let pass = document.getElementById("pass");

ingresarBtn.onclick = function() {
    emailField.style.maxHeight = "0";
    telField.style.maxHeight = "0";
    title.innerHTML = "Ingresar";
    registrarBtn.classList.add("disable");
    ingresarBtn.classList.remove("disable");
    pass.classList.remove("dn");
}
registrarBtn.onclick = function() {
    emailField.style.maxHeight = "6rem";
    telField.style.maxHeight = "6rem";
    title.innerHTML = "Registrarse";
    ingresarBtn.classList.add("disable");
    registrarBtn.classList.remove("disable");
    pass.classList.add("dn");
}
