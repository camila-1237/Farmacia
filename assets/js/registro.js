// Manejador de eventos cuando se envía el formulario de registro
document.getElementById('registroForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener los valores ingresados por el usuario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const tipo = document.getElementById('tipo').value;
    const contrasena = document.getElementById('contrasena').value;
    const confirmarContrasena = document.getElementById('confirmarContrasena').value;
    let mensajeError = '';

    const correoRegExp = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    if (!correoRegExp.test(correo)) {
        mensajeError += 'El correo electrónico debe ser de dominio "gmail.com". ';
    }

    if (contrasena !== confirmarContrasena) {
        mensajeError += 'Las contraseñas no coinciden. ';
    }

    // Requerir al menos una letra mayúscula, un asterisco (*) y un número
    const regexMayuscula = /[A-Z]/;
    const regexAsterisco = /\*/;
    const regexNumero = /[0-9]/;

    if (!(regexMayuscula.test(contrasena) && regexAsterisco.test(contrasena) && regexNumero.test(contrasena))) {
        mensajeError += 'La contraseña debe contener al menos una letra mayúscula, un asterisco (*) y un número. ';
    }

    if (mensajeError) {
        document.getElementById('errorMensaje').textContent = mensajeError;
        document.getElementById('registroMessage').textContent = ''; // Limpiar el mensaje de éxito
    } else {
        // Simular almacenamiento de información de usuario (esto debe ser reemplazado por una base de datos en un entorno real)

        // Crear un objeto de usuario
        const usuario = {
            nombre,
            apellido,
            correo,
            tipo,
            contrasena
        };

        // Almacenar el objeto de usuario en el almacenamiento local
        const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuariosRegistrados.push(usuario);
        localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));

        // Redirigir al usuario a la página de inicio de sesión después del registro
        window.location.href = 'login.html';
    }
});
