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
    $("#close").click(function() {
        $("#menu2").hide();
        $("#fondo").hide();
    });
    $("#closeMap").click(function() {
        $("#mapa2").hide();
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
});
function showGranChinoPosition(){
    var map = L.map('map').setView([40.2809449,-3.7978428], 16);
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
}
function savePlate(id, name, description, image, price) {
    
}
