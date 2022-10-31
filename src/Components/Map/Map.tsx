import { MapDiv } from './Map.styled';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { googleAPIKey } from '../../auth';
import { useMemo } from 'react';

interface MapProps {
  coordinates: {
    lat: number;
    lng: number;
  };
}

function MapContainer({ coordinates }: MapProps) {
  const { lat, lng } = coordinates;
  const center = useMemo(() => ({ lng: lng, lat: lat }), [lat, lng]);
  return (
    <MapDiv>
      <GoogleMap
        zoom={15}
        center={center}
        mapContainerClassName='map-container'
      >
        <Marker position={center} />
      </GoogleMap>
    </MapDiv>
  );
}

export default function Map() {
  const coords = { lat: -0.7112125, lng: 36.9930926 };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleAPIKey
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <MapContainer coordinates={coords} />;
}
