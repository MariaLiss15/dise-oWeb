$(document).ready(function () {
    $("a").click(function (evento) {
        alert("Has pulsado el enlace: Ahora seras enviado a la página de Usat")
    });
});

$("#cd1").click(function () {
    $("#cont1").toggle(1500);
}, function () {
    $("#cont1").toggle(1500);
}
);