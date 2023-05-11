import React, {useState} from 'react'
import { Button } from '@mui/material';

const GoogleGeolocation = () => {
    const [position, setPosition] = useState(null);

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setPosition({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
            localStorage.setItem('latitude', position.coords.latitude);
            localStorage.setItem('longitude', position.coords.longitude);
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        console.log('Geolocation is not supported by this browser.');
      }
    };

  return (
    <div>
        <Button onClick={getLocation}>Get Location</Button>
    </div>
  )
}

export default GoogleGeolocation
