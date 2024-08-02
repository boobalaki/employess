import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser } from './UserReducer';




const Home = () => {
    const  users =useSelector((state)=>state.users);
    const dispatch =useDispatch();
    // console.log(users);

    const handleDelete =(id) => {
          dispatch(deleteUser ({id:id}))
    }

  return (
    <div className='Container'>

        <h2 className='text-center mt-5'>REACT-FORMS CREATIONS</h2>
        <hr/>
        <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  Menubar
</a>
{/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  Button with data-bs-target
</button> */}

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Create Student 
      list
    </h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    {/* <div>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div> */}
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <Link to="/Create" className='btn btn-success my-3 text-center '> Create +</Link>

        {/* <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li> */}
      </ul>
    </div>
  </div>
</div>
        {/* <Link to="/Create" className='btn btn-success my-3 text-center '> Create +</Link> */}
        <hr/>

        <table className='table'>
            <thead>
                <tr key="">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Language</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
        {users.map((users,index) => (
            <tr key={index}>
                <td>{users.id}</td>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>{users.Password}</td>
                <td>{users.Language}</td>
                
                <td>
                    <Link to={`/edit/${users.id}`} className='btn btn-sm btn-dark'><i class="bi bi-pencil-square"></i></Link>
                    <button className='btn btn-sm btn-danger ms-4' onClick={()=>handleDelete(users.id)}><i class="bi bi-trash-fill"></i></button>

                </td>
            </tr>
           ))}
        </tbody>
        </table>
          
       
      
    </div>
  )
}

export default Home