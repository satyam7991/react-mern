import React from 'react'

// const Languages = () => {
//     let lang=["Java","JavaScript","Kotlin","Python","C"];
//   return (
//     <div>
//         <h1>Best Programing Languages:</h1>
//         <ul>
//             {lang.map((item,index)=>(
//           <li key={index}>{item}</li>
//             ))}
//         </ul>
//         </div>
//   )
// }

const Languages = () => {
  let lang=[
    {id:1,name:"Java"},
    {id:2,name:"JavaScript"},
    {id:3,name:"Kotlin"},
    {id:4,name:"Python"},
    {id:5,name:"C"}
  ];
  var check=false;
return (
  <div className='bg-primary-subtle'>
      <h1 className={check?"bg-warning":"bg-success text-white"}>{check ?"Best Programing Languages:" : "Top 5 programing language"}</h1>
      <ul>
          {lang.map((item)=>(
        <li key={item.id}>{item.name}</li>
          ))}
      </ul>
      </div>
)
}
export default Languages