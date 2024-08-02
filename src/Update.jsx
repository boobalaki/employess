import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from './UserReducer';




const   Update= () => {
    const {id} =useParams();
    const  users =useSelector((state)=>state.users);

    const existingUser =users.filter(f => f.id==id);
    const {email,name,Password,Language} =existingUser[0]
    const [uname ,setName]=useState(name);
    const [uemail,setEmail]=useState(email);
    const [uPassword,setPassword]=useState(Password);

    const [uLanguage,setLanguage]=useState(Language);
    
    const dispatch =useDispatch();
    const navigate =useNavigate();

    const handleUpdate =(event) => {
        event.preventDefault();
        dispatch(updateUser({
            id:id,
            name:uname,
            email:uemail,
            Password:uPassword,
            Language:uLanguage,
        }))
         navigate("/")
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5'>

             <h3 className='p-3'>Update New Users</h3>
      
        <form onSubmit={handleUpdate}>
            <div>
                <label htmlFor='name'>name:</label>
                <input 
                type="text" 
                placeholder='text-content '
                 name='name' 
                 className='form-control'
                 value={uname}
                 onChange={e => setName(e.target.value)}
                  />
            </div>

            <div>
                <label htmlFor='email'>email:</label>
                <input 
                type="text" 
                placeholder='text-content '
                 name='email' 
                 className='form-control' 
                 value={uemail}
                 onChange={e =>setEmail(e.target.value)}
                 />
            </div>
            <div>
                <label htmlFor='password'>Password:</label>
                <input 
                type="text" 
                placeholder='text-content '
                 name='MobileNo' 
                 className='form-control' 
                 value={uPassword}
                 onChange={e =>setPassword(e.target.value)}
                 />
            </div>
            
            <div>
                <label htmlFor='Marks'>Language:</label>
                <input 
                type="text" 
                placeholder='text-content '
                 name='Marks' 
                 className='form-control' 
                 value={uLanguage}
                 onChange={e =>setLanguage(e.target.value)}
                 />
            </div>
            
            <br/>

            <button className='btn btn-info'>Update</button>
        </form>

    </div>
</div>
  )
}

export default  Update