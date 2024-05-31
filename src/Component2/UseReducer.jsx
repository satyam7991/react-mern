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
    <div>
             <h1>Usereducer example </h1>
             <h2 style={{color:color}}>MCA REACT CLASSES</h2>
             <button className="btn btn-primary m-2" onClick={()=>dispatch("red")}>RED</button>
             <button className="btn btn-primary m-2"  onClick={()=>dispatch("green")}>green</button>
             <button className="btn btn-primary m-2"  onClick={()=>dispatch("blue")}>blur</button>

    </div>
  )
}

export default UseReducer;