import React, { useState } from 'react'
const API_URL = 'https://brandi-bounty-hunters.herokuapp.com/v1/bounties/'

const NewBountyForm = props => {
    let [name, setName] = useState('')
    let [wantedFor, setWantedFor] = useState('')
    let [client, setClient] = useState('')
    let [reward, setReward] = useState(10000)
    let [ship, setShip] = useState('')
    let [lastSeen, setLastSeen] = useState('')
    let [captured, setCaptured] = useState(false)
    let [hunters, setHunters] = useState([])

    const handleSubmit = e => {
        e.preventDefault()
        console.log('Submitted the form', name)
        // Form the data
        let data = {
            name,
            client,
            wantedFor,
            captured,
            hunters,
            ship,
            reward,
            lastSeen
        }

        // API Call
        fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(result => {
            // Refreshing the bounties list
            props.refreshBounties()

            // Reset the state
            setName('')
            setWantedFor('')
            setClient('')
            setReward(10000)
            setShip('')
            setLastSeen('')
            setCaptured(false)
            setHunters([])
        })
        .catch(err => {
            console.log('Error POSTING', err)
        })
    }

    return (
        <div className="bounty-form">
            <h2>Add New Bounty</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input name="name" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label>Wanted For:</label>
                    <input name="wantedFor" value={wantedFor} onChange={e => setWantedFor(e.target.value)} />
                </div>
                <div>
                    <label>Client:</label>
                    <input name="client" value={client} onChange={e => setClient(e.target.value)} />
                </div>
                <div>
                    <label>Ship:</label>
                    <input name="ship" value={ship} onChange={e => setShip(e.target.value)} />
                </div>
                <div>
                    <label>Last Seen:</label>
                    <input name="lastSeen" value={lastSeen} onChange={e => setLastSeen(e.target.value)} />
                </div>
                <div>
                    <label>Cash Reward:</label>
                    <input type="number" name="reward" value={reward} onChange={e => setReward(e.target.value)} />
                </div>
                <div>
                    <label>Hunters: (Comma-separated List)</label>
                    <input name="hunters" value={hunters.join(',')} onChange={e => setHunters(e.target.value.split(','))} />
                </div>
                <div>
                    <label>Captured?:</label>
                    <input type="checkbox" name="captured" checked={captured} onChange={e => setCaptured(e.target.checked)} />
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}

export default NewBountyForm