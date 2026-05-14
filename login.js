document.getElementById('formularioLogin').addEventListener('submit', function(event) {
    event.preventDefault(); //Evita que el formulario se envíe automaticamente

    //obtener valores
    const usuario = document.getElementById('usuario').value;
    const contrasena= document.getElementById('contrasena').value;

    // Validación básica
    if (usuario === 'Saul' && contrasena === '12345') {
        alert('Inicio de sesión exitoso. ¡Bienvenido Saul!');
        window.location.href = "www.youtube.com";
    } else {
        alert('Usuario o contraseña incorrectos. Intenta nuevamente.');
    }
    }) ;
