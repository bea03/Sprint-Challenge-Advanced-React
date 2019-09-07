import React from 'react';

export default function PlayerDisplay({players}) {
  return(
    <div className="player-display">
        <h1>{players.name}</h1>
        <p>Location: {players.country}</p>
        <p>Searches: {players.searches}</p>
    </div>
  )
}
