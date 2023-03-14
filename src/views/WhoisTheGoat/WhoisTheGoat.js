import React from 'react'
import {Navigation, WhoIsTheGoat, Footer} from '../../components'

const whoisTheGoat = () => {
  return (
    <div className='flex flex-col justify-between h-screen w-screen'>
      <Navigation />
      <div>
      <WhoIsTheGoat />
      <table>
        <th>
          Michael Jordan
        </th>
        <th>
          Lebron James
        </th>
        <tr>
          <button>Vote MJ</button>
        </tr>
        <tr>
          <button>Vote LBJ</button>
        </tr>
      </table> 
      </div>
      
      <Footer />
    </div>
  )
}

export default whoisTheGoat