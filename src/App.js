import React, { useState, useEffect } from 'react'
import './App.css'

import NewBountyForm from './NewBountyForm'
import Poster from './Poster'
import ShowBounty from './ShowBounty'

const API_URL = 'https://brandi-bounty-hunters.herokuapp.com/v1/bounties/'

function App() {
  // State variables
  let [bounties, setBounties] = useState([])
  let [currentBounty, setCurrentBounty] = useState({})

  // Effect hook
  useEffect(() => {
    console.log('Hello!')
    getBounties()
  }, [])

  // Function to call the API and retrieve the bounties
  const getBounties = () => {
    fetch(API_URL)
    .then(response => response.json())
    .then(foundBounties => {
      console.log('Success', foundBounties)
      setBounties(foundBounties)
    })
    .catch(err => {
      console.log('Error fetching bounties?', err)
      setBounties([{
        name: 'Fake Han Solo',
        wantedFor: 'Schmuggling',
        reward: 1234567,
        client: 'Jabba the Hut',
        lastSeen: 'The Netherlands???',
        hunters: ['Me', 'You'],
        ship: 'Millenium Falcon',
        _id: 'sdfghjkl'
      }])
    })
  }

  let posters = bounties.map((b, i) => {
    return (
      <Poster 
        key={b._id} 
        bounty={b} 
        refreshBounties={getBounties}
        changeCurrentBounty={setCurrentBounty}
        currentId={currentBounty._id}
      />
    )
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wanted Poster Bulletin Board</h1>
        <p>Reduce crime in your neighborhood!</p>
      </header>
      <main>
        <div>{posters}</div>
        <ShowBounty current={currentBounty} />
        <NewBountyForm refreshBounties={getBounties} />
      </main>
    </div>
  );
}

export default App;
