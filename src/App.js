import './App.css';
import React, { useState } from 'react';
import { Pokegame } from './Pokegame';

function App() {
  const [reloadPokegame, setReloadPokegame] = useState(false);

  const handleReloadPokegame = () => {
    setReloadPokegame(!reloadPokegame);
  };

  return (
    <div className="App">
      <button onClick={handleReloadPokegame}>Reload Pokegame</button>
      <Pokegame key={reloadPokegame} />
    </div>
  );
}

export default App;
