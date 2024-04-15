document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map').setView([5.023902, -74.026370], 7); // Cambia las coordenadas de setView

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var marker = L.marker([5.712252,-72.798277]).addTo(map); // Coordenadas de La Zarza
    marker.bindPopup("<b>Páramo de Ocetá</b><br>").openPopup();

    var marker2 = L.marker([5.023902, -74.026370]).addTo(map);
    marker2.bindPopup("<b>Páramo de Sumapaz</b>").openPopup();
});
