// Manejador de eventos cuando se envía el formulario de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener los valores ingresados por el usuario
    const usuario = document.getElementById('loginUsuario').value;
    const contrasena = document.getElementById('loginContrasena').value;

    // Obtener usuarios registrados del almacenamiento local
    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Buscar el usuario con las credenciales ingresadas
    const usuarioEncontrado = usuariosRegistrados.find(u => u.correo === usuario && u.contrasena === contrasena);

    if (usuarioEncontrado) {
        // Inicio de sesión exitoso, redirigir a la página deseada (por ejemplo, 'pagina_de_inicio.html')
        window.location.href = 'pagina_de_inicio.html';
    } else {
        // Credenciales incorrectas, mostrar un mensaje de error
        document.getElementById('loginMessage').textContent = 'Credenciales incorrectas. Inténtelo nuevamente.';
    }
});

// Obtener referencias a los elementos HTML
const loginContrasenaInput = document.getElementById('loginContrasena');
const verContrasenaBtn = document.getElementById('verContrasena');

// Variable para rastrear si la contraseña se muestra o no
let mostrarContrasena = false;

// Agregar manejador de eventos para mostrar y ocultar la contraseña
verContrasenaBtn.addEventListener('click', function () {
    mostrarContrasena = !mostrarContrasena; // Cambiar el estado de mostrar/ocultar
    
    if (mostrarContrasena) {
        loginContrasenaInput.type = 'text'; // Cambiar a tipo "text" para mostrar la contraseña
        verContrasenaBtn.querySelector('i').classList.remove('fa-eye');
        verContrasenaBtn.querySelector('i').classList.add('fa-eye-slash'); // Cambiar el ícono a "ojo tachado"
    } else {
        loginContrasenaInput.type = 'password'; // Cambiar a tipo "password" para ocultar la contraseña
        verContrasenaBtn.querySelector('i').classList.remove('fa-eye-slash');
        verContrasenaBtn.querySelector('i').classList.add('fa-eye'); // Cambiar el ícono a "ojo"
    }
});
