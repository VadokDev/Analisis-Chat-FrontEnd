
$("#formLogin").submit(function (e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "http://chile-2.herokuapp.com/autentificar",
        data: JSON.stringify( { username: $("#username").val(), password: $("#password").val() } ),
        contentType: 'application/json',
        dataType: 'json',
        cache: false,
        success: function(respuesta) {
            console.log(respuesta["jwt"]);
            window.localStorage.setItem("token", respuesta["jwt"]);
            window.location.href = "/consultas.html";
        },
        error: function() {
            console.log("No se ha podido obtener la información");
        }
    });
    return false;
});