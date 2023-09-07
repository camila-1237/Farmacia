document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const usuario = document.getElementById('loginUsuario').value;
    const contrasena = document.getElementById('loginContrasena').value;

    if (usuario === 'usuario' && contrasena === 'contrasena') {
        document.getElementById('loginMessage').textContent = 'Inicio de sesión exitoso. Redirigiendo a la página de inicio...';
        
        setTimeout(function () {
            window.location.href = 'login.html';
        }, 2000);
    } else {
        document.getElementById('loginMessage').textContent = 'Credenciales incorrectas. Inténtelo nuevamente.';
    }
});

