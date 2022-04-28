import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    const handleClick = (e) =>{
        e.preventDefault();
        navigate("/login");
    }

    return (
        <div className="logContainer">
            <div className="logWrapper">
                <h1 className="title">REGISTER</h1>
                <form>
                    <input 
                        value={username}
                        placeholder="Username"
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                    <input
                        value={email}
                        type="email"
                        placeholder="Email"
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <input 
                        value={password}
                        type="password"
                        placeholder="Password"
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <button
                        className="btn"
                        onClick={handleClick}
                    >
                        REGISTER 
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register