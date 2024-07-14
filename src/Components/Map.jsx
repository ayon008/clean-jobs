'use client'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const Map = () => {

    const mapStyles = {
        height: '400px',
        width: '400px',

    };

    const center = {
        lat: 41.87028085917915, // Latitude of the city (e.g., New York City)
        lng: -87.64401959023697 // Longitude of the city (e.g., New York City)
    };

    const options = {
        zoomControl: false,
        mapTypeControl: false,
        zoomControl: false,
        streetViewControl: false,
        fullscreenControl: false
    }

    return (
        <div>
            <LoadScript googleMapsApiKey={'AIzaSyCLJx7EASIc2pOjiQApyAvo1FyeZcjtBLQ'}>
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    center={center}
                    zoom={12}
                    options={options}
                // Adjust the zoom level as needed
                >
                    {/* You can add markers or other map features here */}
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Map;