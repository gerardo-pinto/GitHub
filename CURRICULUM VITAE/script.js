$(document).ready(function() {
    $('#contactForm').submit(function(event) {
        event.preventDefault();
        
        const nombre = $('#nombre').val();
        const email = $('#email').val();
        const telefono = $('#telefono').val();
        const mensaje = $('#mensaje').val();

        if (nombre && email && telefono && mensaje) {
            alert('Formulario enviado con éxito');
            $('#contactForm')[0].reset();
        } else {
            alert('Por favor, complete todos los campos');
        }
    });
});