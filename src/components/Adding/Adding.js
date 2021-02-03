import React from 'react';
import { useForm } from 'react-hook-form';
import './adding.css';

const Adding = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data,e) => {
        fetch("http://localhost:5000/addProduct",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json" 
            },
            body: JSON.stringify(data)
        })
        console.log(data);
        e.target.reset();
    };
    return (
        <section className="delete container p3">
            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name of Product:</label> <br/>
                <input className="mb-3 px-3 py-1" type="text" name="name" ref={register}/> <br/>
                <label htmlFor="price">Price:</label> <br/>
                <input className="mb-3 px-3 py-1" type="number" name="price" ref={register}/> <br/>
                <label htmlFor="expiry">Expiry Date:</label> <br/>
                <input className="mb-3 px-3 py-1" type="date" name="expiry" ref={register}/> <br/>
                <input className="btn btn-secondary" type="submit" value="Add Product"/>
            </form>
        </section>
    );
};

export default Adding;