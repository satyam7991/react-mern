import React, { useContext } from 'react'
import B from './B'
import { nameContext } from './UseContext';

function A() {
  const Name=useContext(nameContext)

  return (
    <div>
      <h2 className='text-center bg-danger-subtle'>A componet</h2>
      <B Name={Name}/>
    </div>
  )
}

export default A;