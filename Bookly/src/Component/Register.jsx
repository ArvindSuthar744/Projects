import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e)=>{

        e.preventDefault();
        // console.log({name,email})

        const jsonData = {name,email,password};

        fetch('http://localhost:5001/loginAccount',{
            method:"post",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(jsonData)
        })
        .then((res)=>{
            if(res)
            {
                alert('Registeration Successfully..!');
                navigate('/login')
            }
        })
    }


    return (
        <div>
            <div className="container">
                <div className="row justify-content-center p-5">
                    <div>
                        <Link to="/" className="btn btn-warning my-2">
                            Go back
                        </Link>
                    </div>
                    <div className="col-xl-6">
                        <h3>Register</h3>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Full name*</label>
                                    <input type="text" className="form-control" 
                                    id="exampleInputFullName" 
                                    aria-describedby="emailHelp" 
                                    placeholder="Enter full name"
                                    value={name}
                                    onChange={(e)=>{
                                        setName(e.target.value)
                                    }} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address *</label>
                                    <input type="email" className="form-control" 
                                    id="exampleInputEmail1" 
                                    aria-describedby="emailHelp" 
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e)=>{
                                        setEmail(e.target.value)
                                    }} 
                                     />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" 
                                    id="exampleInputPassword1" 
                                    placeholder="Password" 
                                    value={password}
                                    onChange={(e)=>{
                                        setPassword(e.target.value)
                                    }}
                                    />
                                </div>
                                {/* <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Show</label>
                                </div> */}
                                <button type="submit" className="btn btn-primary px-5 py-2">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
