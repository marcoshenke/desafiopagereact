import React from 'react'
import {Navigation, WhoIsTheGoat, Footer, Button} from '../../components'

const whoisTheGoat = () => {
  return (
    <div className='flex flex-col justify-between h-screen w-screen'>
      <Navigation />
      <div className='place-self-center	'>
      <WhoIsTheGoat />
      <table className='table-auto'>
        <thead>
          <tr>
            <th>
              Michael Jordan
            </th>
            <th>
              Lebron James
            </th>
          </tr>          
        </thead>
        <tbody>
          <tr>
            <td>
              <Button className='button1' words="VOTE em Lebron James"/>
            </td>
            <td>
              <Button className='button2' words="VOTE em Michael Jordan"/>
            </td>
          </tr>          
        </tbody>      
      </table> 
      </div>
      
      <Footer />
    </div>
  )
}

export default whoisTheGoat