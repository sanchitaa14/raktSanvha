import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
const FindBloodBanks = () => {
    useEffect(() => {
        const initMap = () => {
            const map = new window.google.maps.Map(document.getElementById('map'), {
                center: { lat: 28.6139, lng: 77.2090 },
                zoom: 15
            });

            const infoWindow = new window.google.maps.InfoWindow({ map });

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };

                    infoWindow.setPosition(pos);
                    infoWindow.setContent('You are here');
                    map.setCenter(pos);

                    const request = {
                        location: pos,
                        radius: '5000',
                        types: ['hospital', 'health', 'blood_bank']
                    };

                    const service = new window.google.maps.places.PlacesService(map);
                    service.nearbySearch(request, (results, status) => {
                        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                            const bounds = new window.google.maps.LatLngBounds();
                            let totalDistance = 0;
                            let nearestLocation = null;
                            let nearestDistance = Number.MAX_VALUE;

                            for (let i = 0; i < results.length; i++) {
                                const place = results[i];
                                if (place.types.includes('hospital') || place.types.includes('blood_bank')) {
                                    const li = document.createElement('li');
                                    li.textContent = place.name;
                                    document.getElementById('placesList').appendChild(li);

                                    const marker = new window.google.maps.Marker({
                                        map,
                                        position: place.geometry.location,
                                        title: place.name
                                    });

                                    const distance = window.google.maps.geometry.spherical.computeDistanceBetween(new window.google.maps.LatLng(pos.lat, pos.lng), place.geometry.location);
                                    if (distance < nearestDistance) {
                                        nearestDistance = distance;
                                        nearestLocation = place;
                                    }

                                    totalDistance += distance;
                                    bounds.extend(place.geometry.location);
                                }
                            }

                            map.fitBounds(bounds);

                            console.log('Total distance to all places: ' + (totalDistance / 1000).toFixed(2) + ' km');

                            if (nearestLocation) {
                                const directionsService = new window.google.maps.DirectionsService();
                                const directionsDisplay = new window.google.maps.DirectionsRenderer();
                                directionsDisplay.setMap(map);

                                const request = {
                                    origin: pos,
                                    destination: nearestLocation.geometry.location,
                                    travelMode: 'DRIVING'
                                };

                                directionsService.route(request, (response, status) => {
                                    if (status === 'OK') {
                                        directionsDisplay.setDirections(response);
                                        const route = response.routes[0];
                                        const distanceText = route.legs[0].distance.text;
                                        document.getElementById('distance').textContent = 'Distance to nearest location: ' + distanceText;
                                    }
                                });

                                console.log('Nearest location: ' + nearestLocation.name + ' - Distance: ' + (nearestDistance / 1000).toFixed(2) + ' km');
                            }
                        }
                    });
                }, () => {
                    handleLocationError(true, infoWindow, map.getCenter());
                });
            } else {
                handleLocationError(false, infoWindow, map.getCenter());
            }

            const handleLocationError = (browserHasGeolocation, infoWindow, pos) => {
                infoWindow.setPosition(pos);
                infoWindow.setContent(browserHasGeolocation ?
                    'Error: The Geolocation service failed.' :
                    'Error: Your browser doesn\'t support geolocation.');
            }
        };

        if (!window.google) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDXn0sLaBXyVkJhbT568JTeJJO81N7sW48&libraries=places,geometry&callback=initMap`;
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
        } else {
            initMap();
        }
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4 mt-10">Find Nearby Blood Banks</h1>
            <div id="map" className="h-96 w-full"></div>
            <button className="gradient-button mr-4 p-10"><Link to="/form">Place your Request</Link></button>
            <div id="distance" className="bg-blue-500 text-white py-4 px-6 mt-4"></div>
            <ul id="placesList"></ul>
            
        </div>
    );
}

export default FindBloodBanks;
