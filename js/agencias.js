$(document).ready(function () {
    
    $('.stars input').on('change', function (e) {
        
        e.stopPropagation();

        const rating = $(this).val();
        const agencia = $(this).closest('.flip-card-back').find('h3').text();
        
        console.log("Calificación para " + agencia + ": " + rating + " estrellas.");
        
    });
});