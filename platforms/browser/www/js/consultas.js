

document.addEventListener("deviceready", function(){
    $.ajax({
        type: "GET",
        headers: {
            'Authorization': 'Bearer ' + window.localStorage.getItem("token")
        },
        url: "http://chile-2.herokuapp.com/v1/consulta/consultas",
        data: JSON.stringify( { username: "chalo", password: "holamundo" } ),
        contentType: 'application/json',
        dataType: 'json',
        cache: false,
        success: function(respuesta) {
            console.log(respuesta);
            for (var i = 0; i < respuesta.length; i++) {
                $("#consultas").append('                                                     \
                    <div class="card">                                                       \
                        <div class="card-body">                                              \
                            <h5 class="card-title">Consulta '+respuesta[i].id+'</h5>         \
                            <p class="card-text">Cliente: '+ respuesta[i].cliente + '</p>    \
                            <p class="card-text">Técnico: '+ respuesta[i].tecnico + '</p>    \
                            <a href="/chat.html" onclick="setConsulta('+ respuesta[i].id +')"\
                            class="btn btn-primary">Ir al Chat</a>                           \
                        </div>                                                               \
                    </div>                                                                   \
                ');
            }
        },
        error: function() {
            console.log("No se ha podido obtener la información");
        }
    });
});

function setConsulta(idConsulta) {
    window.localStorage.setItem('consulta', idConsulta.toString());
}