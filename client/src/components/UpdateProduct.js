import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();

    const {currentProducts, setCurrentProducts} = props;
    const [title, setTitle] = useState()
    const [titleError, setTitleError] = useState("");
    const [price, setPrice] = useState();
    const [priceError, setPriceError] = useState("");
    const [description, setDescription] = useState();
    const [descriptionError, setDescriptionError] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/'+id)
            .then(res => {
                setTitle(res.data.title)
                setPrice(res.data.price);
                setDescription(res.data.description)
                console.log(res.data)
            })
            .catch(err => console.log(err))
        }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(currentProducts);
        axios.put('http://localhost:8000/api/products/'+id, {
            title,
            price,
            description
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
            setCurrentProducts([...currentProducts, res.data]);
        })
        .catch(err => console.log(err));
        setTitle("");
        setPrice("");
        setDescription("");
        navigate("/products")
    }


    const handleTitle = (e) => {
        setTitle(e.target.value);
        if(e.target.value === ""){
            setTitleError("");
        }else if(e.target.value.length < 2){
            setTitleError("Title must be 2 characters or longer")
        }else{
            setTitleError("");
        }
    }

    const handlePrice = (e) => {
        setPrice(e.target.value);
        if(e.target.value === ""){
            setPriceError("");
        }else if(e.target.value < 0){
            setPriceError("Price Must be greater than $0.00")
        }else{
            setPriceError("");
        }
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
        if(e.target.value === ""){
            setDescriptionError("");
        }else if(e.target.value.length < 2){
            setDescriptionError("Title must be 2 characters or longer")
        }else{
            setDescriptionError("");
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    {titleError?
                    <p>{titleError}</p>:
                    ""}
                    <label>Title:</label>
                    <input 
                        onChange = {handleTitle}
                        value={title}
                        name="title"
                        type='text'>
                    </input>
                </div>
                <div>
                    {priceError?
                    <p>{priceError}</p>:
                    ""}
                    <label>Price:</label>
                    <input 
                        onChange = {handlePrice}
                        value={price}
                        name="price"
                        type='number'>
                    </input>
                </div>
                <div>
                    {descriptionError?
                    <p>{descriptionError}</p>:
                    ""}
                    <label>Description:</label>
                    <input 
                        onChange = {handleDescription}
                        value={description}
                        name="description"
                        type='text'>
                    </input>                
                </div>
                <input type="submit" value="Edit"/>     
            </form>
        </div>
    )
}

export default UpdateProduct