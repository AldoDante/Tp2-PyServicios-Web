$(document).ready(function () {

    $(".blog-card").addClass("animado");

    function animarScroll() {
        $(".blog-card:visible").each(function () {
            let posicionElemento = $(this).offset().top;
            let posicionScroll = $(window).scrollTop();
            let altoVentana = $(window).height();

            if (posicionScroll + altoVentana > posicionElemento + 100) {
                $(this).addClass("visible");
            }
        });
    }

    $(".filtro").click(function () {
        let categoria = $(this).data("categoria");

        $(".filtro").removeClass("active");
        $(this).addClass("active");

        if (categoria === "todos") {
            $(".post").show();
        } else {
            $(".post").hide();
            $(".post." + categoria).show();
        }

        $(".blog-card").removeClass("visible");
        animarScroll();
    });

    animarScroll();

    $(window).scroll(function () {
        animarScroll();
    });

});