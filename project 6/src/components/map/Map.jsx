export function Map(){
  return(<div>
      <iframe width="482" height="300"src="https://api.maptiler.com/maps/basic-v2/?key=JnOT9zrSTgaVGTEwL7bj#14.4/19.02109/73.02298"></iframe>
    </div>);
}


// import React from 'react';
// import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

// const containerStyle = {
//   width: '100%',
//   height: '300px'
// };

// const defaultCenter = {
//   lat: 12.9716,
//   lng: 77.5946
// };

// export function Map({ center = defaultCenter, markers = [] }) {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY' // In a real app, use environment variable
//   });

//   const [map, setMap] = React.useState(null);

//   const onLoad = React.useCallback(function callback(map) {
//     setMap(map);
//   }, []);

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null);
//   }, []);

//   return isLoaded ? (
//     <div className="rounded-lg overflow-hidden shadow-md">
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={14}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//         options={{
//           zoomControl: true,
//           streetViewControl: false,
//           mapTypeControl: false,
//           fullscreenControl: false,
//         }}
//       >
//         {markers.map((marker, index) => (
//           <Marker
//             key={index}
//             position={marker.position}
//             icon={marker.icon}
//             title={marker.title}
//           />
//         ))}
//       </GoogleMap>
//     </div>
//   ) : (
//     <div className="h-[300px] bg-gray-100 rounded-lg flex items-center justify-center">
//       <p className="text-gray-500">Loading map...</p>
//     </div>
//   );
// }