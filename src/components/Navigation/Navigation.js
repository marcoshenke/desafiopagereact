import React from "react"
import './Navigation.css'
import logoNba from 'images/logo-nba.png'
import { Link } from "react-router-dom"


const Navigation = () => {
  return (
    <header className="header font-bold	 flex justify-between p-2 font-sans text-xl items-center	">
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
      
      <ul className="flex gap-4"> 
        <li className=" hover:text-nba-red hover:text-2xl"><Link to="/">Home</Link></li>
        <li className=" hover:text-nba-red hover:text-2xl"><Link to="/whoisthegoat">Quem é o melhor?</Link></li>        
      </ul>
      </header>
  )
    
  
}



export default Navigation