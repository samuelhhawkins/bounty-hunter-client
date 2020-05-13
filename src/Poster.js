import React from 'react'

const API_URL = 'https://brandi-bounty-hunters.herokuapp.com/v1/bounties/'

const Poster = props => {
    const handleDelete = () => {
        fetch(API_URL + props.bounty._id, {
            method: 'DELETE'
        })
        .then(response => response.status === 204 ? {} : response.json())
        .then(() => {
            props.refreshBounties()
            if (props.bounty._id === props.currentId) {
                props.changeCurrentBounty({})
            }
        })
        .catch(err => {
            console.log('Delete error', err)
        })
    }

    let more = <button onClick={() => props.changeCurrentBounty(props.bounty)}>More</button>
    let less = <button onClick={() => props.changeCurrentBounty({})}>Less</button>
    let button = props.bounty._id === props.currentId ? less : more

    return (
        <div className="poster">
            <h1>Wanted!</h1>
            <h2>{props.bounty.name}</h2>
            <h3>${props.bounty.reward}</h3>
            {button}
            <button onClick={handleDelete}>Delete!</button>
        </div>
    )
}

export default Poster