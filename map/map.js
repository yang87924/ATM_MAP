
function geoLocation(latitude, longitude) {
    let lat = parseFloat(latitude)
    let lng = parseFloat(longitude)
    return { lat: lat, lng: lng }
 }
 function initMap() {
    fetch(bankUrl)
    .then(response => response.json())
    .then(data => {
        getdata = data

    })
    const taiwan = { lat: 23.975126479012527, lng: 120.9795655805013 };
     map = new google.maps.Map($('#map').get(0), {
        zoom: 8,
        center: taiwan,
        mapId: '1f5eee1a1fca909e'
    });
    
 }
 
 
 window.initMap = initMap;   