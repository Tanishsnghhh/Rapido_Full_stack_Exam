import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '300px'
};

export function Map({ center, drivers, zoom = 14 }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
  });

  if (!isLoaded) {
    return <div className="h-[300px] bg-gray-100 animate-pulse rounded-lg"></div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
    >
      {drivers.map((driver) => (
        <Marker
          key={driver.id}
          position={driver.location}
          title={driver.name}
          icon={{
            url: '/bike-marker.png',
            scaledSize: new window.google.maps.Size(32, 32)
          }}
        />
      ))}
    </GoogleMap>
  );
}