import React from 'react';
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import {useDispatch} from 'react-redux'
import classes from './AmountBtn.module.css'
const AmountBtn = ({amount,toggelBtn ,id}) => {
   
  const increase = ()=> {
    toggelBtn(id ,'inc')
  }
  const decrease = ()=> {
    toggelBtn(id ,'dec')
  }

    return (
        <div className={classes.amountbtn}>
        <button onClick={decrease}>
          <BiMinus />
        </button>
        <h2>{amount}</h2>
        <button onClick={increase}>
          <BsPlus />
        </button>
      </div>
    );
};

export default AmountBtn;