import React ,{useState}from 'react'

const Hooks = () => {
const[Count,setCount]=useState(0);
const[person,setperson]=useState({firstname:"",lastname:""});
 const increasefive=()=>{
    for(let i=0;i<5;i++){
        {
            setCount(prevState=>prevState+1);
        }
    }
}
const increaseten=()=>{
    for(let i=0;i<10;i++){
        {
            setCount(prevState=>prevState+1)
        }
    }
}
  return (
    <div>
        <button onClick={()=>setCount(Count+1)}>Click me!</button>
        <p>Count value is {Count}</p>
        <button onClick={()=>increasefive()}>Click increase 5</button><br/>
 <button onClick={()=>increaseten()}>Click add 10</button>


 <hr/>
 <input type="text" onChange={(e)=> setperson({...person,firstname:e.target.value})}  placeholder='Enter the firstname:'/>
 <input type="text" onChange={(e)=> setperson({...person,lastname:e.target.value})}  placeholder='Enter the lastname:'/>
 {JSON.stringify(person)};
 <p>first name value is:{person.firstname}</p>
 <p>last name value is :{person.lastname}</p>
    </div>

  )
}

export default Hooks