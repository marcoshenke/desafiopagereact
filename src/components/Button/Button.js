import React from 'react'
import helpers from '../../helpers'

const Button = ({words}) => {
    const TheGoatToYou = helpers.showTheGoat(words)
        return (
        <button onClick={TheGoatToYou} className='bg-nba-red p-2 rounded text-nba-blue font-bold'>{words}</button>
    )

    
}

export default Button