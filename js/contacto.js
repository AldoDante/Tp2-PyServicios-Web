$(document).ready(function() {

    // 1. Validación en tiempo real 
    // Usamos .on('input') para escuchar y .val() para leer el contenido
    
    $('#nombre').on('input', function() {
        let valor = $(this).val();
        if (valor.length >= 3) {
            $(this).removeClass('is-invalid').addClass('is-valid');
        } else {
            $(this).removeClass('is-valid').addClass('is-invalid');
        }
    });

    $('#email').on('input', function() {
        let valor = $(this).val();
        
        // Expresión regular básica para validar correos
        
        let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if (regexEmail.test(valor)) {
            $(this).removeClass('is-invalid').addClass('is-valid');
        } else {
            $(this).removeClass('is-valid').addClass('is-invalid');
        }
    });

    $('#mensaje').on('input', function() {
        let valor = $(this).val();
        if (valor.trim().length > 0) {
            $(this).removeClass('is-invalid').addClass('is-valid');
        } else {
            $(this).removeClass('is-valid').addClass('is-invalid');
        }
    });

    // 2. Controlar el envío del formulario
    $('#formularioContacto').on('submit', function(e) {
        e.preventDefault(); // Evita que la página se recargue

        // Forzar la validación para mostrar errores visuales de form vacio

        $('#nombre, #email, #mensaje').trigger('input');

        // Comprobamos si todos los campos tienen la clase is-valid

        let nombreValido = $('#nombre').hasClass('is-valid');
        let emailValido = $('#email').hasClass('is-valid');
        let mensajeValido = $('#mensaje').hasClass('is-valid');

        if (nombreValido && emailValido && mensajeValido) {
            
            // Deshabilitar botón y mostrar spinner en el boton

            $('#btnEnviar').prop('disabled', true);
            $('#textoBoton').text(' Enviando...');
            $('#spinnerCarga').removeClass('d-none'); // Muestra el spinner de Bootstrap

            // Simulamos el tiempo de envío al servidor (2 segundos)
            
            setTimeout(function() {
          
                $('#btnEnviar').prop('disabled', false);
                $('#textoBoton').text('Enviar Mensaje');
                $('#spinnerCarga').addClass('d-none');

                // Reset al formulario
                
                $('#formularioContacto')[0].reset();
                $('.form-control').removeClass('is-valid');

                // Mostramos el Modal
                let modalInstancia = new bootstrap.Modal(document.getElementById('modalConfirmacion'));
                modalInstancia.show();

            }, 2000);
        
        }
    });

});