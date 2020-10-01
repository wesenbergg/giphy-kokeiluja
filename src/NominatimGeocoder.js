/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

const NominatimGeocoder = () => {
  const [search, setSearch] = useState('')
  const [data, setData] = useState()
  const [searchTerm] = useDebounce(search, 1000);
  
  //Vaihtoehtoinen url https://nominatim.openstreetmap.org/search?city=Helsinki&format=geocodejson
  useEffect(() => {
    if(!searchTerm) return;
    console.log(searchTerm);
    fetch('https://nominatim.openstreetmap.org/search?format=geocodejson&q='+searchTerm)
    .then(res => res.json())
    .then(res => {
      // console.log(res.response.GeoObjectCollection.featureMember);
      if(res)
        setData(res.features)
      console.log(res);
    })
  }, [searchTerm])

  // console.log(data);
  const showResult = () => data.map(({ properties, geometry }) => <li key={Math.random()}>
    {properties.geocoding.label} [{geometry.coordinates[0]}, {geometry.coordinates[1]}]
  </li> );

  return (
    <div>
      <ul>
        {data ? showResult(): ''}
      </ul>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      {/* <button onClick={handleFetch} >search</button> */}
    </div>
  );
}

export default NominatimGeocoder;

