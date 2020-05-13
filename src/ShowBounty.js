import React from 'react'

const ShowBounty = props => {
    let display = <h3>Crime is on the rise!</h3>
    if (props.current.name) {
        display = (
            <div>
                <h2>{props.current.name}: ${props.current.reward}</h2>
                <h3>Wanted For: {props.current.wantedFor}</h3>
                <p>
                    Last seen {props.current.lastSeen} or perhaps aboard the {props.current.ship || 'unknown ship'}!
                </p>
                <p><strong>Hunted By:</strong> {props.current.hunters.join(' & ')}</p>
                <p><strong>STATUS:</strong> {props.current.captured ? 'CAUGHT' : 'AT LARGE'}</p>
            </div>
        )
    }

    return (
        <div className="show-bounty">
            {display}
        </div>
    )
}

export default ShowBounty