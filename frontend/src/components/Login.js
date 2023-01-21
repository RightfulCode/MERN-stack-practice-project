import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error,setError] = React.useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem("user");
        if (auth) {
            navigate("/")
        }
    }, [])
    const handlelogin = async () => {
        if (!email || !password) {
            setError(true);
            return false;
        }
        let result = await fetch("http://localhost:5000/login", {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        result = await result.json();
        if (result.auth) {
            localStorage.setItem("user", JSON.stringify(result.user));
            localStorage.setItem('token', JSON.stringify(result.auth));
            navigate("/");
        }
        else {
            alert("Please enter correct details");
        }
    }
    return (
        <div className="login">
            <h1>Login</h1>
            E-mail:  <input type="email" onChange={(e) => setEmail(e.target.value)} className="inputBox" placeholder="Enter E-mail" value={email} /> <br />
                     {error && !email && <span className="invalid-input">Enter valid email</span>}
            Password:<input type="password" onChange={(e) => setPassword(e.target.value)} className="inputBox" value={password} placeholder="Enter Password" /> <br />
                     {error && !password && <span className="invalid-input">Enter valid password</span>}
            <button type="button" onClick={handlelogin} className="button">Login</button>
        </div>
    )
}

export default Login;