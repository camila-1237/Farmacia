document.addEventListener('DOMContentLoaded', function () {
    const userProfile = document.getElementById('userProfile');
    const logoutButton = document.getElementById('logoutButton');

    function mostrarInformacionUsuario(usuario) {
        userProfile.innerHTML = `
        `;
    }

    function cerrarSesion() {
        window.location.href = 'login.html';
    }

    const usuarioActual = {
        nombre: 'Nombre del Usuario',
        correo: 'usuario@gmail.com',
        tipo: 'Cliente'
    };
    mostrarInformacionUsuario(usuarioActual);

    logoutButton.addEventListener('click', cerrarSesion);
});

