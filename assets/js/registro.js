document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('registroForm').addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Recuperar los valores del formulario
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const correo = document.getElementById('correo').value;
        const tipo = document.getElementById('tipo').value;
        const contrasena = document.getElementById('contrasena').value;
        const confirmarContrasena = document.getElementById('confirmarContrasena').value;

        // Validación de contraseña y otros campos (puedes agregar más validaciones)
        let mensajeError = '';

        // Validación de correo electrónico (dominio "gmail.com")
        const correoRegExp = /^[a-zA-Z0-9._-]+@gmail\.com$/;
        if (!correoRegExp.test(correo)) {
            mensajeError += 'El correo electrónico debe ser de dominio "gmail.com". ';
        }

        if (contrasena !== confirmarContrasena) {
            mensajeError += 'Las contraseñas no coinciden. ';
        }

        if (mensajeError) {
            document.getElementById('errorMensaje').textContent = mensajeError;
            document.getElementById('registroMessage').textContent = ''; // Limpiar el mensaje de éxito
        } else {
            // Simular almacenamiento de información de usuario (esto debe ser reemplazado por una base de datos en un entorno real)
            const usuarioRegistrado = {
                nombre,
                apellido,
                correo,
                tipo,
                contrasena
            };

            // Simular guardar el usuario en una lista (esto debe ser reemplazado por un proceso de registro real)
            const listaUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
            listaUsuarios.push(usuarioRegistrado);
            localStorage.setItem('usuarios', JSON.stringify(listaUsuarios));

            // Mostrar un mensaje de éxito
            document.getElementById('errorMensaje').textContent = '';
            document.getElementById('registroMessage').textContent = 'Registro exitoso. Redirigiendo a la página de inicio de sesión...';

            // Redirigir a la página de inicio de sesión después de un breve retraso (por ejemplo, 2 segundos)
            setTimeout(function () {
                window.location.href = 'login.html';
            }, 2000);
        }
    });
});

