import React, { useContext } from 'react';
import { MyContext } from '../Footer';

const Address = () => {
    const addressInText = useContext(MyContext);
  return (
    <div>
        <p>{addressInText}</p>
    </div>
  );
}



export default Address
