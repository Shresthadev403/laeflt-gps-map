var map = L.map('map').setView([27.7293,85.3343], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// // add marker
var marker = L.marker([27.694791, 85.320202]).addTo(map);



// // add circle
// var circle = L.circle([51.508, -0.11], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(map);


// // add polygon
// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(map);

// // add popup to markers
// marker.bindPopup("<b>Hello!</b><br>I am thapathali campus.").openPopup();



// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");

// // open on auto closing of previouse one
//     var popup = L.popup()
//         .setLatLng([51.513, -0.09])
//         .setContent("I am a standalone popup.")
//         .openOn(map);

/// event handler
        function onMapClick(e) {
            alert("You clicked the map at " + e.latlng);
        }
        
        map.on('click', onMapClick)



        // focus map
        var featureGroup=L.featureGroup([marker]).addTo(map);
        map.fitBounds(featureGroup.getBounds());

    // function changeLocation(){
    //     let data=marker.getLatLng();
    //     console.log(data);
    //     if(marker){
    //    marker.remove();
    //     }
    //      marker = L.marker(([data.lat+0.101, data.lng+0.1001]));
    //         let featureGroup=L.featureGroup([marker]).addTo(map);
    //      map.fitBounds(featureGroup.getBounds());
       
    // }

//     // requestAnimationFrame(changeLocation);
//    setInterval(()=>{
// changeLocation();
// console.log("dd");
//    },10000);
   
// function onMapClick(e) {
//     marker = new L.marker(e.latlng, {draggable:'true'});
//     marker.on('dragend', function(event){
//       var marker = event.target;
//       var position = marker.getLatLng();
//       marker.setLatLng(new L.LatLng(position.lat, position.lng),{draggable:'true'});
//       map.panTo(new L.LatLng(position.lat, position.lng))
//     });
//     map.addLayer(marker);
//   };
  
//   map.on('click', onMapClick);



