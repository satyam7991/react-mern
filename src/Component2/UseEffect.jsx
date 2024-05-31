import React from 'react'

const UseEffect = () => {
    const [name,setName] = useState("kiet");
    const [course,setCourse] = useState("mca");

    const changeName = () => {
        setName("kiet mca");

    }
    const changeClass = () => {
     setCourse("mca");
    }
    useEffect(() => {
        console.log("use effect hook");
    },[]);
    useEffect(()=>{
        console.log(name);
    },[name]);
  return (
    <div>
        <h1>UseEffect</h1>
        <h2>name:{name}</h2>
        <button className="btn btn-danger" onclick={changeName}>change name</button>
        <h2>course:{course}</h2>
        <button className="btn btn-danger" onclick={changeClass}> change class</button>
        </div>
  )
}

export default UseEffect;