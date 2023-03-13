import React from "react"
import {WelcomeNba} from "../../components"

import lebronJames from '../../images/lebronjames.png'
import michaeljordan from '../../images/michaeljordan.jpg'
import './Home.css'


const Home = () => {
  return (
    <div>
       <WelcomeNba />
       <img alt="lebronjames" src={lebronJames}></img>
       <img alt="michaeljordan" src={michaeljordan}></img>
       <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
    </div>   

  )

   
}

export default Home