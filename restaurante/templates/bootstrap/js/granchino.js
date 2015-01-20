$(document).ready(function(){
    $("#menu").click(function() {
        $("#fondo").show();
        $("#menu2").show();
        
    });
    $("#mapa").click(function() {
        $("#fondo").show();
        $("#mapa2").show();
        showGranChinoPosition();
    });
    $("#foro").click(function() {
        $("#fondo").show();
        $("#foro2").show();
    });
    $("#mesas").click(function() {
        $("#fondo").show();
        $("#mesas2").show();
    });
    $("#close").click(function() {
        $("#menu2").hide();
        $("#fondo").hide();
    });
    $("#closeMap").click(function() {
        $("#mapa2").hide();
        $("#fondo").hide();
    });
    $("#closeForo").click(function() {
        $("#foro2").hide();
        $("#fondo").hide();
    });
    $("#closeMesas").click(function() {
        $("#mesas2").hide();
        $("#fondo").hide();
    });
    $("#add").click(function() {
        $("#addPlate").show();
    });
    $("#acept").click(function() {
        var id = document.getElementById("id").value;
        var name = document.getElementById("name").value;
        var description = document.getElementById("description").value;
        var image = document.getElementById("image").value;
        var price = document.getElementById("price").value;
        $("#addPlate").hide();
        console.log(id+" "+name+" "+price);
        savePlate(id, name, description, image, price);
    });
    $("#cancel").click(function() {
        $("#addPlate").hide();
    });
    $("#cancelMesa").click(function() {
        $("#addMesa").hide();
    });
    $("#aceptMesa").click(function() {
        var id = document.getElementById("mesa").value;
        var name = document.getElementById("N").value;
        $("#addMesa").hide();
        console.log(id+" "+name);
        saveMesa(id, name, tiempo);
    });
    $("#mesa1").click(function() {
        $("#addMesa").show();
    });
    $("#mesa2").click(function() {
        $("#addMesa").show();
    });
    $("#mesa3").click(function() {
        $("#addMesa").show();
    });
    $("#mesa4").click(function() {
        $("#addMesa").show();
    });
    $("#mesa5").click(function() {
        $("#addMesa").show();
    });
    $("#mesa6").click(function() {
        $("#addMesa").show();
    });
    $("#mesa7").click(function() {
        $("#addMesa").show();
    });
    $("#mesa8").click(function() {
        $("#addMesa").show();
    });
    $("#mesa9").click(function() {
        $("#addMesa").show();
    });
    $("#mesa10").click(function() {
        $("#addMesa").show();
    });
    $("#mesa11").click(function() {
        $("#addMesa").show();
    });
    $("#mesa12").click(function() {
        $("#addMesa").show();
    });
    $("#mesa13").click(function() {
        $("#addMesa").show();
    });
    $("#mesa14").click(function() {
        $("#addMesa").show();
    });
    $("#mesa15").click(function() {
        $("#addMesa").show();
    });
    $("#mesa16").click(function() {
        $("#addMesa").show();
    });
    $("#mesa17").click(function() {
        $("#addMesa").show();
    });
});
function showGranChinoPosition(){
    var map = L.map('map', {
        layers: MQ.mapLayer(),
        center: [40.2809449,-3.7978428], 
        zoom: 14
    });
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    var circle = L.circle([40.2809449,-3.7978428], 20,{
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.6
    }).addTo(map);
    L.marker([40.2809449,-3.7978428]).addTo(map)
        .bindPopup("Gran Chino")
        .openPopup();
    dir = MQ.routing.directions()
        .on('success', function(data) {
            var legs = data.route.legs,
                html = '',
                maneuvers,
                i;

            if (legs && legs.length) {
                maneuvers = legs[0].maneuvers;

                for (i=0; i<maneuvers.length; i++) {
                    html += (i+1) + '. ';
                    html += maneuvers[i].narrative + '<br />';
                }

                L.DomUtil.get('datos').innerHTML += html;
            }
        });
 
    dir.route({
        locations: [
          'lima 7, Fuenlabrada',
          'covadonga 7, Fuenlabrada'
        ]
    });

    map.addLayer(MQ.routing.routeLayer({
      directions: dir,
      fitBounds: true
    }));
}
function savePlate(id, name, description, image, price) {
    
}
function saveMesa(id, numero, precio) {

}
