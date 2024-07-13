'use client'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useState } from 'react';
const Map = () => {

    const mapStyles = {
        height: '400px',
        width: '400px',

    };

    const defaultCenter = {
        lat: 0, // Default latitude
        lng: 0 // Default longitude
    };

    const [center, setCenter] = useState(defaultCenter);

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