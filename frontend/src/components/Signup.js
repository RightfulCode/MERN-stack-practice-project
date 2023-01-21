import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("/")
        }
    })

    const collectData = async () => {
        if (!name || !email || !password) {
            setError(true);
            return false;
        }
        let result = await fetch('http://localhost:5000/register', {
            method: "post",
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': "application/json"
            },
        });
        result = await result.json()
        localStorage.setItem("user",JSON.stringify(result.result));
        localStorage.setItem("token",JSON.stringify(result.auth));
        navigate("/");
    }

    return (
        <div className="register">
            <h1>Registration</h1>
            Name:    <input className="inputBox" type="text" value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)} /> <br />
                     {error && !name && <span className="invalid-input">Enter valid name</span>} <br />
            E-mail:  <input className="inputBox" type="email" value={email} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} /><br />
                     {error && !email && <span className="invalid-input">Enter valid email</span>} <br />
            Password:<input className="inputBox" type="password" value={password} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} /><br />
                     {error && !password && <span className="invalid-input">Enter valid password</span>} <br />
            <button type="button" className="button" onClick={collectData}>Sign Up</button>
        </div>
    )
}

export default SignUp;