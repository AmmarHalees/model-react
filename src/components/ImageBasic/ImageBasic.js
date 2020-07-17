import React from 'react';
import style from './ImageBasic.module.css';


const ImageBasic = ({src, alt}) => {
    return (<img className={style.image} src ={src} alt={alt}/>  );
}
 
export default ImageBasic;