import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  // State variables

  // Effect hook
  useEffect(() => {
    console.log('Hello!')
  }, [])

  // Function to call the API and retrieve the bounties
  // TODO

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wanted Poster Bulletin Board</h1>
        <p>Reduce crime in your neighborhood!</p>
      </header>
      <main>
        TODO: BOUNTIES AND BOUNTY FORM
      </main>
    </div>
  );
}

export default App;
