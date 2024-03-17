import React, { useEffect } from 'react';

function FindBloodBanks() {
    useEffect(() => {
        function initMap() {
            var map = new window.google.maps.Map(document.getElementById('map'), {
                center: { lat: 28.6139, lng: 77.2090 },
                zoom: 15
            });

            var infoWindow = new window.google.maps.InfoWindow({ map: map });

            // Try HTML5 geolocation to get the user's location
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };

                    infoWindow.setPosition(pos);
                    infoWindow.setContent('You are here');
                    map.setCenter(pos);

                    // Search for nearby blood banks and hospitals with blood banks using Places API
                    var request = {
                        location: pos,
                        radius: '5000',  // Search within a 5 km radius
                        types: ['hospital', 'health', 'blood_bank']
                    };

                    var service = new window.google.maps.places.PlacesService(map);
                    service.nearbySearch(request, function (results, status) {
                        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                            var bounds = new window.google.maps.LatLngBounds();
                            var totalDistance = 0;
                            var nearestLocation = null;
                            var nearestDistance = Number.MAX_VALUE;

                            for (var i = 0; i < results.length; i++) {
                                var place = results[i];
                                if (place.types.includes('hospital') || place.types.includes('blood_bank')) {
                                    var li = document.createElement('li');
                                    li.textContent = place.name;
                                    document.getElementById('placesList').appendChild(li);

                                    // Show the place on the map
                                    var marker = new window.google.maps.Marker({
                                        map: map,
                                        position: place.geometry.location,
                                        title: place.name
                                    });

                                    // Calculate and add distance
                                    var distance = window.google.maps.geometry.spherical.computeDistanceBetween(new window.google.maps.LatLng(pos.lat, pos.lng), place.geometry.location);
                                    if (distance < nearestDistance) {
                                        nearestDistance = distance;
                                        nearestLocation = place;
                                    }

                                    totalDistance += distance;
                                    bounds.extend(place.geometry.location);
                                }
                            }

                            // Fit the map to the bounds
                            map.fitBounds(bounds);

                            // Show total distance
                            console.log('Total distance to all places: ' + (totalDistance / 1000).toFixed(2) + ' km');

                            // Show route to nearest location
                            if (nearestLocation) {
                                var directionsService = new window.google.maps.DirectionsService();
                                var directionsDisplay = new window.google.maps.DirectionsRenderer();
                                directionsDisplay.setMap(map);

                                var request = {
                                    origin: pos,
                                    destination: nearestLocation.geometry.location,
                                    travelMode: 'DRIVING'
                                };

                                directionsService.route(request, function (response, status) {
                                    if (status === 'OK') {
                                        directionsDisplay.setDirections(response);
                                        var route = response.routes[0];
                                        var distanceText = route.legs[0].distance.text;
                                        document.getElementById('distance').textContent = 'Distance to nearest location: ' + distanceText;
                                    }
                                });

                                console.log('Nearest location: ' + nearestLocation.name + ' - Distance: ' + (nearestDistance / 1000).toFixed(2) + ' km');
                            }
                        }
                    });

                }, function () {
                    handleLocationError(true, infoWindow, map.getCenter());
                });
            } else {
                // Browser doesn't support Geolocation
                handleLocationError(false, infoWindow, map.getCenter());
            }

            function handleLocationError(browserHasGeolocation, infoWindow, pos) {
                infoWindow.setPosition(pos);
                infoWindow.setContent(browserHasGeolocation ?
                    'Error: The Geolocation service failed.' :
                    'Error: Your browser doesn\'t support geolocation.');
            }
        }

        initMap();
    }, []);

    return (
        <div>
            <h1>Find Nearby Blood Banks</h1>
            <div id="map" style={{ height: '400px', width: '100%' }}></div>
            <ul id="placesList"></ul>
            <p id="distance"></p>
        </div>
    );
}

export default FindBloodBanks;
