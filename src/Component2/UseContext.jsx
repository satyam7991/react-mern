import React from 'react'
import A from './A'
export const nameContext= React.createContext();
function UseContext() {
  return (
    <>
        <h1 className='text-center bg-danger-subtle'>USe Context Hook</h1>
        <nameContext.Provider value={["kiet","satyam"]}>
    <A/>
            </nameContext.Provider>   
      
 </>
  )
}

export default UseContext