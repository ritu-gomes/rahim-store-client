import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <section className="menu container mb-3">
            <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand text-dark font-weight-bold" to="/">Rahim-Store</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto text-light">
                        <Link className="nav-item nav-link btn btn-dark mr-2" to="/home">Home</Link>
                        <Link className="nav-item nav-link btn btn-dark mr-2" to="/adding">Add Product</Link>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;