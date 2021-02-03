import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useHistory } from 'react-router-dom';

const ProductCard = (props) => {
    const history = useHistory();
    const {name,price,expiry,_id} = props.productInfo;
    const deleteProduct = (id) => {
        fetch(`http://localhost:5000/delete/${id}`,{
            method: "DELETE"
        })
        window.location.reload();
    }
    const editProduct = (id) => {
        history.push(`/edit/${id}`);
    }
    return (
        <>
            <div className="col-md-6">
                <div className="card text-white bg-dark mb-3">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Price: {price}</p>
                        <p className="card-text">Expiry Date: {expiry}</p>
                        <button onClick={() => deleteProduct(_id)} className="btn btn-light mr-2 px-3"><DeleteIcon></DeleteIcon></button>
                        <button onClick={() => editProduct(_id)} className="btn btn-light mr-2 px-3"><EditIcon></EditIcon></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;