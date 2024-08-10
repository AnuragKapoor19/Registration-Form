import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
  const [credentials, setcredentials] = useState({name:"",email:"",password:""})
  const handleChange = (e)=>{
    setcredentials({...credentials,[e.target.name]:e.target.value})
  }
  const navigate = useNavigate();
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/register",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password})
    })

    const data = await response.json()
    if(data.success){
      alert("Account Created Successfully")
      localStorage.setItem("userdata",JSON.stringify(data))
      navigate("/home")
    }else{
      alert("Please enter valid credentials")
    }
  }

  return (
    <div className="w-100 d-flex justify-content-center align-items-center background" style={{ height: "100vh"}}>
      <div className="bg-dark p-5 d-flex flex-column align-items-center" style={{ borderRadius: "20px" ,border: "2px solid white"}}>
        <h3 className='text-light mb-4'>Create Account</h3>
        <form className="text-light" onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">Name</label>
            <input type="text" className="form-control" name='name' id="exampleInputName" value={credentials.name} onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" value={credentials.email} onChange={handleChange}/>
            <div id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' id="exampleInputPassword1" value={credentials.password} onChange={handleChange}/>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
            <label className="form-check-label" htmlFor="exampleCheck1">Agree to Terms&Conditions</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}
