import React, { useReducer } from 'react'

const UseReducer = () => {
    const initcolor="#000000";
    const reducer=(color,action)=>{
        switch(action){
            case "red":
                return (color="#ff0000");
                case "green":
                return (color="#00ff00");
                case "blue":
                return (color="#0000ff");
                default:
                    return color;
        }

    }
    const [color,dispatch]=useReducer(reducer,initcolor);

  return (
    <div className='bg-success'>
             <h1 className='text-center'>Usereducer example </h1>
             <h2 className='text-center' style={{color:color}}>MCA REACT CLASSES</h2>
             <div className='text-center'>
             <button className="btn btn-primary m-2" onClick={()=>dispatch("red")}>RED</button>
             <button className="btn btn-primary m-2"  onClick={()=>dispatch("green")}>green</button>
             <button className="btn btn-primary m-2"  onClick={()=>dispatch("blue")}>blue</button>
              </div>
    </div>
  )
}

export default UseReducer;