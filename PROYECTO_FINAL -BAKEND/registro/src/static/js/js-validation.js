//REGISTRO
function validacion() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var fechaNacimiento = document.getElementById("fecha_de_nacimiento").value;
    var email = document.getElementById("email").value;
    var ciudad = document.getElementById("ciudad").value;

    if (nombre === "") {
        alert("Por favor ingresa tu nombre.");
        return false;
    }
    if (apellido === "") {
        alert("Por favor ingresa tu apellido.");
        return false;
    }
    if (fechaNacimiento === "") {
        alert("Por favor ingresa tu fecha de nacimiento.");
        return false;
    }
    if (email === "") {
        alert("Por favor ingresa tu email.");
        return false;
    }
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Por favor ingresa un email válido.");
        return false;
    }
    if (ciudad === "") {
        alert("Por favor ingresa tu ciudad.");
        return false;
    }
    return true;
}

//LOGIN
function validacionLogin() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;

    if (fname === "") {
        alert("Por favor ingresa tu nombre.");
        return false;
    }
    if (lname === "") {
        alert("Por favor ingresa tu contraseña.");
        return false;
    }
    return true;
}

document.getElementById("loginForm").onsubmit = function() {
    return validacionLogin();
};


