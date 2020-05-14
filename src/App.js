import React, { useState, useEffect } from 'react'
import ShowBounty from './ShowBounty'
import './App.css'

//Custom components
import BountyForm from './BountyForm'
import Poster from './Poster'

const API_URL = 'https://bounty-api-sam.herokuapp.com/v1/bounties/'

function App() {
  // State variables
let [bounties, setBounties] = useState([])
let [currentBounty, setCurrentBounty] = useState({})
  // Effect hook
  useEffect(() => {
    callApi()
  }, [])

  // Function to call the API and retrieve the bounties
   const callApi = () => {
     fetch(API_URL)
     .then(response => response.json())
     .then( data =>{
       console.log(data);
       setBounties(data)
     })
     .catch(err => {
       console.log('error!', err);
     })
   }

   let posters = bounties.map((b, i ) => {
     return (
      <Poster
        ket={i}
        bounty={b}
        refresh={callApi}
        currentId={currentBounty._id}
        changeCurrent={setCurrentBounty}
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
        {posters}
        <ShowBounty currentBounty={currentBounty} />
        <div>
          <BountyForm refresh={callApi}/>
        </div>
      </main>
    </div>
  );
}

export default App;
