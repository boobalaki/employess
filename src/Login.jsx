import { useState } from "react"
import { useNavigate } from "react-router-dom"

 const Login =() =>{
    const [userdetails,setuserdetails] = useState([{
        name :"boobalaki",
        password :"8897",
        
    }])
    let names = userdetails.map(user=>user.name)
    let passwords =userdetails.map(user=>user.pword)
    console.log(passwords);

    const [name,setName] =useState("")
    const[password,setpassword]=useState("")
    const[error,setError]=useState("")
    const navigate =useNavigate()
    const handleLogin=(e)=>{
        e.preventDefault()
        console.log(name.includes(name)&&passwords.includes(password));
        if(names.includes(name)&&passwords.includes(password)){
            localStorage.setItem('login',JSON.stringify("logged in"))
            navigate('/')
        }
    }
}
export default Login