
    function goBack() {
        window.location.href = "/";
    }

    document.getElementById('login').addEventListener('submit', async (e) => {
        e.preventDefault();
    
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        console.log(email);
        console.log(password);
    
        // http://3.229.110.179:3100/usuarios - direccion en la nube
        
        // http://localhost:3100/usuarios - direccion en local
        try {
            const response = await fetch('http://3.229.110.179:3100/usuarios', { // Cambia esto si el backend está en otro puerto o dominio
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ Correo:email, Password: password})
            });
    
            const data = await response.json();
    
            if (response.ok) {
                // document.getElementById('message').textContent = data.message;
                // alert('Login exitoso, URRRAAAAA');
                // console.log(data.id_usuario);
                localStorage.setItem('UsuarioId', data.id_usuario);
                window.location.href="../Puesto-trabajo/oferta_trabajo.html"
            } else {
                // document.getElementById('message').textContent = data.message;
                alert('Login fallido, por favor verifica tus credenciales');
            }
        } catch (err) {
            document.getElementById('message').textContent = 'An error occurred';
        }
    });
    

