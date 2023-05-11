import React, { useRef, useEffect  } from 'react';
import { useLoadScript, Autocomplete } from '@react-google-maps/api';

const libraries = ['places'];

const SearchBoxLocation = ({value, onChange}) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: '',
    libraries,
  });
  

  const autocompleteRef = useRef(null);
  const inputRef = useRef(null);

  const handlePlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();
    const geocode = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };
    setInputValue(place.name);
    console.log('Selected place:', place.name, geocode);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener('focus', () => {
        setInputValue('');
      });
    }
  }, []);

  if (loadError) return <div>Error loading Google Maps API</div>;
  if (!isLoaded) return <div>Loading Google Maps API...</div>;

  return (
    <Autocomplete
      onLoad={(ref) => (autocompleteRef.current = ref)}
      onPlaceChanged={handlePlaceChanged}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter a location"
        className="location-input"
        value={value}
        onChange={onChange}
      />
    </Autocomplete>
  );
};

export default SearchBoxLocation