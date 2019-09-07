import React from 'react';
import useFetch from './useFetch.js';
import PlayerDisplay from './PlayerDisplay.js';

function PlayerFetch() {

  const [response] = useFetch('http://localhost:5000/api/players');
  console.log('PlayerFetch', response);



  return (
    <div>
        <h1>Fetch Div Response</h1>
        <div>{response.map(players => {
          return <PlayerDisplay key={players.id} players={players} />
        })}</div>
    </div>
  )
}
export default PlayerFetch;
