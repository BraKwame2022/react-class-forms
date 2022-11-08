import React, {useState} from 'react'

const FunctionalForm = () => {
    const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')


    const handleChange = (e) =>{
        setName(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setName()
    }

  return (
    <div>
        <form >
         <label>Name</label>
         <input type="text" onChange={handleChange} value={name} name="name"></input>
         <br/>
         {/* <label>Email</label>
         <input type="text" Name="email" ></input>
         <br/>
         <label>Password</label>
         <input type="password" name="password" ></input> */}
         <br/>
         <button >Submit</button>
        </form>
    
       
    <div>
        <p>Name</p>
        <p>Email</p>
        <p>Password</p>
    </div>
    </div>
  )
}

export default FunctionalForm