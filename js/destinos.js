$(document).ready(function () {

    // Filtros dinámicos con jQuery
    $(".filtro-destino").click(function () {

        let categoria = $(this).data("categoria");

        $(".filtro-destino").removeClass("active");
        $(this).addClass("active");

        if (categoria === "todos") {
            $(".post-destino").show();
        } else {
            $(".post-destino").hide();

            $(".post-destino").filter("." + categoria).show();
        }
    });

    // Efecto de zoom usando jQuery
    $(".card-destino").mouseenter(function () {
        $(this).addClass("zoom-activo");
    });

    $(".card-destino").mouseleave(function () {
        $(this).removeClass("zoom-activo");
    });

});