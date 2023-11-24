import React from 'react';
import formatPrice from '../../utils/formatPrice';
import {FaSearch} from 'react-icons/fa'
import classes from './Product.module.css'
import { Link } from 'react-router-dom';
const Product = ({product}) => {
    const {id ,name , price ,image} = product
  
    return (
        <div className={classes.grid}>
            <div className={classes.box}>
            <img src = {image} alt={name}/>
            <Link to={`/products/${id}`}>
                  <FaSearch />
                </Link>
            </div>
            <footer className={classes.footer}>
                <h5>{name}</h5>
                <p>{ formatPrice(price) }</p>
            </footer>
        </div>
    );
};

export default Product;