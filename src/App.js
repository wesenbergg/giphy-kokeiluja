/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import SearchGiphy from './SearchGiphy';
import FetchGiphy from './FetchGiphy';
import YandexGeocode from './YandexGeocode';
import NominatimGeocoder from './NominatimGeocoder';
// {/* <FetchGiphy />
//     <SearchGiphy /> */}

const App = () => {

  return (
    <NominatimGeocoder />
  );
}

export default App;

