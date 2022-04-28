import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleClick = (event) =>{
        event.preventDefault();
    }

    return (
        <div className="logContainer">
            <div className="logWrapper">
                <h1 className="title">SIGN IN</h1>
                <form>
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <input 
                        type="password"
                        placeholder="Password"
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <button
                        className="btn"
                        onClick={handleClick}
                    >
                        LOGIN 
                    </button>
                    {error && (
                        <span className="err">Wrong Credentials! Please try again</span>
                    )}
                    <span className="forPass">DO NOT REMEMBER YOUR PASSWORD!</span>
                    <Link to="/register">
                        <span className="forReg">Not Registered! CREATE A NEW ACCOUNT</span>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login