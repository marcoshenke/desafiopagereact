import React from 'react'
import helpers from 'helpers'

const Button = ({words, player}) => {
        return (
        <button onClick={() => helpers.showTheGoat(player)} className='bg-nba-red p-2 rounded text-white font-bold'>{words}</button>
    )

    
}

export default Button