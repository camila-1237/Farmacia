document.getElementById('registroForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
    const confirmarContrasena = document.getElementById('confirmarContrasena').value;

    const errorMensaje = document.getElementById('errorMensaje');
    errorMensaje.innerHTML = ''; // Limpiar mensajes de error anteriores

    const correoRegExp = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    if (!correoRegExp.test(correo)) {
        errorMensaje.innerHTML += 'El correo electrónico debe ser de dominio "gmail.com".<br><br>';
    }

    if (contrasena !== confirmarContrasena) {
        errorMensaje.innerHTML += 'Las contraseñas no coinciden.<br><br>';
    }

    const regexMayuscula = /[A-Z]/;
    const regexAsterisco = /\*/;
    const regexNumero = /[0-9]/;

    if (!(regexMayuscula.test(contrasena) && regexAsterisco.test(contrasena) && regexNumero.test(contrasena))) {
        errorMensaje.innerHTML += 'La contraseña debe contener al menos una letra mayúscula, un asterisco (*) y un número.<br>';
    }

    if (!errorMensaje.innerHTML) {
        // El formulario no tiene errores
        const usuario = {
            nombre,
            apellido,
            correo,
            contrasena
        };

        const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuariosRegistrados.push(usuario);
        localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));

        window.location.href = 'login.html';
    }
});
