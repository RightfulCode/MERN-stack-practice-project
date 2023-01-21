import React from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [company, setCompany] = React.useState("");
    const [error, setError] = React.useState(false);
    const navigate = useNavigate();

    const addProduct = async () => {
        if (!name || !price || !category || !company) {
            setError(true);
            return false;
        }

        const userId = JSON.parse(localStorage.getItem("user"))._id;
        let result = await fetch("http://localhost:5000/add-product", {
            method: "post",
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        console.warn(result);
        navigate("/");
    }
    return (
        <div className="add-product">
            <h1>Add Product</h1>
            Product Name:<input type="text" className="inputBox" value={name} placeholder="Enter Name" onChange={(e) => { setName(e.target.value) }} /> <br />
            {error && !name && <span className="invalid-input">Enter valid name</span>} <br />
            Price:       <input type="text" className="inputBox" value={price} placeholder="Enter Price" onChange={(e) => { setPrice(e.target.value) }} /> <br />
            {error && !price && <span className="invalid-input">Enter valid price</span>} <br />
            Category:    <input type="text" className="inputBox" value={category} placeholder="Enter Category" onChange={(e) => { setCategory(e.target.value) }} /> <br />
            {error && !category && <span className="invalid-input">Enter valid category</span>} <br />
            Company:     <input type="text" className="inputBox" value={company} placeholder="Enter Company" onChange={(e) => { setCompany(e.target.value) }} /> <br />
            {error && !company && <span className="invalid-input">Enter valid company</span>} <br />
            <button className="button" onClick={addProduct}>Add</button>
        </div>
    );
}

export default AddProduct;