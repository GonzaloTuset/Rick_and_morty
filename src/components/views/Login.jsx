import { useState } from "react"
import validation from "./validation"

const Login = ({login}) => {
  
    const [userData, setUserData] = useState({
      username: "",
      password:"",
    })
    const [errors, setErrors] = useState({ username: '',password: ''  });
  
  const handleInputChange =(event)=>{
    const property = event.target.name;
    const value= event.target.value;

    setUserData({...userData,[property]:value});
    validation({...userData,[property]:value}, errors,setErrors);
  }
  const sumbithandle = (event) => {
    event.preventDefault();
    login(userData)
  }
  return(
      <form onSubmit={sumbithandle}>
        <div>
        <label htmlFor="username">Email:</label>
        <input 
        type='text'
        name='username'
        value={userData.username}
        onChange={handleInputChange}
        />
        
        </div>
        <div>
        <label htmlFor="username">Password:</label>
        <input 
        type='text'
        name='password'
        value={userData.password}
        onChange={handleInputChange}
        />
        </div>
          
        <button type= 'submit' >Login</button>
  </form>
    )
}
export default Login