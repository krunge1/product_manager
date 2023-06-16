import React, {useEffect} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';
import styles from '../styles/DisplayForm.module.css'

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
                    <table className={styles.table}>
                        <tr className={styles.tableData}>
                            <th className={styles.tableData}>Product</th>
                            <th className={styles.tableData}>Actions</th>
                        </tr>
            {currentProducts?
                currentProducts.map((product, index) =>{
                return(
                        <tr className={styles.tableData}>
                            <td className={styles.tableData}>
                                <Link key={index} to={`/products/${product._id}`}>{product.title}</Link>
                            </td>
                            <td className={styles.tableData}>
                                <Link className={styles.link} to={"/products/edit/" + product._id}>Edit</Link>
                                <button className={styles.link} onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
                            </td>
                        </tr>
                )}):
                <p>No products available.</p>
            }          
                    </table>
        </div>
    )
};

export default DisplayForm