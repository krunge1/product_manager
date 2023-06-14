import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"
import styles from '../App.css'

const DisplayForm = (props) => {
    const {currentProducts, setCurrentProducts} = props;

        useEffect(()=>{
            axios.get("http://localhost:8000/api/products")
            .then((res)=>{
            console.log(res.data);
                setCurrentProducts([...currentProducts, res.data]);
        })
            .catch((err)=>{
                console.log(err);
            })
        }, [])

    return (
        <div>
            <h2>All Products:</h2>
            {currentProducts?
                currentProducts.map((product, index) =>
                <Link className={styles.link} to={`/products/${product.id}`} key={index}>Product</Link>
                ):
                <p>No products available.</p>
                }            
        </div>
    )
};

export default DisplayForm