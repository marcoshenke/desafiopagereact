import React from 'react'
import {Navigation, WhoIsTheGoat, Footer, Button} from 'components'
import lebronjames1 from "images/lebronjames1.jpeg"
import michaeljordan1 from "images/michaeljordan1.jpg"

const whoisTheGoat = () => {
  return (
    <div className='flex flex-col justify-between h-screen w-screen'>
      <Navigation />
      <div className='flex place-self-center gap-5'>
        <img className="h-96 w-96" alt="lebron" src={lebronjames1}></img>
        <div className='place-self-center flex flex-col gap-8'>
        <WhoIsTheGoat />
        <table className='table-auto text-lg'>
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
                <Button player="lebron" words="Vote em Lebron James"/>
              </td>
              <td>
                <Button player="jordan" words="Vote em Michael Jordan"/>
              </td>
            </tr>          
          </tbody>      
        </table> 
        </div>
        <img className="h-96 w-96" alt="jordan" src={michaeljordan1}></img>
      </div>
     
      
      <Footer />
    </div>
  )
}

export default whoisTheGoat