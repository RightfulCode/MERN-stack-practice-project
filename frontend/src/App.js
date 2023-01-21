import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/Signup';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import Profile from './components/Profile';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route element={<PrivateComponent />}>
            <Route path='/' element={<ProductList />}/>
            <Route path='/add' element={<AddProduct />} />
            <Route path='/update/:id' element={<UpdateProduct />}/>
            <Route path='/profile' element={<Profile />} />
            <Route path='/logout' />
          </Route>

          <Route path='/signup' element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;