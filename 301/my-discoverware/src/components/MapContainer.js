import React, { useState, useEffect } from 'react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

function MapContainer(props) {
  const [markers, setMarkers] = useState([]);
  let [lat, setLat] = useState(0);
  let [lng, setLng] = useState(0);

  const mapStyles = {
    height: "92vh",
    width: "100%"
  };

  const { getIdTokenClaims, isAuthenticated } = useAuth0();

  const getMarkers = async () => {
    try {
      const res = await getIdTokenClaims();
      if (!res) return;
      const token = res.__raw;
      const config = {
        headers: { Authorization: `Bearer ${token}` },
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/place'
      }
      const places = await axios(config);
      setMarkers(places.data.map(place => ({lat: place.lat, lng: place.lng})));
    } catch (error) {
    console.error("Error in getMarkers: ", error);
    }
  }

  useEffect(() => {
    getMarkers();
  }, [isAuthenticated]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setLat(props.center.lat || 47.6062095);
    setLng(props.center.lng || -122.3320708);
  }, [props.center.lat]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      libraries={props.libraries}
      onLoad={() => props.enablePlaces()}
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={12}
        center={{lat, lng}}
        onLoad={map => {
          props.getMapRef(map);
          props.enablePlaces();
        }}
      >
        {
          isAuthenticated &&
            markers.map((coords, i) => {
              return (<Marker position={coords} key={i}/>);
            })
        }
      </GoogleMap>
    </LoadScript>
  );
}

export default MapContainer;
