import React from "react"
import './Navigation.css'
import logoNba from '../../images/logo-nba.png'

const Navigation = () => {
  return (
    <header className="header flex justify-between p-2 font-sans text-xl items-center	">
      <div className="flex items-center	">
      <img className="w-20" alt="logo-nba" src={logoNba}></img>
      <div className="flex flex-col">
        <span className="text-nba-red">
          NBA report
        </span>
        <span className="text-nba-blue">
        Bem vindo ao melhor lugar para se informar sobre a NBA
        </span>
      </div>
      </div>
      
      <ul className="flex gap-2"> 
        <li><a href="#">Home</a></li>
        <li><a href="#">Quem é o melhor?</a></li>        
      </ul>
      </header>
  )
    
  
}



export default Navigation