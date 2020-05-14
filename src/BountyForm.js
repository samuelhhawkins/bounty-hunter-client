import React, {useState} from 'react';

//API uRL that we want to call
const API_URL = 'https://bounty-api-sam.herokuapp.com/v1/bounties/'



const BountyForm = props => {
  let [name, setName] = useState('')
  let [client, setClient] = useState('')
  let [reward, setReward] = useState('')
  let [ship, setShip] = useState('')
  let [wantedFor, setWantedFor] = useState('')
  let [hunters, setHunters] = useState('')

const submit = e => {
  e.preventDefault()
  console.log('submit');
  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({
      name,
      client,
      hunters: hunters.split(',').map(h => h.trim()),
      reward,
      wantedFor
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    console.log('bounty was created');
    // refresh bounties
    props.refresh()
    //clear the state variables
    setClient('')
    setHunters('')
    setShip('')
    setName('')
    setReward(10000)
  })
}


  return (
    <div className= 'bounty-form'>
        <h3>Add New Bounty</h3>
        <form onSubmit={submit}>
            <div>  <label>Name:</label>
              <input name='name'
                     value={name}
                     onChange={e => setName(e.target.value)}
               /></div>

             <div>     <label>WantedFor:</label>
                    <input name='wantedFor'
                           value={wantedFor}
                           onChange={e => setWantedFor(e.target.value)}
                     /></div>

              <div>  <label>client:</label>
                  <input name='client'
                         value={client}
                         onChange={e => setClient(e.target.value)}
                   /></div>

               <div> <label>Ship:</label>
                <input name='ship'
                       value={ship}
                       onChange={e => setShip(e.target.value)}
                 /></div>

              <div>
                 <label>Reward:</label>
                  <input name='reward'
                        type = "number"
                         value={reward}
                         onChange={e => setReward(e.target.value)}

                   /></div>

               <div>
               <label>Hunters:</label>
                   <input name='hunters'
                          value={hunters}
                          onChange={e => setHunters(e.target.value)}

                    />
            </div>
            <input type='submit' value="Make it a Bounty!" />
        </form>
    </div>
  )
}
export default BountyForm
