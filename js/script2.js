
    function initMap(){
    // Map options
    var options = {
    zoom:8,
    center:{lat:48.863355,lng:2.329206}
}

    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Listen for click on map
    google.maps.event.addListener(map, 'click', function(event){
    // Add marker
    addMarker({coords:event.latLng});
});

    // Marker
    var marker = new google.maps.Marker({
      position:{lat:48.863355,lng:2.329206},
      map:map,
      icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });

    var infoWindow = new google.maps.InfoWindow({
      content:'<h1>Lynn MA</h1>'
    });

    marker.addListener('click', function(){
      infoWindow.open(map, marker);
    });


    // Array of markers
    var markers = [
{
    coords:{lat:48.863355,lng:2.329206},
    iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    content:'<h1>Paris</h1>'
},
{
    coords:{lat:48.863355,lng:-70.9300},
    content:'<h1>Paris</h1>'
},
{
    coords:{lat:42.7762,lng:-71.0773}
}
    ];

    // Loop through markers
    for(var i = 0;i < markers.length;i++){
    // Add marker
    addMarker(markers[i]);
}

    // Add Marker Function
    function addMarker(props){
    var marker = new google.maps.Marker({
    position:props.coords,
    map:map,
    //icon:props.iconImage
});

    // Check for customicon
    if(props.iconImage){
    // Set icon image
    marker.setIcon(props.iconImage);
}

    // Check content
    if(props.content){
    var infoWindow = new google.maps.InfoWindow({
    content:props.content
});

    marker.addListener('click', function(){
    infoWindow.open(map, marker);
});
}
}
}
