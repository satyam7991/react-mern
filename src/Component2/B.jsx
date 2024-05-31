import React, { useContext } from 'react'
import C from './C'
import { nameContext } from './UseContext'


function B() {
const Name=useContext(nameContext)
    return (
    <div>
        <h2 className='text-center bg-danger-subtle'>B component</h2>
        <h3 className='text-center bg-danger-subtle'>{Name[1]}</h3>
        <C/>
      
    </div>
  )
}

export default B