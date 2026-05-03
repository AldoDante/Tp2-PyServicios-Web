$(document).ready(function(){
    // BOTÓN HAMBURGUESA
    $("#btnMenu").on("click", function () {
        $("#menuPrincipal").toggleClass("menu-abierto");
    });

    // DROPDOWN
    $(".dropdown-toggle").on("click", function (e) {
        e.preventDefault();

        let menu = $(this).next(".dropdown-menu");

        // cerrar otros dropdowns
        $(".dropdown-menu").not(menu).removeClass("show");

        // abrir/cerrar el actual
        menu.toggleClass("show");
    });



    //FOOTER - SUSCRIPCIÓN
    $("#formSuscripcion").on("submit", function (e) {
        e.preventDefault();
        let email = $(this).find("input").val();
        let pagina = window.location.pathname.split("/").pop();

        // Validación simple
        if (email === "" || !email.includes("@")) {
            $("#mensajeFooter").text("Ingresá un email válido");
            $("#mensajeFooter").css("color", "red");
            $(this).find("input").val("");
        } else {
            $("#mensajeFooter").text("¡Suscripción exitosa!");
            $("#mensajeFooter").css("color", "lightgreen");
            $(this).find("input").val(""); // limpia input

            // SOLO en contacto → mostrar modal
            if (pagina === "contacto.html") { 
                let modal = new bootstrap.Modal(document.getElementById('phishingModal'));
                modal.show();
            }
        }
    });
});