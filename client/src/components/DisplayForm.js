import React, {useEffect} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';
import styles from '../App.css'

const DisplayForm = (props) => {
    const {currentProducts, setCurrentProducts, removeProduct} = props;
    const navigate = useNavigate();
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

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/'+productId)            
        .then(res => {
            removeProduct(productId)
        })
        .catch(err => console.log(err))
        navigate("/products")
    }

    return (
        <div>
            <h2>All Products:</h2>
            {currentProducts?
                currentProducts.map((product, index) =>{
                return(
                    <div className={styles.Link}>
                    <Link key={index} to={`/products/${product._id}`}>{product.title}</Link>
                    <Link to={"/products/edit/" + product._id}>Edit</Link>
                    <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
                    </div>
                )}):
                <p>No products available.</p>
                }          
        </div>
    )
};

export default DisplayForm