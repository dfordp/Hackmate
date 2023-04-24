import React from 'react';
import usePlacesAutocomplete from 'use-places-autocomplete';

function SearchBox() {
  const [inputValue, setInputValue] = useState('');
  const { suggestions, setValue } = usePlacesAutocomplete();

   const handleInput = (e) => {
    setInputValue(e.target.value);
    setValue(e.target.value);
  };

  const handleSelect = (description) => {
    setInputValue(description);
    setValue(description, false);
  };

  return (
    <div>
      <input value={inputValue} onChange={handleInput} placeholder="Search..." />
      {suggestions.status === 'OK' && (
        <ul>
          {suggestions.data.map((suggestion) => (
            <li key={suggestion.place_id} onClick={() => handleSelect(suggestion.description)}>
              {suggestion.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


export default SearchBox;
