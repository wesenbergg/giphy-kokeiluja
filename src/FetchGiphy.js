import React, { useState } from 'react';
import { Gif } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'

const FetchGiphy = () => {
  const [modal, setModal] = useState();
  const gf = new GiphyFetch(process.env.REACT_APP_GIPHY_API)

  const data = [
    {
      id: '3orifdxh94UCCYVeW4',
      name: 'dad',
    }, 
    {
      id: '13CoXDiaCcCoyk',
      name: 'cat',
    }, 
    {
      id: '3o7527pa7qs9kCG78A',
      name: 'dog',
    }, 
    {
      id: '14xAw2hSwvhpC',
      name: 'goth'
    },
  ]

  const handleClick = async (id) => {
    const { data } = await gf.gif(id)
    setModal(data)
  }

  const showButtons = () => data.map(e => 
      <button key={e.id} onClick={() => handleClick(e.id)}>{e.name}</button>
    );

  return (
    <div className="container-fluid text-center row">
      <div>
        {showButtons()}
      </div>
      {modal ? <Gif hideAttribution gif={modal} width={300} />: ''}
    </div>
  );
}

export default FetchGiphy;