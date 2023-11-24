import React from "react";
import { useSelector,useDispatch } from "react-redux";
import classes from "./CartItems.module.css";
import formatPrice from '../../../utils/formatPrice'
import AmountBtn from "../AmountBtns/AmountBtn";
import {FaTrash} from 'react-icons/fa'

const CartItems = ({ id,image, name, color,price ,amount}) => {

    const dispatch = useDispatch()
    const RemoveItem =(id)=>{
        console.log(id);
      dispatch({type:'CLEAR_ITEM', payload : { id}});
    }
    const toggelBtn = (id , value) =>{
      console.log(id , value);
      dispatch({type:'TOGGEL_BTNS',payload:{id , value}})
    }
  return (
    <div className={classes.wrap}>
      <div className={classes.title}>
        <img src={image} alt={name} />
        <div>
          <h5  className={classes.name}>{name}</h5>
          <p className={classes.color}>
            color : <span style={{ backgroundColor: color }}></span>
          </p>
          <h5 className={classes.small}>
              <small>{formatPrice(price)}</small>
          </h5>
        </div>
      </div>
      <h5 className={classes.price}>
                {formatPrice(price)}
        </h5>
        <AmountBtn amount={amount} toggelBtn={toggelBtn} id={id}/>
        <h5 className={classes.subtotal}>{formatPrice(price * amount )}</h5>
        <button className={classes.removeBtn} onClick={()=>RemoveItem(id)}>
            <FaTrash />
        </button>
    </div>
  );
};

export default CartItems;
