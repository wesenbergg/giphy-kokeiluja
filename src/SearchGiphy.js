import React, { useContext, useState } from 'react';
import { Carousel, Gif } from '@giphy/react-components'
import {
  SearchBar, // the search bar the user will type into
  SearchContext, // the context that wraps and connects our components
  // SearchContextManager, // the context manager, includes the Context.Provider
  // SuggestionBar, // an optional UI component that displays trending searches and channel / username results
} from '@giphy/react-components'

const SearchGiphy = () => {
  const [modal, setModal] = useState();
  const { fetchGifs, searchKey } = useContext(SearchContext);

  // use @giphy/js-fetch-api to fetch gifs, instantiate with your api key
  // const gf = new GiphyFetch('7OxAYxG8tHX3A1KuOX73LzFhWyUxQJro')
  // configure your fetch: fetch 10 gifs at a time as the user scrolls (offset is handled by the grid)

  // const fetchGifs = (offset) => gf.trending({ offset, limit: 10 })

  return (
    <div className="container-fluid text-center row">
      <div className="col-6">
        <SearchBar />
        <Carousel hideAttribution gifHeight={200} columns={3} key={searchKey} fetchGifs={fetchGifs} onGifClick={(gif, e) => {
          console.log("gif", gif.id);
          e.preventDefault();
          setModal(gif);
        }} />

      </div>
      <div className="col-6">
        {modal ? <Gif hideAttribution gif={modal} width={300} />: ''}
      </div>
    </div>
  );
}

export default SearchGiphy;

