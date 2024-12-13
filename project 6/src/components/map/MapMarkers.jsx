import React from 'react';
import { Marker } from '@react-google-maps/api';

export function DriverMarker({ position, driver }) {
  return (
    <Marker
      position={position}
      icon={{
        url: '/driver-marker.png',
        scaledSize: new window.google.maps.Size(40, 40)
      }}
      title={driver.name}
    />
  );
}

export function LocationMarker({ position, type }) {
  const icon = type === 'pickup' ? '/pickup-marker.png' : '/drop-marker.png';
  
  return (
    <Marker
      position={position}
      icon={{
        url: icon,
        scaledSize: new window.google.maps.Size(40, 40)
      }}
    />
  );
}