var ke = require('key-emit')(document);
ke.pressed.on('enter', function() {
    findCoordinates();
});
ke.down.on('ctrl I', function() {
    document.getElementById('location').focus();
});
var coordinatesFinder = require("./lib/coordinates_finder.js");
document.getElementById('search-btn').addEventListener('click',function(){
    findCoordinates();
});

function logPlace(location){
   document.getElementById('locationName').innerHTML=location.location;
   document.getElementById('formatted_address').innerHTML=location.formattedAddress;
   document.getElementById('placeid').innerHTML= location.placeId;
   document.getElementById('latitude').innerHTML=location.latitude;
   document.getElementById('longitude').innerHTML=location.longitude;
   document.getElementById('container').style="display:block;";
}

function findCoordinates(){
     coordinatesFinder.findCoordinates(document.getElementById('location').value, logPlace);
}