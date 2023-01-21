import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate("/signup");
    }
    return (
        <div>
            <img src='https://img.freepik.com/premium-vector/boxing-logo-design-template_565520-905.jpg?w=2000' alt='logo' className='logo'/>
            {auth ?
                <ul className='nav-ul'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link  onClick={logout} to="/signup">Logout</Link></li>
                </ul>
                :
                <ul className='nav-ul nav-right'>
                    <li><Link to="/signup">SignUp</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            }
        </div>
    )
}

export default Nav;