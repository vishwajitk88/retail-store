import React , {useState} from "react";
import classes from "./ImageContainer.module.css";

const ImageContainer = ({ images=[{url:''}] }) => {
    const [main, setMain] = useState(images[0])
  return (
    <div className={classes.ImageContainer}>
        <div className={classes.main}>
        <img src={main.url} alt="images"/>
        </div>
     <div className={classes.Gallary}>
     {images.map((image, index) => {
        return (
            <img src={image.url} alt="images" onClick={()=>setMain(images[index])}  key={index} className={ image.url === main.url ? classes.active : null }/>
        );
      })}
     </div>
    </div>
  );
};

export default ImageContainer;
