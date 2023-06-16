import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

const DisplayOneProduct = (props) => {
    const {id} = useParams()
    const navigate = useNavigate();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/"+id)
        .then(res=> {
            console.log(res.data);
            setProduct(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [id]);

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/'+productId)            
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
        navigate("/products")
    }

    return (
        <div>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/products/edit/" + product._id}>Edit</Link>
            <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
        </div>
    );
};

export default DisplayOneProduct