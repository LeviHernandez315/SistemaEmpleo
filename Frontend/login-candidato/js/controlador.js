
    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('ingresarBtn').addEventListener('click', async function () {
            // Evita que el formulario se envíe de la manera tradicional
            event.preventDefault();

            // Captura los datos del formulario
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            try {
                // Realiza la solicitud fetch al backend
                const response = await fetch('http//:0.0.0.0:3100', { // Cambia esta URL a la de tu backend
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                });

                // Verifica si la respuesta es correcta
                if (response.ok) {
                    const data = await response.json();
                    console.log('Login exitoso:', data);
                    // Redirige al usuario a la página de "Puesto de trabajo"
                    window.location.href = '../Puesto-trabajo/oferta_trabajo.html';
                } else {
                    // Maneja el error si el login falla
                    console.error('Error en el login');
                    alert('Login fallido, por favor verifica tus credenciales');
                }
            } catch (error) {
                console.error('Error al conectarse al backend:', error);
                alert('Hubo un problema al intentar iniciar sesión, por favor intenta de nuevo más tarde.');
            }
        });
    });

    function goBack() {
        window.location.href = "/";
    }

