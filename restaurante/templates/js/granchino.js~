$(document).ready(function(){
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
//        L.marker([40.2809449,-3.7978428]).addTo(map)
//            .bindPopup("Gran Chino")
//            .openPopup();
    }
    showGranChinoPosition();
});
