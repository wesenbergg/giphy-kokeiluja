/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import SearchGiphy from './SearchGiphy';
import FetchGiphy from './FetchGiphy';
// {/* <FetchGiphy />
//     <SearchGiphy /> */}

const App = () => {
  const [search, setSearch] = useState('')
  const [data, setData] = useState()
  
  //Vaihtoehtoinen url https://nominatim.openstreetmap.org/search?city=Helsinki&format=geocodejson
  const handleFetch = () => {
    fetch('https://geocode-maps.yandex.ru/1.x?apikey='+ process.env.REACT_APP_YANDEX_API +'&lang=en&format=json&geocode='+search)
    .then(res => res.json())
    .then(res => {
      // console.log(res.response.GeoObjectCollection.featureMember);
      if(res && res.response && res.response.GeoObjectCollection)
        setData(res.response.GeoObjectCollection.featureMember)
    })
  }

  // console.log(data);
  const showResult = () => data.map(({ GeoObject }) => <li key={Math.random()}>
    {GeoObject.name} {GeoObject.description} [{GeoObject.Point.pos}]
  </li> );

  return (
    <div>
      <ul>
        {data ? showResult(): ''}
      </ul>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={handleFetch} >search</button>
    </div>
  );
}

export default App;

