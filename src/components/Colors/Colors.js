import React, { useEffect, useState } from "react";
import { BsCheck } from "react-icons/bs";
import classes from "./Colors.module.css";
import {useDispatch} from 'react-redux'

const Colors = ({ colors = [] }) => {
  const [main, setMain] = useState(colors[0]);

const dispatch = useDispatch();
  useEffect(() => {
  dispatch({type:'COLOR',payload:{color:main}});
  }, [main])
  // console.log(main);
  return (
    <p className={classes.colors}>
      <span>Colors : </span>
      {colors.map((color, index) => {
        return (
          <button
            key={index}
            className={main === color ? classes.active : null}
            style={{ background: color }}
            onClick={() => setMain(colors[index])}
          >
            {main === color ? <BsCheck /> : null}
          </button>
        );
      })}
    </p>
  );
};

export default Colors;
