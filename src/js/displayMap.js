var map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 43.085, lng: -77.676},
    zoom: 16
	});

    // Limit the zoom out
	google.maps.event.addListener(map, 'zoom_changed', function() {
    	if (map.getZoom() < 16) map.setZoom(16);
	}); //end of limit zoom out

	//add marker(s)
	var marker = new google.maps.Marker({
        position: {lat: 43.085, lng: -77.676},
        map: map
    }); //location of dummy marker
}//end of initMap()

      

