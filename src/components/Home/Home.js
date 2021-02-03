import React, { useContext, useEffect, useState } from 'react';
import { productContext } from '../../App';
import './home.css';
import ProductCard from './ProductCard';

const Home = () => {
    const [products,setProducts] = useContext(productContext);
    const [search, setSearch] = useState('');
    useEffect(() => {
        fetch("http://localhost:5000/allProducts")
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    },[])
    return (
        <section className="home container py-3">
            <h2 className="text-center mb-3">Available Face-Washes</h2>
            <div className="text-center">
                <input 
                className="search-field px-3 py-1 mb-3"
                type="text" 
                placeholder="Search...(Expiry-Date/ Price)"
                onChange={(event) => {
                setSearch(event.target.value);
                }}/>
            </div>
            <div className="row">
                {
                    products.filter((val) => {
                        if(search === ''){
                            return val;
                        }else if(val.expiry.includes(search)){
                            return val;
                        }else if(val.price.includes(search)){
                            return val;
                        }
                    }).map(prod => <ProductCard key={prod._id} productInfo={prod}></ProductCard>)

                }
            </div>
        </section>
    );
};

export default Home;