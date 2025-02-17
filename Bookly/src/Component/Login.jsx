import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Userlogin } from '../App';

function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [store, setStore] = useState([]);
    const navigate = useNavigate();
    const { loginbtn, setLoginbtn, UserName, setUserName } = useContext(Userlogin);

    useEffect(() => {
        fetch('http://localhost:5001/loginAccount')
            .then((res) => res.json())
            .then((data) => setStore(data));
    }, []);

    const checklogin = !email || !password || !name;

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = store.find((s) => s.email === email && s.password === password);
        if (user) {
            alert('Login Successfully..!');
            navigate('/');
            setLoginbtn(true);
            setUserName(name);
        } else {
            alert('Please register first!');
            navigate('/register');
            setUserName('');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 bg-white shadow p-4 rounded">
                        <Link to="/" className="btn btn-warning mb-3">
                            Go Back
                        </Link>
                        <h3 className="text-center mb-4">Login</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputFullName" className="form-label">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputFullName"
                                    placeholder="Enter full name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Password *
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary w-100 py-2"
                                disabled={checklogin}
                            >
                                Login
                            </button>
                        </form>
                        <div className="text-center mt-3">
                            <small>
                                Don't have an account?{' '}
                                <Link to="/register" className="text-primary">
                                    Register here
                                </Link>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
