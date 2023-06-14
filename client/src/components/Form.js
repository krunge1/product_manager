import React, {useState} from 'react'
import axios from 'axios';

const Form = (props) => {
    const {currentProducts, setCurrentProducts} = props;
    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");
    const [price, setPrice] = useState("");
    const [priceError, setPriceError] = useState("");
    const [description, setDescription] = useState("");
    const [descriptionError, setDescriptionError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            title,
            price,
            description
        }
        console.log(currentProducts);
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
            setCurrentProducts([...currentProducts, newProduct])
            })
            .catch(err => console.log(err));
        setTitle("");
        setPrice("");
        setDescription("");
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
                        type='text'>
                    </input>                
                </div>
                <input type="submit" value="Create"/>     
            </form>
        </div>
    )
};

export default Form;