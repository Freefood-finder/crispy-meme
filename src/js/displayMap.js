      var map;
      var infowindow;
      var event = {
      0: { 
         lat: 43.087214,
         lng: -77.668283,
         timeStart : "12:00",
         timeEnd: "12:30",
         foodType: "Pizza",
         desc: "Networking with Intuit"},
      1: { 
         lat: 43.085304,
         lng: -77.673543,
         timeStart : "1:00",
         timeEnd: "2:30",
         foodType: "Sandwich",
         desc: "SSE Tech Talk"},
      2: { 
         lat: 43.083870,
         lng: -77.674981,
         timeStart : "6:10",
         timeEnd: "8:00",
         foodType: "Sandwich",
         desc: "Data Science Meeting"},
      3: { 
         lat: 43.085218,
         lng: -77.677277,
         timeStart : "8:30",
         timeEnd: "9:00",
         foodType: "Pizza",
         desc: "Tech Talk with Google"},
      4: { 
         lat: 43.082601,
         lng: -77.680200,
         timeStart : "8:30",
         timeEnd: "9:00",
         foodType: "Pizza",
         desc: "Llama visiting"},
      5: { 
         lat: 43.081574,
         lng: -77.678301,
         timeStart : "6:10",
         timeEnd: "8:00",
         foodType: "Sandwich",
         desc: "Fishing with Rick"},
      6: { 
         lat: 43.083470,
         lng: -77.680361,
         timeStart : "6:10",
         timeEnd: "8:00",
         foodType: "Vegetarian",
         desc: "No Meat Monday"},
      7: { 
         lat: 43.081852,
         lng: -77.676282,
         timeStart : "5:00",
         timeEnd: "5:30",
         foodType: "Dinosaur BBQ",
         desc: "BBQ celebration"},
      8: { 
         lat: 43.084237,
         lng: -77.679066,
         timeStart : "7:45",
         timeEnd: "8:00",
         foodType: "Brick",
         desc: "Brick city leftovers"},
      9: { 
         lat: 43.085028,
         lng: -77.674860,
         timeStart : "3:44",
         timeEnd: "5:55",
         foodType: "Donut",
         desc: "Krispy Kreme promotion"}
      
      } // end of event

      function initMap() {
      	
      	var mapSettings ={
          center: {lat: 43.085, lng: -77.676},
          zoom: 16
      	};
        map = new google.maps.Map(document.getElementById("map"), mapSettings);
        infowindow = new google.maps.InfoWindow();
        for(var entry in event) {
          //format position [lat and lng]
          var pos = new google.maps.LatLng(event[entry].lat,event[entry].lng);
          var message = "<b>Desc: </b>" + event[entry].desc +"<br/><b> Time: </b>"+ event[entry].timeStart + "-" 
             +event[entry].timeEnd + "<br/><b>Lat: </b>" + event[entry].lat + "<br/><b>Lng: </b>" + event[entry].lng 
             + "<br/><b>Food Type: </b>" + event[entry].foodType;
          var title = event[entry].desc;
          createMarker(pos, title, message);
        }
      }

      function createMarker(latlng, title, content){

          var marker = new google.maps.Marker({
            map: map,
            position: latlng,
            title: title
            }); //end Marker
          google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(content);
            infowindow.open(map, marker);
          });
  
          
      }
      
  
