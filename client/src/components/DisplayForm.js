import React, {useEffect} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"
import styles from '../App.css'

const DisplayForm = (props) => {
    const {currentProducts, setCurrentProducts} = props;

        useEffect(()=>{
            axios.get("http://localhost:8000/api/products")
            .then((res)=>{
            console.log(res.data);
                setCurrentProducts(res.data);
        })
            .catch((err)=>{
                console.log(err);
            })
        }, [])

    return (
        <div>
            <h2>All Products:</h2>
            {currentProducts?
                currentProducts.map((product, index) =>{
                return(
                    <div className={styles.Link}>
                    <Link key={index} to={`/products/${product._id}`}>{product.title}</Link>
                    </div>
                )}):
                <p>No products available.</p>
                }            
        </div>
    )
};

export default DisplayForm