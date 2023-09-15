import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: 9.0820,
  lng: 8.6753,
};

function GMap() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCGvm8zDc3YxJGFu_Q7OqBLY5kl4WKJ70A">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={7}>
      </GoogleMap>
    </LoadScript>
  );
}
export default GMap;