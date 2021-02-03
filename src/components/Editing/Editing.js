import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { productContext } from '../../App';
import '../Adding/adding.css';

const Editing = () => {
    const {id} = useParams();
    const history = useHistory();
    const [products,setProducts] = useContext(productContext);
    const editableProduct = products.find(prd => prd._id === id);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        fetch(`http://localhost:5000/edit/${id}`,{
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        history.push("/");
    };
    return (
        <section className="edit container p3">
            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name"> Edit Name of Product:</label> <br/>
                <input defaultValue={editableProduct.name} className="mb-3 px-3 py-1" type="text" name="name" ref={register}/> <br/>
                <label htmlFor="price">Edit Product Price:</label> <br/>
                <input defaultValue={editableProduct.price} className="mb-3 px-3 py-1" type="number" name="price" ref={register}/> <br/>
                <label htmlFor="expiry">Edit Expiry Date:</label> <br/>
                <input defaultValue={editableProduct.expiry} className="mb-3 px-3 py-1" type="date" name="expiry" ref={register}/> <br/>
                <input className="btn btn-secondary" type="submit" value="Update Product"/>
            </form>
        </section>
    );
};

export default Editing;