import React, { useState } from 'react'
import { addUser } from './UserReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Create = () => {


    const [name ,setName]=useState('');
    const [email,setEmail]=useState('');
    const [Password,setPassword]=useState('');
    const[Language,setLanguage]=useState('');
    const  users =useSelector((state)=>state.users);

     const dispatch = useDispatch();
    const navigate = useNavigate()


    const handleSubmit = (event) =>{
        event.preventDefault()

        dispatch(addUser({id:users[users.length-1].id +1 ,name, email,Password,Language}));
        navigate("/Login")

    }
         return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
  
                 <h3 className='p-3'>Forms</h3>
          
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>name:</label>
                    <input 
                    type="text" 
                    placeholder='text-content '
                     name='name' 
                     className='form-control'
                      onChange={e => setName(e.target.value)} />
                </div>

                <div>
                    <label htmlFor='email'>email:</label>
                    <input 
                    type="text" 
                    placeholder='text-content '
                     name='email' 
                     className='form-control' 
                     onChange={e => setEmail(e.target.value)}/>
                </div>
                <br/>
                 

                <div>
                    <label htmlFor='Password'>Password:</label>
                    <input 
                    type="text" 
                    placeholder='password '
                     name='password' 
                     className='form-control' 
                     onChange={e => setPassword(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor='Marks'>Language:</label>
                    <input 
                    type="text" 
                    placeholder='Language '
                     name='Language' 
                     className='form-control' 
                     onChange={e => setLanguage(e.target.value)}/>
                </div>

                <button className='btn btn-info'>Submit</button>
            </form>

        </div>
    </div>
  )
}

export default Create