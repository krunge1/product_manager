import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DisplayOneProduct = (props) => {
    const {id} = useParams()
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/"+id)
        .then(res=> {
            console.log(res.data);
            setProduct(res.data[0]);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [id]);

    return (
        <div>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    );
};

export default DisplayOneProduct