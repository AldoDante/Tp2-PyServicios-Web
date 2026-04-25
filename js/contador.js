$(function(){
    let cuenta = 0;
    const maximo = 500;
     
    const velocidad = 100; 

    const cronometro = setInterval(function() {
        cuenta++;
        $('#numero').text(cuenta);

        if (cuenta >= maximo) {
            clearInterval(cronometro); // Se detiene al llegar a 500
        }
    }, velocidad);
});