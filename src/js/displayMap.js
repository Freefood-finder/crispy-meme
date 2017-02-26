
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 43.085, lng: -77.676},
    zoom: 16
	});

    addMarkers(map);

    // Limit the zoom out
	google.maps.event.addListener(map, 'zoom_changed', function() {
    	if (map.getZoom() < 16) map.setZoom(16);
	}); //end of limit zoom out

}//end of initMap()

function addMarkers(map){
    var locations = [
    	['Bevier Gallery', 43.085295, -77.677241, 4],
    	['Gordon Field House', 43.085076, -77.671512, 3],
    	['Library', 43.083955, -77.676115, 2],
    	['Golisano Computing', 43.084496, -77.680364, 1]
    ];

    var marker, i;
    for (i=0; i<locations.length; i++){
    	marker= new google.maps.Marker({
    		position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    		map: map
    	});
    } // end for loop

    addMarkerDesc(map, marker);
}//end of addMarkers()

function addMarkerDesc(map, marker){
    var marker_description = '<div id="content">'+
         '<div id="siteNotice">'+'</div>'+
	        '<h1 id="firstHeading" class="firstHeading">Bevier Gallery</h1>'+
	            '<div id="bodyContent">'+
		            '<table style="width:100%">'+
		  				'<tr>'+
		    				'<th>Time</th>'+
		    				'<th>Description</th>' + 
		    				'<th>Food Type</th>' + 
		  				'</tr>'+
		  				'<tr>'+
		    				'<td>12:00-2:00PM</td>'+
		    				'<td>First Robotics Meeting</td>'+
		    				'<td>Pizza</td>'+
		  				'</tr>'+
					'</table>'
	            '</div>'+
            '</div>';

    var infowindow = new google.maps.InfoWindow({
          content: marker_description,
          maxWidth: 300
    }); 

	 marker.addListener('click', function() {
          infowindow.open(map, marker);
     });
}//end of addMarkerDesc

