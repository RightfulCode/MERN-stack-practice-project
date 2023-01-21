import React, { useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom"; 

const UpdateProduct = () => {
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [company, setCompany] = React.useState("");
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductDetails();
    }, [])

    const getProductDetails = async () => {
        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }

    const updateProduct = async () => {
        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            method:"put",
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':"application/json",
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        navigate("/")
    }
    return (
        <div className="add-product">
            <h1>Update Product</h1>
            Product Name:<input type="text" className="inputBox" value={name} placeholder="Enter Name" onChange={(e) => { setName(e.target.value) }} /> <br />
            Price:       <input type="text" className="inputBox" value={price} placeholder="Enter Price" onChange={(e) => { setPrice(e.target.value) }} /> <br />
            Category:    <input type="text" className="inputBox" value={category} placeholder="Enter Category" onChange={(e) => { setCategory(e.target.value) }} /> <br />
            Company:     <input type="text" className="inputBox" value={company} placeholder="Enter Company" onChange={(e) => { setCompany(e.target.value) }} /> <br />
            <button className="button" onClick={updateProduct}>Update</button>
        </div>
    );
}

export default UpdateProduct;