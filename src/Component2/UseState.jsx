import React from 'react'

const UseState = () => {
    const [userInfo,setName] = UseState({ name:"KIET", class: "mca"});
    const [counter,setCounter] = UseState(0);
    const changeName=() => {
       setUserInfo = ({...userInfo, name:"KIET MCA"});
        console.log(userInfo.name);
    };
  return (
   <div>
    <h1>Name:{userInfo.name}</h1>
    <h1>class:{userInfo.class}</h1>
 <button className= "btn btn-primary" onclick={changeName}>change name</button>
 <h2>Counter:{counter}</h2>
 <button className= "btn btn-primary" 
 onclick={()=>{
    setCounter((prevCounter)=> prevCounter+1);
    setCounter((prevCounter)=> prevCounter+1);
    setCounter((prevCounter)=> prevCounter+1);
   
    }}
    >
        Increment Counter +3</button>

 </div>
  );
}

export default UseState;