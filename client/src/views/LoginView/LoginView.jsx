import React from 'react'
import axios from 'axios';
export const LoginView = () => {

  const handleSubmit = async(event) => {
      event.preventDefault();
      const formData = new FormData(event.target);

      //get the data from the form by name 
      const data = {
        userName:formData.get('userName'),
        password:formData.get('password')
      }

      try {

        const res = await axios.post('http://localhost:3001/api/users/login', data, {withCredentials:true})

        console.log(res.data);
        
      } catch (error) {
        console.error("There was an error", error);
      }

  }

  return (
<>
<h1>Login</h1>
<form onSubmit={handleSubmit}>
  <label>
    Username
    <input name="userName" type="text" required={true} />
  </label>
  <label>
    Password
    <input name="password" type="password" required={true} />
  </label>
  <button>Login</button>
</form>
</>
  )
}
