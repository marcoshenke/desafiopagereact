import React from "react"
import {Navigation} from "../../components"
import {Footer} from "../../components"

import lebronJames from '../../images/lebronjames.png'
import michaeljordan from '../../images/michaeljordan.jpg'
import './Home.css'


const Home = () => {
  return (
    <div className="flex flex-col justify-between h-screen w-screen">
       <Navigation />
       <div className="flex gap-5 p-6">
        <img alt="lebronjames" src={lebronJames}></img>
        <img alt="michaeljordan" src={michaeljordan}></img>
       </div>
       <Footer />
       
      
    </div>   

  )

   
}

export default Home