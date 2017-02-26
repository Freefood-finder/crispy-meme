//change this to database      
      var map;
      var infowindow;
      var centerloc = {lat: 43.085, lng: -77.676};
      var event = {
      0: { 
         lat: 43.087214,
         lng: -77.668283,
         timeStart : "12:00",
         timeEnd: "12:30",
         foodType: "Pizza",
         desc: "Networking with Intuit",
     	 loc_name: "Panara Theatre"},
      1: { 
         lat: 43.085304,
         lng: -77.673543,
         timeStart : "12:00",
         timeEnd: "1:30",
         foodType: "Sandwich",
         desc: "SSE Tech Talk",
     	 loc_name: "Frank Ritter Arena"},
      2: { 
         lat: 43.083870,
         lng: -77.674981,
         timeStart : "12:30",
         timeEnd: "1:30",
         foodType: "Sandwich",
         desc: "Data Science Meeting",
     	 loc_name: "Student Alumni Union"},
      3: { 
         lat: 43.085218,
         lng: -77.677277,
         timeStart : "12:00",
         timeEnd: "1:00",
         foodType: "Pizza",
         desc: "Tech Talk with Google",
     	 loc_name: "James E. Booth Hall"},
      4: { 
         lat: 43.082601,
         lng: -77.680200,
         timeStart : "12:30",
         timeEnd: "1:00",
         foodType: "Pizza",
         desc: "Llama visiting",
     	 loc_name: "Midnight Owl"},
      5: { 
         lat: 43.081574,
         lng: -77.678301,
         timeStart : "12:10",
         timeEnd: "1:00",
         foodType: "Sandwich",
         desc: "Fishing with Rick",
     	 loc_name: "R Parking Lot"},
      6: { 
         lat: 43.083470,
         lng: -77.680361,
         timeStart : "12:10",
         timeEnd: "1:00",
         foodType: "Vegetarian",
         desc: "No Meat Monday",
     	 loc_name: "MAGIC Center"},
      7: { 
         lat: 43.081852,
         lng: -77.676282,
         timeStart : "12:00",
         timeEnd: "12:30",
         foodType: "Dinosaur BBQ",
         desc: "BBQ celebration",
     	 loc_name: "Turf Field"},
      8: { 
         lat: 43.084237,
         lng: -77.679066,
         timeStart : "12:30",
         timeEnd: "1:30",
         foodType: "Brick",
         desc: "Brick city leftovers",
     	 loc_name: "Kate Gleason"},
      9: { 
         lat: 43.085028,
         lng: -77.674860,
         timeStart : "12:00",
         timeEnd: "1:00",
         foodType: "Donut",
         desc: "Krispy Kreme promotion",
     	 loc_name: "Eastman"}
      
      } // end of event

      function initMap() {
      	
      	var mapSettings ={
          center: centerloc,
          zoom: 16
      	};

        map = new google.maps.Map(document.getElementById("map"), mapSettings);
        infowindow = new google.maps.InfoWindow();

        for(var entry in event) {
          var pos = new google.maps.LatLng(event[entry].lat,event[entry].lng);
          var message = "<h1>"+event[entry].loc_name+"</h1><b>Desc: </b>" + event[entry].desc +"<br/><b> Time: </b>"+ event[entry].timeStart + "-" 
             +event[entry].timeEnd 
             + "<br/><b>Food Type: </b>" + event[entry].foodType;
          var title = event[entry].desc;
          createMarker(pos, title, message);
        }

        centerPosition(map);

      }

      function createMarker(latlng, title, content){

          var marker = new google.maps.Marker({
            map: map,
            position: latlng,
            label: "1",
            title: title
            }); //end Marker
          google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(content);
            infowindow.open(map, marker);
          });
      }

      function centerButton(controlDiv, map) {

        var controlUI = document.createElement('div');
        controlUI.style.backgroundColor = '#fff';
        controlUI.style.border = '2px solid #fff';
        controlUI.style.borderRadius = '3px';
        controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
        controlUI.style.cursor = 'pointer';
        controlUI.style.marginBottom = '22px';
        controlUI.style.textAlign = 'center';
        controlUI.title = 'Click to recenter the map';
        controlDiv.appendChild(controlUI);

        var controlText = document.createElement('div');
        controlText.style.color = 'rgb(25,25,25)';
        controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
        controlText.style.fontSize = '16px';
        controlText.style.lineHeight = '38px';
        controlText.style.paddingLeft = '5px';
        controlText.style.paddingRight = '5px';
        controlText.innerHTML = 'Center RIT Map';
        controlUI.appendChild(controlText);

        controlUI.addEventListener('click', function() {
          map.setCenter(centerloc);
        });

      }

      function centerPosition(map){

        var centerControlDiv = document.createElement('div');
        var centerControl = new centerButton(centerControlDiv, map);

        centerControlDiv.index = 1;
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);

        //limit zoom out
		google.maps.event.addListener(map, 'zoom_changed', function() {
    		if (map.getZoom() < 16) map.setZoom(16);
		}); //end of limit zoom out
      }
      
  
