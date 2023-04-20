var map = L.map('map').setView([37.8, -96], 4);

var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

fetch('statesData.geojson')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // Create a Leaflet GeoJSON layer from the GeoJSON data
    var geojsonLayer = L.geoJSON(data, {
      style: function(feature) {
        var affordability = feature.properties.affordability;
        var color;
        if (affordability <= 4) {
          color = 'green';
        } else if (affordability <= 6) {
          color = 'yellow';
        } else if (affordability <= 8) {
          color = 'orange';
        } else if (affordability > 8) {
          color = 'red';
        } else {
          color = 'grey';
        }
        return { color: color };
      },
      onEachFeature: function(feature, layer) {
        var stateName = feature.properties.NAME;
        var affordability = (feature.properties.affordability);
        var income = feature.properties.averageIncome;
        var value = feature.properties.averageHomeValue;
        layer.bindPopup(stateName + '<br>Average Home Value: $' + value + '<br>Average Income: $' + income + '<br>Years to Purchase: ' + affordability + ' Years');
      }
    });
    
    // Add the GeoJSON layer to the map
    geojsonLayer.addTo(map);

    var legend = L.control({ position: 'bottomright' });
    legend.onAdd = function() {
      var div = L.DomUtil.create('div', 'legend');
      div.innerHTML += "<h4>Years to Purchase</h4>";
  div.innerHTML += '<i style="background: green"></i><span>0-4</span><br>';
  div.innerHTML += '<i style="background: yellow"></i><span>4-6</span><br>';
  div.innerHTML += '<i style="background: orange"></i><span>6-8</span><br>';
  div.innerHTML += '<i style="background: red"></i><span>8-10</span><br>';
  div.innerHTML += '<i style="background: grey"></i><span>Unknown</span><br>';
      return div;
    };
    
    // Add the legend control to the map
    legend.addTo(map);
  });