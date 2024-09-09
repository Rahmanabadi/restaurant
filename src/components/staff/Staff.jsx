import React, { useState } from 'react'
import StaffMembers from './StaffMembers/StaffMembers'

const Staff = () => {
    const owner = 'Der Eigentümer'; 
    const [manager,setManager] = useState('Die Managerin')
    const [theStaff,setTheStaff] = useState([
      {
        id : 1,
        Name : 'Frau A', 
        Job : 'Kelnerin', 
    },
    {
        id : 2,
        Name : 'Herr B', 
        Job : 'Koch',
    },
    {
        id : 1,
        Name : 'Frau C', 
        Job : 'Kassierer', 
    },
    {
        id : 1,
        Name : 'Frau D', 
        Job : 'Kelnerin', 
    },
    ]) 

  return (
    <StaffMembers ownerName={owner} ourManager={manager} ourStaff={theStaff}/>
  )
}

export default Staff
